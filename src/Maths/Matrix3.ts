import { Vector3 } from './Vector3'

export class Matrix3 {
    [k: number]: any;

    constructor() {
        var elements: Float32Array = new Float32Array(16)
        elements.fill(0, 0, 15);
    }

    static diagonal(diagonal: number) {
        var result: Matrix3 = new Matrix3();

        result[0 + 0 * 3] = diagonal;
        result[1 + 1 * 3] = diagonal;
        result[2 + 2 * 3] = diagonal;

        return result;
    }

    static identify() {
        return Matrix3.diagonal(1.0);
    }

    static multiply(a: Matrix3, b: Matrix3) {
        var result: Matrix3 = Matrix3.identify();

        for (var row: number = 0; row < 3; row++) {
            for (var col: number = 0; col < 3; col++) {
                var sum: number= 0;
                for (var elems: number= 0; elems < 3; elems++) {
                    sum += a[elems + row * 3] * b[col + elems * 3];
                }
                result[col + row * 3] = sum;
            }
        }

        return result;
    }

    static divide(a: Matrix3, b: Matrix3) {
        var result: Matrix3 = Matrix3.identify();

        for (var row = 0; row < 3; row++) {
            for (var col = 0; col < 3; col++) {
                var sum = 0;
                for (var elems = 0; elems < 3; elems++) {
                    sum += a[elems + row * 3] / b[col + elems * 3];
                }
                result[col + row * 3] = sum;
            }
        }

        return result;
    }

    static subtract(a: Matrix3, b: Matrix3) {
        var result: Matrix3 = Matrix3.identify();

        for (var row = 0; row < 3; row++) {
            for (var col = 0; col < 3; col++) {
                var sum = 0;
                for (var elems = 0; elems < 3; elems++) {
                    sum += a[elems + row * 3] - b[col + elems * 3];
                }
                result[col + row * 3] = sum;
            }
        }

        return result;
    }

    public rotate(rotation: Vector3) {

    }

    public translate(translation: Vector3) {
        var result: Matrix3 = Matrix3.identify();

        result[0 + 2 * 3] = translation.x;
        result[1 + 2 * 3] = translation.y;
        result[2 + 2 * 3] = translation.z;

        return result;
    }

    public scale(scale: Vector3) {
        var result: Matrix3 = Matrix3.identify();

        result[0 + 0 * 3] = scale.x;
        result[1 + 1 * 3] = scale.y;
        result[2 + 2 * 3] = scale.z;

        return result;
    }
}
