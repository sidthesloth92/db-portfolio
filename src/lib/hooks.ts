import { useEffect } from 'react';

import { roundToEven } from '.';
import { Particle } from './particle';
import { Vector } from './vector';

/**
 * Custom hook used to draw the face vector on about page.
 */
export function useDrawFaceOnCanvas(): void {
  /**
   * The springiness of the animation.
   */
  const SPRING_COEFFICIENT = 0.5;

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
  const HOVER_CIRCLE_RADIUS = 30;

  /**
   * The radius of the particle when they are hovered.
   */
  const PARTICLE_HOVER_RADIUS = 2;

  /**
   * The default radius of the particle.
   */
  const PARTICLE_RADIUS = 1;

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    const canvas: HTMLCanvasElement = <HTMLCanvasElement>(
      document.getElementById('canvas')
    );
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

    canvas.addEventListener('mousemove', handleMouseMove);

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

    const imageSide = roundToEven(0.6 * Math.min(canvasWidth, canvasHeight));
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
      positions.forEach((position) => {
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
          friction: 0.88
        });

        springPairs.push({
          springPoint,
          particle
        });
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

    /**
     * Handles mouse movement on the canvas.
     * @param param0 Ha
     */
    function handleMouseMove({ pageX, pageY }) {
      mouseX = pageX - canvasStartX;
      mouseY = pageY - canvasStartY;

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
