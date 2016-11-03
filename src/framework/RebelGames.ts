/*
 *      Author:         Caglar Özel
 *      Date:           19.October.2016
 *      Copyb:
*/


//  ###    ###      ######    #########   ##   ##
//  ## #  # ##     ##    ##      ##       ##   ##
//  ##  ##  ##    ##########     ##       #######
//  ##      ##   ##        ##    ##       ##   ##
//  ##      ##  ##          ##   ##       ##   ##

class Vector2 {
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

        static dot(a: Vector2, b: Vector2) {
                return a.x * b.x + a.y * b.y;
        }

        static magnitute(vector: Vector2) {
                return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
        }

        static normalize(vector: Vector2) {
                var mag = Vector2.magnitute(vector);

                return new Vector2(vector.x / mag, vector.y / mag);
        }

        static distance(a: Vector2, b: Vector2) {
                var dx = a.x - b.x;
                var dy = a.y - b.y;

                return Math.sqrt(dx * dx + dy * dy);
        }

        static equals(a: Vector2, b: Vector2) {
                if(a.x == b.x && a.y == b.y)
                        return true;
                else
                        return false;
        }

        static notEquals(a: Vector2, b: Vector2) {
                if(!Vector2.equals(a, b))
                        return true;
                else
                        return false;
        }
}

class Vector3 {
        constructor(public x: number, public y: number, public z: number) { }

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

        static dot(a: Vector3, b: Vector3) {
                return b.x * a.x + b.y * a.y + b.z * a.z;
        }

        static magnitute(vector: Vector3) {
                return  Math.sqrt(vector.x * vector.x + vector.y * vector.y + vector.z * vector.z);
        }

        static normalize(vector: Vector3) {
                var mag = Vector2.magnitute(vector);

                return new Vector3(vector.x / mag, vector.y / mag, vector.z / mag);
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
                if(a.x == b.x && a.y == b.y && a.z == b.z)
                        return true;
                else
                        return false;
        }

        static notEquals(a: Vector3, b: Vector3) {
                if(!Vector3.equals(a, b))
                        return true;
                else
                        return false;
        }
}

class Vector4 {
        constructor(public x: number, public y: number, public z: number, public w: number) { }

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
        static dot(a: Vector4, b: Vector4) {
                return b.x * a.x + b.y * a.y + b.z * a.z + b.w * a.w;
        }

        static magnitude(vector : Vector4) {
                return Math.sqrt(vector.x * vector.x + vector.y * vector.y + vector.z * vector.z + vector.w * vector.w);
        }

        static normalize(vector: Vector4) {
                var mag = Vector4.magnitude(vector);

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
                if(a.x == b.x && a.y == b.y && a.z == b.z && a.w == b.w)
                        return true;
                else
                        return false;
        }

        static notEquals(a: Vector4, b: Vector4) {
                if(!Vector4.equals(a, b))
                        return true;
                else
                        return false;
        }
}

class Matrix3 {
        private elements = new Float32Array(9);

        constructor(elements: number[] = []) {
                for(var i = 0; i < 9; i++) {
                        elements[i] = 0;
                }
        }

        static diagonal(diagonal: number) {
                for (var i = 0; i < 3 * 3; i++) {
                        this[i] = 0;
                }

                this[0 + 0 * 3] = diagonal;
                this[1 + 1 * 3] = diagonal;
                this[2 + 2 * 3] = diagonal;
        }

        static identify() {
                return new Matrix3.diagonal(1);
        }

        static multiply(a: Matrix3, b: Matrix3) {
                var result: Matrix3 = Matrix3.identify();

                for(var row = 0; row < 3; row++) {
                        for(var col = 0; col < 3; col++) {
                                var sum = 0;
                                for(var e = 0; e < 3; e++) {
                                        sum += a[e + row * 3] * b[col + e * 3];
                                }
                                result[col + row * 3] = sum;
                        }
                }

                return result;
        }

        static subtract() {

        }

        static rotate(rotation: Vector3) {

        }

        static translate(translation: Vector3) {
                var result: Matrix3 = Matrix3.identify();

                result[0 + 2 * 3] = translation.x;
                result[1 + 2 * 3] = translation.y;
                result[2 + 2 * 3] = translation.z;

                return result;
        }

        static scale(scale : Vector3) {
                var result: Matrix3 = Matrix3.identify();

                result[0 + 0 * 3] = scale.x;
                result[1 + 1 * 3] = scale.y;
                result[2 + 2 * 3] = scale.z;

                return result;
        }
}

class Matrix4 {
        private elements = new Float32Array(16);

        constructor(elements: number[] = []) {
                for(var i = 0; i < 16; i++) {
                        elements[i] = 0;
                }
        }

