class Vector2 {
        constructor(public x: number, public y: number) { }

        static add(left: Vector2, right: Vector2) {
                return new Vector2(left.x + right.x, left.y + right.y);
        }

        static subtract(left: Vector2, right: Vector2) {
                return new Vector2(left.x - right.x, left.y - right.y);
        }

        static multiply(factor: number, vector: Vector2) {
                return new Vector2(vector.x * factor, vector.y * factor);
        }

        static dot(left: Vector2, right: Vector2) {
                return left.x * right.x + left.y * right.y;
        }

        static normalize() {

        }

        static distance(left: Vector2, right: Vector2) {
                var dx = left.x - right.x;
                var dy = left.y - right.y;

                return Math.sqrt(dx * dx + dy * dy);
        }
}

class Vector3 {
        constructor(public x: number, public y: number, public z: number) { }

        static add(left: Vector3, right: Vector3) {
                return new Vector3(left.x + right.x, left.y + right.y, left.z + right.z);
        }

        static subtract(left: Vector3, right: Vector3) {
                return new Vector3(left.x - right.x, left.y - right.y, left.z - right.z);
        }

        static multiply(factor: number, vector: Vector3) {
                return new Vector3(factor * vector.x, factor * vector.y, factor * vector.z);
        }

        static dot(right: Vector3, left: Vector3) {
                return right.x * left.x + right.y * left.y + right.z * left.z;
        }

        static normalize() {

        }

        static cross(left: Vector3, right: Vector3) {
                return new Vector3(left.y * right.z - left.z * right.y,
                                   left.x * right.z - left.z * right.x,
                                   left.x * right.y - left.y * right.x);
        }

        static distance(left: Vector3, right: Vector3) {
                var dx = left.x - right.x;
                var dy = left.y - right.y;
                var dz = left.z - right.z;

                return Math.sqrt(dx * dx + dy * dy + dz * dz);
        }
}

class Vector4 {
        constructor(public x: number, public y: number, public z: number, public w: number) { }

        static add(left: Vector4, right: Vector4) {
                return new Vector4(left.x + right.x, left.y + right.y, left.z + right.z, left.w + right.w);
        }

        static subtract(left: Vector4, right: Vector4) {
                return new Vector4(left.x - right.x, left.y - right.y, left.z - right.z, left.w - right.w);
        }

        static multiplyFactor(factor: number, vector: Vector4) {
                return new Vector4(factor * vector.x, factor * vector.y, factor * vector.z, factor * vector.w);
        }

        static multiplyVector(left: Vector4, right: Vector4) {
                return new Vector4(left.x * right.x, left.y * right.y, left.z * right.z, left.w * right.w);
        }

        static dot(right: Vector4, left: Vector4) {
                return right.x * left.x + right.y * left.y + right.z * left.z + right.w * left.w;
        }

        static normalize() {

        }

        static cross(left: Vector3, right: Vector3) {
                return new Vector3(left.y * right.z - left.z * right.y,
                                   left.x * right.z - left.z * right.x,
                                   left.x * right.y - left.y * right.x);
        }

        static distance(left: Vector3, right: Vector3) {
                var dx = left.x - right.x;
                var dy = left.y - right.y;
                var dz = left.z - right.z;

                return Math.sqrt(dx * dx + dy * dy + dz * dz);
        }
}

class Matrix4 {
        constructor(public elements: number[] = [4 * 4]) { }

        static diagonal(diagonal: number) {
                for (var i = 0; i < Matrix4.prototype.elements.length; i++) {
                        Matrix4.prototype.elements[i] = 0;
                }

                Matrix4.prototype.elements[0 + 0 * 4] = diagonal;
                Matrix4.prototype.elements[1 + 1 * 4] = diagonal;
                Matrix4.prototype.elements[2 + 2 * 4] = diagonal;
                Matrix4.prototype.elements[3 + 3 * 4] = diagonal;
        }

        static identify() {
                Matrix4.diagonal(1);
        }

        static add() {

        }

        static translate(translation: Vector3) {
                var matrix = Matrix4.diagonal(1);

                matrix[0 + 3 * 4] = translation.x;
                matrix[1 + 3 * 4] = translation.y;
                matrix[2 + 3 * 4] = translation.z;

                return matrix;
        }

        static scale(scale : Vector3) {
                var matrix = Matrix4.diagonal(1);

                matrix[0 + 3 * 4] = scale.x;
                matrix[1 + 1 * 4] = scale.y;
                matrix[2 + 2 * 4] = scale.z;

                return matrix;
        }
}

class Canvas {
        constructor() { }

        static initCanvas(width, height) {
                var canvas = document.createElement("canvas");

               canvas.width = width;
               canvas.height = height;

               document.body.appendChild(canvas);

               return canvas;
        }
}

class DrawableObjects {
        constructor() { }

        static drawRectangle(context: CanvasRenderingContext2D, vector: Vector2, width: number, height: number, color: string) {
                if (color == null) {
                        context.rect(vector.x, vector.y, width, height);
                } else {
                        context.fillStyle = color;
                        context.fillRect(vector.x, vector.y, width, height);
                }
        }

        static drawArc(context: CanvasRenderingContext2D, vector: Vector2, radius: number, startAngle: number, endAngle: number, antiClockwise: boolean, color: string) {
                if(color == null) {
                        context.arc(vector.x, vector.y, radius, startAngle, endAngle, antiClockwise);
                } else {
                        context.fillStyle = color;
                        context.arc(vector.x, vector.y, radius, startAngle, endAngle);
                        context.fill();
                }
        }
}

class Input {
        constructor() { }


}
