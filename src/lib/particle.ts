import { Vector } from './vector';

/**
 * Props for a particle.
 */
interface ParticleProps {
  /**
   * The radius of the particle.
   */
  radius: number;

  /**
   * The current position of the particle.
   */
  position: Vector;

  /**
   * The velocity of the particle.
   */
  velocity?: Vector;

  /**
   * The gravity effect on the particle.
   */
  gravity?: number;

  /**
   * The mass of the particle.
   */
  mass?: number;

  /**
   * The friction applied of the particle.
   */
  friction?: number;

  /**
   * Indicates whether the particle position needs to be calculated.
   * Particle can still be drawn.
   */
  update?: boolean;
}

export class Particle {
  radius: number;
  position: Vector;
  velocity: Vector;
  mass: number;
  gravity: Vector;
  friction: number;
  update: boolean;

  constructor({
    radius,
    position,
    velocity = new Vector(0, 0),
    gravity = 0,
    mass = 1,
    friction = 0.99,
    update = true
  }: ParticleProps) {
    this.radius = radius;
    this.position = position;
    this.velocity = velocity;
    this.mass = mass;
    this.gravity = new Vector(0, gravity);
    this.friction = friction;
    this.update = update;
  }

  /**
   * Add the acceleration vector to a the particles velocity.
   * @param v the acceleration vector.
   */
  accelerate(v: Vector): void {
    if (this.update) {
      this.velocity.add(v);
    }
  }

  /**
   * Adds friction to the particle.
   */
  addFriction(): void {
    if (this.update) {
      this.velocity.multiply(this.friction);
    }
  }

  /**
   * Finds the angle to a given particle from the current particle.
   * @param p The particle to find the angle to.
   */
  angleTo(p: Particle): number {
    return Math.atan2(
      p.position.y - this.position.y,
      p.position.x - this.position.x
    );
  }

  /**
   * Finds the distance to a given particle from the current particle.
   * @param p The particle to find the distance to.
   */
  distanceTo(p: Particle): number {
    const dx = p.position.x - this.position.x;
    const dy = p.position.y - this.position.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  gravitateTo(p: Particle): void {
    if (this.update) {
      const gravity = new Vector(0, 0);
      const distance = this.distanceTo(p);

      gravity.setLength(p.mass / (distance * distance));
      gravity.setAngle(this.angleTo(p));

      this.velocity.add(gravity);
    }
  }

  /**
   * Updates the particle's position by adding in the particle's velocity.
   * Happens only if the particles update property is set to true.
   */
  updatePosition(): void {
    if (this.update) {
      this.velocity.add(this.gravity);
      this.position.add(this.velocity);
    }
  }

  /**
   * Draws the particle as a circle of given radius at the current position.
   * @param ctx The canvas context on which to draw to.
   */
  render(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    ctx.fill();
  }

  /**
   * Wraps te position to stay within the given width and height.
   * @param width The width to which particle's width will be wrapped.
   * @param height The height to which particle's height will be wrapped.
   */
  screenWrap(width: number, height: number): void {
    if (this.update) {
      const { x, y } = this.position;

      // Left boundary.
      if (x + this.radius < 0) {
        this.position.x = width + this.radius;
      }

      // Right boundary.
      if (x - this.radius > width) {
        this.position.x = 0 - this.radius;
      }

      // Top boundary.
      if (y + this.radius < 0) {
        this.position.y = height + this.radius;
      }

      // Bottom boundary.
      if (y - this.radius > height) {
        this.position.y = 0 - this.radius;
      }
    }
  }

  /**
   * This will bounce the particle of the inside the given width and heigth.
   * @param width The width at which particles will be bounced off of.
   * @param height The height at which particles will be bounced off of.
   */
  bounceOfEdges(width: number, height: number): void {
    if (this.update) {
      // Left edge.
      if (this.position.x - this.radius < 0) {
        this.position.x = this.radius;
        this.velocity.x *= -1;
      }

      // Right edge.
      if (this.position.x + this.radius > width) {
        this.position.x = width - this.radius;
        this.velocity.x *= -1;
      }

      // Top edge.
      if (this.position.y - this.radius < 0) {
        this.position.y = this.radius;
        this.velocity.y *= -1;
      }

      // Bottom edge.
      if (this.position.y + this.radius > height) {
        this.position.y = height - this.radius;
        this.velocity.y *= -1;
      }
    }
  }
}