        static diagonal(diagonal: number) {
                for (var i = 0; i < 4 * 4; i++) {
                        this[i] = 0;
                }

                this[0 + 0 * 4] = diagonal;
                this[1 + 1 * 4] = diagonal;
                this[2 + 2 * 4] = diagonal;
                this[3 + 3 * 4] = diagonal;
        }

        static identify() {
                return new Matrix4.diagonal(1);
        }

        static multiply(a: Matrix4, b: Matrix4) {
                var result: Matrix4 = Matrix4.identify();

                for(var row = 0; row < 4; row++) {
                        for(var col = 0; col < 4; col++) {
                                var sum: number = 0;
                                for(var e = 0; e < 4; e++) {
                                        sum += a[e + row * 4] * b[col + e * 4];
                                }
                        }
                        result[col + row * 4] = sum;
                }

                return result;
        }

        static divide(a: Matrix4, b: Matrix4) {
                var result: Matrix4 = Matrix4.identify();

                for(var row = 0; row < 4; row++) {
                        for(var col = 0; col < 4; col++) {
                                var sum: number = 0;
                                for(var e = 0; e < 4; e++) {
                                        sum += a[e + row * 4] / b[col + e * 4];
                                }
                        }
                        result[col + row * 4] = sum;
                }

                return result;
        }

        static subtract(a: Matrix4, b: Matrix4) {
                var result: Matrix4 = Matrix4.identify();

                for(var row = 0; row < 4; row++) {
                        for(var col = 0; col < 4; col++) {
                                var sum: number = 0;
                                for(var e = 0; e < 4; e++) {
                                        sum += a[e + row * 4] - b[col + e * 4];
                                }
                        }
                        result[col + row * 4] = sum;
                }

                return result;
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

                matrix[0 + 0 * 4] = scale.x;
                matrix[1 + 1 * 4] = scale.y;
                matrix[2 + 2 * 4] = scale.z;

                return matrix;
        }

        static rotate(rotation: Vector3) {

        }

        static orthoMatrix(left: number, right: number, bottom: number, top: number, near: number, far: number, dest: Matrix4 ) {
                dest = Matrix4.identify();

        }

        static perspMatrix(fov: number, aspect: number, near: number, far: number, dest: Matrix4) {

        }

        static lookAt(cameraPos: Vector3, target: Vector3, up: Vector3, dest: Matrix4) {

        }
}

//   ######   #######  ##########  ########  ########  ########
//  ##    ##  ##  ##         ##    ##        ##           ##
//  ##    ##  #######        ##    #####     ##           ##
//  ##    ##  ##  ##        ##     ##        ##           ##
//   ######   #######  #####       ########  ########     ##

class Camera {

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

                console.log("initialized WebGL canvas !");
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

//   ##  ###     ##  ######  ##   ##  ########
//   ##  ## ##   ##  ##  ##  ##   ##     ##
//   ##  ##   ## ##  ######  ##   ##     ##
//   ##  ##     ###  ##      ##   ##     ##
//   ##  ##      ##  ##      #######     ##

class InputHandler {
        constructor() {
                window.addEventListener('keyup', this.onKeyUp);
                window.addEventListener('keydown', this.onKeyDown);
                console.log("InputHandler instance created!");
        }

        public Keys = {
                // Keyboard
                ZERO: 48,
                ONE: 49,
                TWO: 50,
                THREE: 51,
                FOUR: 52,
                FIVE: 53,
                SIX: 54,
                SEVEN: 55,
                EIGHT: 56,
                NINE: 57,

                F1: 112,
                F2: 113,
                F3: 114,
                F4: 115,
                F5: 116,
                F6: 117,
                F7: 118,
                F8: 119,
                F9: 120,
                F10: 121,
                F11: 122,
                F12: 123,

                A: 65,
                B: 66,
                C: 67,
                D: 68,
                E: 69,
                F: 70,
                G: 71,
                H: 72,
                I: 73,
                J: 74,
                K: 75,
                L: 76,
                M: 77,
                N: 78,
                O: 79,
                P: 80,
                Q: 81,
                R: 82,
                S: 83,
                T: 84,
                U: 85,
                V: 86,
                W: 87,
                X: 88,
                Y: 89,
                Z: 90,

                SPACEBAR: 32,

                // Arrow Keys
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40
        }

        private _pressed: {[keyCode: number] : any;} = {};

        public keyPressed = (keyCode: number) => {
                return this._pressed[keyCode];
        }

        private onKeyUp = (event: KeyboardEvent): void => {
                event.preventDefault();
                delete this._pressed[event.keyCode];
        }

        private onKeyDown = (event: KeyboardEvent) : void => {
                event.preventDefault();
                this._pressed[event.keyCode] = true;
        }
}
