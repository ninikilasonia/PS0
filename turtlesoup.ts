import { Turtle, Point, forward, turn, color } from "./turtle";

export function drawSquare(turtle: Turtle, sideLength: number): void {
    for (let i = 0; i < 4; i++) {
        forward(turtle, sideLength);
        turn(turtle, 90);
    }
}

export function chordLength(radius: number, degrees: number): number {
    const radians = (degrees * Math.PI) / 180;
    return 2 * radius * Math.sin(radians / 2);
}

export function drawApproximateCircle(turtle: Turtle, radius: number, numSides: number): void {
    const angle = 360 / numSides;
    const length = chordLength(radius, angle);
    for (let i = 0; i < numSides; i++) {
        forward(turtle, length);
        turn(turtle, angle);
    }
}

export function distance(p1: Point, p2: Point): number {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
}

export function findPath(turtle: Turtle, points: Point[]): void {
    let current = turtle.position;
    for (const point of points) {
        const dist = distance(current, point);
        const dx = point.x - current.x;
        const dy = point.y - current.y;
        const targetAngle = (Math.atan2(dx, dy) * 180) / Math.PI;
        const turnAngle = targetAngle - turtle.heading;
        turn(turtle, turnAngle);
        forward(turtle, dist);
        current = point;
    }
}

export function drawPersonalArt(turtle: Turtle): void {
    const colors = ['red', 'blue', 'green', 'yellow'];
    for (let i = 0; i < 72; i++) {
        color(turtle, colors[i % 4]);
        forward(turtle, 50);
        turn(turtle, 92);
    }
}

export function main(): void {
    const turtle = new Turtle();
    drawSquare(turtle, 100);
}