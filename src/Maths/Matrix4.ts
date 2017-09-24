import { Vector3 } from './Vector3'
import { RE_Math } from './RE_Maths'

export class Matrix4 {
    [k: number]: any;
    
    constructor() {
        var elements = new Float32Array(16);
        elements.fill(0, 0, 15);
    }

    static diagonal(diagonal: number) {
        var result: Matrix4 = new Matrix4();

        result[0 + 0 * 4] = diagonal;
        result[1 + 1 * 4] = diagonal;
        result[2 + 2 * 4] = diagonal;
        result[3 + 3 * 4] = diagonal;

        return result;
    }

    static identify() {
        return Matrix4.diagonal(1.0);
    }

    static multiply(a: Matrix4, b: Matrix4) {
        var result: Matrix4 = Matrix4.identify();

        for (var row = 0; row < 4; row++) {
            for (var col = 0; col < 4; col++) {
                var sum: number = 0;
                for (var elems = 0; elems < 4; elems++) {
                    sum += a[elems + row * 4] * b[col + elems * 4];
                }
                result[col + row * 4] = sum;
            }
        }

        return result;
    }

    static divide(a: Matrix4, b: Matrix4) {
        var result: Matrix4 = Matrix4.identify();

        for (var row = 0; row < 4; row++) {
            for (var col = 0; col < 4; col++) {
                var sum: number = 0;
                for (var elems = 0; elems < 4; elems++) {
                    sum += a[elems + row * 4] / b[col + elems * 4];
                }
                result[col + row * 4] = sum;
            }
        }

        return result;
    }

    static subtract(a: Matrix4, b: Matrix4) {
        var result: Matrix4 = Matrix4.identify();

        for (var row = 0; row < 4; row++) {
            for (var col = 0; col < 4; col++) {
                var sum: number = 0;
                for (var elems = 0; elems < 4; elems++) {
                    sum += a[elems + row * 4] - b[col + elems * 4];
                }
                result[col + row * 4] = sum;
            }
        }

        return result;
    }

    public translate(translation: Vector3) {
        var matrix: Matrix4 = Matrix4.identify();

        matrix[3 + 0 * 4] = translation.x;
        matrix[3 + 1 * 4] = translation.y;
        matrix[3 + 2 * 4] = translation.z;

        return matrix;
    }

    public scale(scale: Vector3) {
        var matrix: Matrix4 = Matrix4.identify();

        matrix[0 + 0 * 4] = scale.x;
        matrix[1 + 1 * 4] = scale.y;
        matrix[2 + 2 * 4] = scale.z;

        return matrix;
    }

    public angle_rotate(angle: number, rotation: Vector3) {
        var result: Matrix4 = Matrix4.identify();

        var r = RE_Math.toRadian(angle);
        var c = Math.cos(r);
        var s = Math.sin(r);
        var omc = 1 - c;

        var x = rotation.x;
        var y = rotation.y;
        var z = rotation.z;

        result[0 + 0 * 4] = x * x * omc + c;
        result[0 + 1 * 4] = x * y * omc + y * s;
        result[0 + 2 * 4] = z * x * omc - y * s;

        result[1 + 0 * 4] = x * y * omc - z * s;
        result[1 + 1 * 4] = y * y * omc + c;
        result[1 + 2 * 4] = z * y * omc + x * s;

        result[2 + 0 * 4] = x * z * omc + y * s;
        result[2 + 1 * 4] = y * z * omc - x * s;
        result[2 + 2 * 4] = z * z * omc + c;

        return result;
    }

    public vector_rotate(rotation: Vector3) {
        // TODO: Read about Vector-Rotation
        var result: Matrix4 = Matrix4.identify();

        // angle variables
        var cosX = Math.cos(rotation.x);
        var sinX = Math.sin(rotation.x);

        var cosY = Math.cos(rotation.y);
        var sinY = Math.sin(rotation.y);

        var cosZ = Math.cos(rotation.z);
        var sinZ = Math.sin(rotation.z);
        
        return result;
    }

    static orthographic(left: number, right: number, bottom: number, top: number, near: number, far: number) {
        var result: Matrix4 = Matrix4.identify();

        result[0 + 0 * 4] = 2 / (right - left);
        result[3 + 0 * 4] = -((right + left) / (right - left));
        result[1 + 1 * 4] = 2 / (top - bottom);
        result[3 + 1 * 4] = -((top + bottom) / (top - bottom));
        result[2 + 2 * 4] = -2 / (far - near);
        result[3 + 2 * 4] = -((far + near) / (far - near));

        return result;
    }

    static perspective(fov: number, aspectRatio: number, near: number, far: number) {
        var result: Matrix4 = Matrix4.identify();
        var thfov = Math.tan(RE_Math.toRadian(fov / 2));

        result[0 + 0 * 4] = 1 / (thfov * aspectRatio);
        result[1 + 1 * 4] = 1 / thfov;
        result[2 + 2 * 4] = (-near - far) / (near - far);
        result[2 + 3 * 4] = 2 * far * near / (near - far);
        result[3 + 2 * 4] = 1.0;
        result[3 + 3 * 4] = 0;

        return result;
    }

    static lookAt(cameraPos: Vector3, target: Vector3, up: Vector3) {
        var result: Matrix4 = Matrix4.identify();

        return result;
    }
}
