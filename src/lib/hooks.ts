import { useEffect } from 'react';

import { randomBetween, roundToEven } from '.';
import { Particle } from './particle';
import { Vector } from './vector';

/**
 * Custom hook used to draw the face vector on about page.
 */
export function useLandingPageCanvasEffect(): void {
  useEffect(() => {
    /**
     * Small fish properties.
     */
    const SMALL_FISH = {
      /**
       * It's Size.
       */
      SIZE: 1,

      /**
       * The total number of small fish.
       */
      COUNT: 200,

      /**
       * The color of the small fish.
       */
      COLOR: '#eefac9',

      /**
       * The distance to which the small fish are attracted to food.
       */
      FOOD_ATTRACTION_RADIUS: 100,

      /**
       * The distance to which the small fish are attracted to mouse pointer.
       */
      MOUSE_ATTRACTION_RADIUS: 100
    };

    /**
     * The food particle color.
     */
    const FOOD_COLOR = '#e6db74';

    /**
     * The number of food particles droppen when double tapped.
     */
    const FOOD_DROP_COUNT = 100;

    let mouseX = 0;
    let mouseY = 0;
    const smallFishes = [];
    const foods = [];
    let animationId;

    const canvas: HTMLCanvasElement = <HTMLCanvasElement>(
      document.getElementById('landing-canvas')
    );
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('touchstart', handleMouseDown);
    canvas.addEventListener('touchmove', handleMouseMove);
    canvas.addEventListener('touchend', handleMouseUp);
    canvas.addEventListener('dblclick', handleDoubleClick);

    const {
      width: canvasWidth,
      height: canvasHeight
    } = canvas.getBoundingClientRect();

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    initializeParticles();
    render();

    /**
     * Create the fishes with with initial positions and velocity.
     */
    function initializeParticles() {
      for (let i = 0; i < SMALL_FISH.COUNT; i++) {
        const velocity = new Vector(0, 0);
        velocity.setAngle(Math.random() * 2 * Math.PI);
        velocity.setLength(1);

        const smallFish = new Particle({
          radius: SMALL_FISH.SIZE,
          position: new Vector(
            Math.random() * canvasWidth,
            Math.random() * canvasHeight
          ),
          velocity
        });

        smallFishes.push(smallFish);
      }
    }

    /**
     * Renders each frame.
     */
    function render() {
      // Paint the canvas with transparentcy for creating the trail effect.
      ctx.fillStyle = 'rgba(25, 30, 35, .1)';
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      // For each small fish.
      for (let i = 0; i < SMALL_FISH.COUNT; i++) {
        const smallFish = smallFishes[i];

        let currentSmallFishAngle = smallFish.velocity.angle;

        let attractedFood;

        // For each food particle.
        for (let fi = 0, closestFoodDistance = 20000; fi < foods.length; fi++) {
          const distanceToFood = foods[fi].distanceTo(smallFish);

          // If the food is within the food attraction raidus.
          if (distanceToFood < SMALL_FISH.FOOD_ATTRACTION_RADIUS) {
            // If the distance to the current food is less than an already known distance to food,
            // then make it as the attracted food since it is the closest. Closest food is always
            // consumed first.
            if (distanceToFood < closestFoodDistance) {
              closestFoodDistance = distanceToFood;
              attractedFood = foods[fi];
            } else if (distanceToFood - closestFoodDistance < 1) {
              // This is for a case where deadlock might happen between to food particles at same distance.
              // In that case we take the first one in the food array.
              attractedFood = foods[fi];
              break;
            }
          }
        }

        // Attract to mouse pointer only if not attracted to food to avoid deadlock.
        if (!attractedFood && mouseX && mouseY) {
          const mousePoint = new Particle({
            radius: 1,
            position: new Vector(mouseX, mouseY)
          });

          // If the fish is within attraction distance to mouse point.
          if (
            mousePoint.distanceTo(smallFish) <
            SMALL_FISH.MOUSE_ATTRACTION_RADIUS
          ) {
            // Set the fish's angle to point to the mouse point.
            currentSmallFishAngle = smallFish.angleTo(mousePoint);
          }
        }

        // If the fish is within attraction distance to a food.
        if (attractedFood) {
          // Find the angle of the fish to the food.
          currentSmallFishAngle = smallFish.angleTo(attractedFood);

          // If the fish has reached the food, remove the food from the food array.
          if (
            Math.trunc(attractedFood.position.x) ==
              Math.trunc(smallFish.position.x) &&
            Math.trunc(attractedFood.position.y) ==
              Math.trunc(smallFish.position.y)
          ) {
            const index = foods.indexOf(attractedFood);
            foods.splice(index, 1);
          }
        }

        // Add some randomess to avoid straight line movement to the food.
        const nextSmallFishAngle =
          Math.random() > 0.5
            ? currentSmallFishAngle + 0.2
            : currentSmallFishAngle - 0.2;

        smallFish.velocity.setAngle(nextSmallFishAngle);
        smallFish.updatePosition();

        ctx.fillStyle = SMALL_FISH.COLOR;

        smallFish.render(ctx);

        smallFish.screenWrap(canvasWidth, canvasHeight);
      }

      // Render food particles.
      for (let i = 0; i < foods.length; i++) {
        ctx.fillStyle = FOOD_COLOR;
        foods[i].render(ctx);
      }

      animationId = requestAnimationFrame(render);
    }

    /**
     * Handles mousedown and touchstart events on the canvas.
     */
    function handleMouseDown(event) {
      if (event.touches) {
        mouseX = event.touches[0].pageX;
        mouseY = event.touches[0].pageY;
      } else {
        mouseX = event.pageX;
        mouseY = event.pageY;
      }
    }

    /**
     * Handles mousemove and touchmove events on the canvas.
     */
    function handleMouseMove(event) {
      if (mouseX && mouseY) {
        if (event.touches) {
          mouseX = event.touches[0].pageX;
          mouseY = event.touches[0].pageY;
        } else {
          mouseX = event.pageX;
          mouseY = event.pageY;
        }
      }
    }

    /**
     * Handles mouseup and touchend events on the canvas.
     */
    function handleMouseUp() {
      mouseX = mouseY = undefined;
    }

    /**
     * Handles doubletap events on the canvas.
     * Create a new food particle at the touch location.
     */
    function handleDoubleClick() {
      for (let i = 0; i < FOOD_DROP_COUNT; i++) {
        const food = new Particle({
          radius: 1,
          position: new Vector(
            Math.random() * canvasWidth,
            Math.random() * canvasHeight
          )
        });

        foods.push(food);
      }
    }

    return () => {
      canvas.addEventListener('mousedown', handleMouseDown);
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseup', handleMouseUp);
      canvas.addEventListener('touchstart', handleMouseDown);
      canvas.addEventListener('touchmove', handleMouseMove);
      canvas.addEventListener('touchend', handleMouseUp);
      smallFishes.length = 0;
      foods.length = 0;
      cancelAnimationFrame(animationId);
    };
  }, []);
}

