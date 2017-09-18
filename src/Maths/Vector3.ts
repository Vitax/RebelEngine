import { Vector2 } from './Vector2'

export class Vector3 {

    constructor(public x: number, public y: number, public z: number) { }

    static convertVec2(a: Vector2) {
        return new Vector3(a.x, a.y, 1.0);
    }

    static add(a: Vector3, b: Vector3) {
        return new Vector3(a.x + b.x, a.y + b.y, a.z + b.z);
    }

    static subtract(a: Vector3, b: Vector3) {
        return new Vector3(a.x - b.x, a.y - b.y, a.z - b.z);
    }

    static multiplyFactor(factor: number, vector: Vector3) {
        return new Vector3(factor * vector.x, factor * vector.y, factor * vector.z);
    }

    static multiplyVector(a: Vector3, b: Vector3) {
        return new Vector3(a.x * b.x, a.y * b.y, a.z * b.z);
    }

    static divide(a: Vector3, b: Vector3) {
        return new Vector3(a.x / b.x, a.y / b.y, a.z / b.z);
    }

    public dot(a: Vector3, b: Vector3) {
        return b.x * a.x + b.y * a.y + b.z * a.z;
    }

    public magnitute(a: Vector3) {
        return Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z);
    }

    public normalize(a: Vector3) {
        var mag = Vector3.prototype.magnitute(a);

        return new Vector3(a.x / mag, a.y / mag, a.z / mag);
    }

    static cross(a: Vector3, b: Vector3) {
        return new Vector3(a.y * b.z - a.z * b.y,
            a.x * b.z - a.z * b.x,
            a.x * b.y - a.y * b.x);
    }

    static distance(a: Vector3, b: Vector3) {
        var dx = a.x - b.x;
        var dy = a.y - b.y;
        var dz = a.z - b.z;

        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }

    static equals(a: Vector3, b: Vector3) {
        if (a.x == b.x && a.y == b.y && a.z == b.z)
            return true;
        else
            return false;
    }

    static notEquals(a: Vector3, b: Vector3) {
        if (!Vector3.equals(a, b))
            return true;
        else
            return false;
    }

    public up() {
        return new Vector3(0.0, 1.0, 0.0);
    }
    public down() {
        return new Vector3(0.0, -1.0, 0.0);
    }

    public left() {
        return new Vector3(1.0, 0.0, 0.0);
    }

    public right() {
        return new Vector3(-1.0, 0.0, 0.0);
    }

    public front() {
        return new Vector3(0.0, 0.0, 1.0);
    }

    public back() {
        return new Vector3(0.0, 0.0, -1.0);
    }

    public zero() {
        return new Vector3(0.0, 0.0, 0.0);
    }

    public one() {
        return new Vector3(1.0, 1.0, 1.0);
    }
}
