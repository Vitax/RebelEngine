export class Vector2 {
    constructor(public x: number, public y: number) { }

    static add(a: Vector2, b: Vector2) {
        return new Vector2(a.x + b.x, a.y + b.y);
    }

    static subtract(a: Vector2, b: Vector2) {
        return new Vector2(a.x - b.x, a.y - b.y);
    }

    static multiplyFactor(factor: number, vector: Vector2) {
        return new Vector2(vector.x * factor, vector.y * factor);
    }

    static multiplyVector(a: Vector2, b: Vector2) {
        return new Vector2(a.x * b.x, a.y * b.y);
    }

    static divide(a: Vector2, b: Vector2) {
        return new Vector2(a.x / b.x, a.y / b.y);
    }

    public dot(a: Vector2, b: Vector2) {
        return a.x * b.x + a.y * b.y;
    }

    public magnitute(vector: Vector2) {
        return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
    }

    public normalize(vector: Vector2) {
        var mag = Vector2.prototype.magnitute(vector);

        return new Vector2(vector.x / mag, vector.y / mag);
    }

    static distance(a: Vector2, b: Vector2) {
        var dx = a.x - b.x;
        var dy = a.y - b.y;

        return Math.sqrt(dx * dx + dy * dy);
    }

    static equals(a: Vector2, b: Vector2) {
        if (a.x == b.x && a.y == b.y)
            return true;
        else
            return false;
    }

    static notEquals(a: Vector2, b: Vector2) {
        if (!Vector2.equals(a, b))
            return true;
        else
            return false;
    }

    public up() {
        return new Vector2(0.0, 1.0);
    }

    public down() {
        return new Vector2(0.0, -1.0);
    }

    public left() {
        return new Vector2(1.0, 0.0);
    }

    public right() {
        return new Vector2(-1.0, 0.0);
    }

    public test() {
        return "this is a test";
    }
    public zero() {
        return new Vector2(0.0, 0.0);
    }

    public one() {
        return new Vector2(1.0, 1.0);
    }
}