export function useDrawFaceOnCanvas(): void {
  /**
   * The springiness of the animation.
   */
  const SPRING_COEFFICIENT = 0.09;

  /**
   * The friction of the particles.
   */
  const FRICTION = 0.8;

  /**
   * The stages of rendering of the face.
   */
  const STAGGER_SLICES = 3;

  /**
   * The time to elapse between each stage.
   */
  const STAGGER_INTERVAL = 3000;

  /**
   * The radius for hover affects.
   */
  const HOVER_CIRCLE_RADIUS = 70;

  /**
   * The radius of the particle when they are hovered.
   */
  const PARTICLE_HOVER_RADIUS = 3;

  /**
   * The default radius of the particle.
   */
  const PARTICLE_RADIUS = 1;

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    const canvas: HTMLCanvasElement = <HTMLCanvasElement>(
      document.getElementById('about-face-canvas')
    );
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchstart', handleTouchStartAndEnd);
    canvas.addEventListener('touchmove', handleMouseMove);
    canvas.addEventListener('touchEnd', handleTouchStartAndEnd);

    const canvasDimensions = canvas.getBoundingClientRect();
    const { left: canvasStartX, top: canvasStartY } = canvasDimensions;
    let {
      width: canvasWidth,
      height: canvasHeight
    } = canvas.getBoundingClientRect();

    canvasWidth = canvas.width = roundToEven(canvasWidth);
    canvasHeight = canvas.height = roundToEven(canvasHeight);

    const halfCanvasWidth = canvasWidth / 2;
    const halfCanvasHeight = canvasHeight / 2;

    const imageSide = roundToEven(Math.min(canvasWidth, canvasHeight));
    const imageStartX = halfCanvasWidth - imageSide / 2;
    const imageStartY = halfCanvasHeight - imageSide / 2;

    const img = new Image();
    let positions = [];
    const springPairs = [];
    const particleColors = ['#ff2286', '#eefac9', '#363b41'];
    let limit;

    img.onload = function () {
      positions = getImagePixelPositions();
      initializeParticles();
      staggerParticles();
      render();
    };
    img.src = 'img/db_face.png';

    /**
     * Find the pixel position of all black pixels on the canvas.
     */
    function getImagePixelPositions(): Vector[] {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      ctx.drawImage(img, imageStartX, imageStartY, imageSide, imageSide);

      const imgData = ctx.getImageData(
        imageStartX,
        imageStartY,
        imageSide,
        imageSide
      );

      const data = imgData.data;
      const pixelPositions = [];

      // Iterate through each pixel data.
      for (let i = 0, pixelPos = 0; i < data.length; i += 4, pixelPos += 1) {
        const red = data[i];
        const green = data[i + 1];
        const blue = data[i + 2];

        // Initial image is black and white. So, we find all black pixels and find their x and y positions
        // on the canvas.
        if (!(red >= 10 && green >= 10 && blue >= 10)) {
          const x = imageStartX + Math.floor(pixelPos % imageSide);
          const y = imageStartY + Math.floor(pixelPos / imageSide);

          const position = new Vector(x, y);
          pixelPositions.push(position);
        }
      }

      // We clear the canvas of the original image.
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      return pixelPositions;
    }

    /**
     * Create the particles and spring points based on the pixel positions in the canvas.
     */
    function initializeParticles() {
      positions.forEach((position, index) => {
        // TODO: Remove for mobile.
        if (index % 2) {
          const springPoint = new Particle({
            radius: PARTICLE_RADIUS,
            position
          });

          const particle = new Particle({
            radius: PARTICLE_RADIUS,
            position: new Vector(
              Math.round(Math.random() * canvasWidth),
              Math.round(Math.random() * canvasHeight)
            ),
            friction: FRICTION
          });

          springPairs.push({
            springPoint,
            particle
          });
        }
      });
    }

    /**
     * Sets a limit on the number of particles that are rendered a time.
     * Basically slices the total particles into chunks and increases limit in intervals.
     */
    function staggerParticles() {
      limit = springPairs.length / STAGGER_SLICES;
      const interval = setInterval(() => {
        limit += springPairs.length / STAGGER_SLICES;

        if (limit > springPairs.length) {
          limit = springPairs.length;
          clearInterval(interval);
        }
      }, STAGGER_INTERVAL);
    }

    /**
     * Renders the particles on the screen.
     */
    function render() {
      // Clear the canvas.
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // For each particle within the limit.
      for (let i = 0; i < limit; i++) {
        let { springPoint } = springPairs[i];
        const { particle } = springPairs[i];

        if (mouseX && mouseY) {
          // The current most position if canvas is hovered.
          const newMousePoint = new Particle({
            radius: PARTICLE_RADIUS,
            position: new Vector(mouseX, mouseY)
          });

          // If the distance between the current particle and mouse point is than said radius.
          if (newMousePoint.distanceTo(springPoint) < HOVER_CIRCLE_RADIUS) {
            // Find the angle to the particle's spring point from the mouse point.
            const angleToSpringPoint = newMousePoint.angleTo(springPoint);
            particle.radius = PARTICLE_HOVER_RADIUS;

            // Say if the angle between the mouse point and spring point is 30 degrees and the
            // distance is less than HOVER_CIRCLE_RADIUS, then creaste a vector setting it in the same
            // direction and set the distance to HOVER_CIRCLE_RADIUS.
            const addition = new Vector();
            addition.setAngle(angleToSpringPoint);
            addition.setLength(HOVER_CIRCLE_RADIUS);

            // Now add the above vector to the mouse point to get a new point that is at HOVER_CIRCLE_RADIUS distance
            // from the mouse point and in the same direction as the original spring point.
            newMousePoint.position.add(addition);
            springPoint = newMousePoint;

            // Since particle's udpate is set to false when springiness subsides,
            // set it to true to animate on hover.
            particle.update = true;
          } else {
            particle.radius = PARTICLE_RADIUS;
          }
        }

        if (particle.update) {
          const distance = Vector.subtract(
            springPoint.position,
            particle.position
          );

          const springForce = Vector.multiply(distance, SPRING_COEFFICIENT);
          particle.velocity.add(springForce);

          particle.updatePosition();

          const index = Math.floor(Math.random() * particleColors.length);
          ctx.fillStyle = particleColors[index];

          particle.render(ctx);

          particle.addFriction();

          // If the particle has come to stand still stop updating it.
          if (distance.length < 0.0001) {
            particle.update = false;
          }
        } else {
          const index = Math.floor(Math.random() * particleColors.length);
          ctx.fillStyle = particleColors[index];
          particle.render(ctx);
        }
      }

      requestAnimationFrame(render);
    }

    function handleTouchStartAndEnd() {
      mouseX = mouseY = undefined;
    }

    /**
     * Handles mouse movement on the canvas.
     * @param param0 Ha
     */
    function handleMouseMove(event) {
      let x, y;
      if (event.touches) {
        x = event.touches[0].pageX;
        y = event.touches[0].pageY;
      } else {
        x = event.pageX;
        y = event.pageY;
      }

      mouseX = x - canvasStartX;
      mouseY = y - canvasStartY;

      mouseX = mouseX < 0 ? -5000 : mouseX;
      mouseY = mouseY < 0 ? -5000 : mouseY;
    }

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      positions.length = 0;
      springPairs.length = 0;
      limit = 0;
    };
  }, []);
}

