import { Vector2 } from './Vector2'
import { Vector3 } from './Vector3'

class Vector4 {
    constructor(public x: number, public y: number, public z: number, public w: number) { }

    static convertVec2(a: Vector2) {
        return new Vector4(a.x, a.y, 1.0, 1.0);
    }

    static convertVec3(a: Vector3) {
        return new Vector4(a.x, a.y, a.z, 1.0);
    }

    static add(a: Vector4, b: Vector4) {
        return new Vector4(a.x + b.x, a.y + b.y, a.z + b.z, a.w + b.w);
    }

    static subtract(a: Vector4, b: Vector4) {
        return new Vector4(a.x - b.x, a.y - b.y, a.z - b.z, a.w - b.w);
    }

    static multiplyFactor(factor: number, vector: Vector4) {
        return new Vector4(factor * vector.x, factor * vector.y, factor * vector.z, factor * vector.w);
    }

    static multiplyVector(a: Vector4, b: Vector4) {
        return new Vector4(a.x * b.x, a.y * b.y, a.z * b.z, a.w * b.w);
    }

    static divide(a: Vector4, b: Vector4) {
        return new Vector4(a.x / b.x, a.y / b.y, a.z / b.z, a.w / b.w);

    }
    public dot(a: Vector4, b: Vector4) {
        return b.x * a.x + b.y * a.y + b.z * a.z + b.w * a.w;
    }

    public magnitude(vector: Vector4) {
        return Math.sqrt(vector.x * vector.x + vector.y * vector.y + vector.z * vector.z + vector.w * vector.w);
    }

    public normalize(vector: Vector4) {
        var mag = Vector4.prototype.magnitude(vector);

        return new Vector4(vector.x / mag, vector.y / mag, vector.z / mag, vector.w / mag);
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

    static equals(a: Vector4, b: Vector4) {
        if (a.x == b.x && a.y == b.y && a.z == b.z && a.w == b.w)
            return true;
        else
            return false;
    }

    static notEquals(a: Vector4, b: Vector4) {
        if (!Vector4.equals(a, b))
            return true;
        else
            return false;
    }
}