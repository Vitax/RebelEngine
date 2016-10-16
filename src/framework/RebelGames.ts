class Vector2 {
        constructor(public x: number, public y: number) { }

        static add(left: Vector2, right: Vector2) {
                return new Vector2(left.x + right.x, left.y + right.y);
        }

        static subtract(left: Vector2, right: Vector2) {
                return new Vector2(left.x - right.x, left.y - right.y);
        }

        static multiplyFactor(factor: number, vector: Vector2) {
                return new Vector2(vector.x * factor, vector.y * factor);
        }

        static multiplyVector(left: Vector2, right: Vector2) {
                return new Vector2(left.x * right.x, left.y * right.y);
        }

        static divide(left: Vector2, right: Vector2) {
                return new Vector2(left.x / right.x, left.y / right.y);
        }

        static dot(left: Vector2, right: Vector2) {
                return left.x * right.x + left.y * right.y;
        }

        static magnitute(vector: Vector2) {
                return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
        }

        static normalize(vector: Vector2) {
                var mag = Vector2.magnitute(vector);

                return new Vector2(vector.x / mag, vector.y / mag);
        }

        static distance(left: Vector2, right: Vector2) {
                var dx = left.x - right.x;
                var dy = left.y - right.y;

                return Math.sqrt(dx * dx + dy * dy);
        }

        static equals(left: Vector2, right: Vector2) {
                if(left.x == right.x && left.y == right.y)
                        return true;
                else
                        return false;
        }

        static notEquals(left: Vector2, right: Vector2) {
                if(!Vector2.equals(left, right))
                        return true;
                else
                        return false;
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

        static multiplyFactor(factor: number, vector: Vector3) {
                return new Vector3(factor * vector.x, factor * vector.y, factor * vector.z);
        }

        static multiplyVector(left: Vector3, right: Vector3) {
                return new Vector3(left.x * right.x, left.y * right.y, left.z * right.z);
        }

        static divide(left: Vector3, right: Vector3) {
                return new Vector3(left.x / right.x, left.y / right.y, left.z / right.z);
        }

        static dot(left: Vector3, right: Vector3) {
                return right.x * left.x + right.y * left.y + right.z * left.z;
        }

        static magnitute(vector: Vector3) {
                return  Math.sqrt(vector.x * vector.x + vector.y * vector.y + vector.z * vector.z);
        }

        static normalize(vector: Vector3) {
                var mag = Vector2.magnitute(vector);

                return new Vector3(vector.x / mag, vector.y / mag, vector.z / mag);
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

        static equals(left: Vector3, right: Vector3) {
                if(left.x == right.x && left.y == right.y && left.z == right.z)
                        return true;
                else
                        return false;
        }

        static notEquals(left: Vector3, right: Vector3) {
                if(!Vector2.equals(left, right))
                        return true;
                else
                        return false;
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

        static divide(left: Vector4, right: Vector4) {
                return new Vector4(left.x / right.x, left.y / right.y, left.z / right.z, left.w / right.w);

        }
        static dot(left: Vector4, right: Vector4) {
                return right.x * left.x + right.y * left.y + right.z * left.z + right.w * left.w;
        }

        static magnitude(vector : Vector4) {
                return Math.sqrt(vector.x * vector.x + vector.y * vector.y + vector.z * vector.z + vector.w * vector.w);
        }

        static normalize(vector: Vector4) {
                var mag = Vector4.magnitude(vector);

                return new Vector4(vector.x / mag, vector.y / mag, vector.z / mag, vector.w / mag);
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

        static multiply(left: Matrix4, right: Matrix4) {
                var result = new Matrix4();

                for(var x = 0; x < 4; x++) {
                        for(var y = 0; y < 4; y++) {

                        }
                }
        }

        static subtract() {

        }

        static rotate(rotation: Vector3) {

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

        static orthoMatrix(left: number, right: number, bottom: number, top: number, near: number, far: number, dest: Matrix4 ) {
                dest = new Matrix4.identify();

        }

        static perspMatrix(fov: number, aspect: number, near: number, far: number, dest: Matrix4) {

        }

        static lookAt(cameraPos: Vector3, target: Vector3, up: Vector3, dest: Matrix4) {

        }
}

class Canvas {
        constructor() { }

        static initWebGL() {
                var width = window.innerWidth;
                var height = window.innerHeight;

                var canvas = document.createElement("canvas");
                var webGL = canvas.getContext("webgl");

                webGL.enable(webGL.DEPTH_TEST);

               canvas.width = width;
               canvas.height = height;

               document.body.appendChild(canvas);

               if(!webGL) {
                       console.log("Could not initiate webGL Canvas");
                       return;
               }

               return webGL;
        }
}

class Utils{
        static read_file() {

        }
}

class Shader {
        constructor() { }

        static loadFromFile(vertexPath: string, fragmentPath: string) {

        }

        static load() {

        }
}

class Input {
        constructor() { }


}