/**
 * Custom hook for text effect.
 * @param id The id of the canvas.
 * @param text The text to be displayed in the canvas.
 */
export function useTextEffect(id: string, text: string): void {
  /**
   * The default radius of the particle.
   */
  const PARTICLE_RADIUS = 1;

  useEffect(() => {
    setTimeout(() => {
      const canvas: HTMLCanvasElement = <HTMLCanvasElement>(
        document.getElementById(id)
      );
      const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

      const {
        width: canvasWidth,
        height: canvasHeight
      } = canvas.getBoundingClientRect();

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      const halfCanvasWidth = roundToEven(canvasWidth / 2);
      const halfCanvasHeight = roundToEven(canvasHeight / 2);

      const particleColors = ['#ff2286', '#eefac9'];
      let textWidth;
      const textHeight = 200;
      let textStartX;
      let textStartY;
      let data;

      const positions = getTextPixelPositions();

      const springPairs = [];
      initializeParticles();
      render();

      function getTextPixelPositions(): Vector[] {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = '#ffffff';
        ctx.font = '140px Nunito Sans';

        textWidth = roundToEven(ctx.measureText(text).width) + 10;
        textStartX = halfCanvasWidth - textWidth / 2 - 5;
        textStartY = halfCanvasHeight - textHeight / 2;

        ctx.strokeText(text, textStartX, halfCanvasHeight + 50);
        const imgData = ctx.getImageData(
          textStartX,
          textStartY,
          textWidth,
          textHeight
        );

        data = imgData.data;
        const pixelPositions = [];

        // Iterate through each pixel data.
        for (let i = 0, index = 0; i < data.length; i += 4, index++) {
          const red = data[i];
          const green = data[i + 1];
          const blue = data[i + 2];

          // Initial image is black and white. So, we find all black pixels and find their x and y positions
          // on the canvas.
          if (red >= 255 && green >= 255 && blue >= 255) {
            const x = textStartX + (index % textWidth);
            const y = textStartY + Math.floor(index / textWidth);
            const position = new Vector(x, y);
            pixelPositions.push(position);
          }
        }

        // We clear the canvas of the original image.
        // ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        return pixelPositions;
      }

      /**
       * Create the particles and spring points based on the pixel positions in the canvas.
       */
      function initializeParticles() {
        for (let i = 0; i < positions.length; i++) {
          const velocity = new Vector(0, 0);
          velocity.setAngle(Math.random() * 2 * Math.PI);
          velocity.setLength(Math.random() * 2 + 1);

          const springPoint = new Particle({
            radius: 1,
            position: new Vector(positions[i].x, positions[i].y),
            velocity
          });

          let position;
          const random = Math.random();

          if (random < 0.2) {
            position = new Vector(
              Math.random() * canvasWidth,
              randomBetween(0, -300)
            );
          } else if (random < 0.4) {
            position = new Vector(
              Math.random() * canvasWidth,
              randomBetween(canvasHeight, canvasHeight + 300)
            );
          } else if (random < 0.6) {
            position = new Vector(
              randomBetween(0, -300),
              Math.random() * canvasHeight
            );
          } else {
            position = new Vector(
              randomBetween(canvasWidth, canvasWidth + 300),
              Math.random() * canvasHeight
            );
          }

          const particle = new Particle({
            radius: PARTICLE_RADIUS,
            position,
            velocity,
            friction: 0.8
          });
          springPairs.push({
            particle,
            springPoint
          });
        }
      }

      /**
       * Effect to move the particles to their respective points.
       */
      function fixedBeeSwarm() {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        for (let i = 0; i < springPairs.length; i++) {
          const { particle, springPoint } = springPairs[i];

          const angle = particle.angleTo(springPoint);
          particle.updatePosition();

          ctx.fillStyle = particleColors[i % 3];

          particle.render(ctx);

          if (particle.distanceTo(springPoint) < 5) {
            particle.update = false;
          }

          particle.screenWrap(canvasWidth, canvasHeight);

          if (Math.random() > 0.2) {
            particle.velocity.setAngle(angle);
          } else {
            particle.velocity.setAngle(Math.random() * 2 * Math.PI);
          }
        }
      }

      /**
       * Renders the particles on the screen.
       */
      function render() {
        fixedBeeSwarm();
        requestAnimationFrame(render);
      }

      return () => {
        springPairs.length = 0;
      };
    }, 1000);
  }, [id, text]);
}
