/*
 *      Author:         Caglar Özel
 *      Date:           19.October.2016
 *      Copyright:
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

        public zero() {
                return new Vector2(0.0, 0.0);
        }

        public one() {
                return new Vector2(1.0, 1.0);
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

        public dot(a: Vector3, b: Vector3) {
                return b.x * a.x + b.y * a.y + b.z * a.z;
        }

        public magnitute(a: Vector3) {
                return  Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z);
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
        public dot(a: Vector4, b: Vector4) {
                return b.x * a.x + b.y * a.y + b.z * a.z + b.w * a.w;
        }

        public magnitude(vector : Vector4) {
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
        constructor(elements = new Float32Array(16)) {
                elements.fill(0, 0, 15);
        }

        static diagonal(diagonal: number) {
                var result:Matrix3 = new Matrix3();

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

        static divide(a: Matrix3, b: Matrix3) {
                var result: Matrix3 = Matrix3.identify();

                for(var row = 0; row < 3; row++) {
                        for(var col = 0; col < 3; col++) {
                                var sum = 0;
                                for(var e = 0; e < 3; e++) {
                                        sum += a[e + row * 3] / b[col + e * 3];
                                }
                                result[col + row * 3] = sum;
                        }
                }

                return result;
        }

        static subtract(a: Matrix3, b: Matrix3) {
                var result: Matrix3 = Matrix3.identify();

                for(var row = 0; row < 3; row++) {
                        for(var col = 0; col < 3; col++) {
                                var sum = 0;
                                for(var e = 0; e < 3; e++) {
                                        sum += a[e + row * 3] - b[col + e * 3];
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

        public scale(scale : Vector3) {
                var result: Matrix3 = Matrix3.identify();

                result[0 + 0 * 3] = scale.x;
                result[1 + 1 * 3] = scale.y;
                result[2 + 2 * 3] = scale.z;

                return result;
        }
}

class Matrix4 {
        constructor(elements = new Float32Array(16)) {
                elements.fill(0.0, 0, 15);
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

                for(var row = 0; row < 4; row++) {
                        for(var col = 0; col < 4; col++) {
                                var sum: number = 0;
                                for(var e = 0; e < 4; e++) {
                                        sum += a[e + row * 4] * b[col + e * 4];
                                }
                                result[col + row * 4] = sum;
                        }
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
                                result[col + row * 4] = sum;
                        }
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
                                result[col + row * 4] = sum;
                        }
                }

                return result;
        }

        public translate(translation: Vector3) {
                var matrix: Matrix4 = Matrix4.identify();

                matrix[0 + 3 * 4] = translation.x;
                matrix[1 + 3 * 4] = translation.y;
                matrix[2 + 3 * 4] = translation.z;

                return matrix;
        }

        public scale(scale : Vector3) {
                var matrix: Matrix4 = Matrix4.identify();

                matrix[0 + 0 * 4] = scale.x;
                matrix[1 + 1 * 4] = scale.y;
                matrix[2 + 2 * 4] = scale.z;

                return matrix;
        }

        public angle_rotate(angle: number, rotation: Vector3) {
                var result: Matrix4 = Matrix4.identify();

                var r = m_Math.prototype.toRadian(angle);
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
                var result : Matrix4 = Matrix4.identify();

                // angle variables
                var cosX = Math.cos(rotation.x);
                var sinX = Math.sin(rotation.x);

                var cosY = Math.cos(rotation.y);
                var sinY = Math.sin(rotation.y);

                var cosZ = Math.cos(rotation.z);
                var sinZ = Math.sin(rotation.z);

        }

        public orthographic(left: number, right: number, bottom: number, top: number, near: number, far: number) {
                var result: Matrix4 = Matrix4.identify();

                result[0 + 0 * 4] = 2 / (right - left);
                result[3 + 0 * 4] = -((right + left) / (right - left));
                result[1 + 1 * 4] = 2 / (top - bottom);
                result[3 + 1 * 4] = -((top + bottom) / (top - bottom));
                result[2 + 2 * 4] = -2 / (far - near);
                result[2 + 3 * 4] = -((far + near) / (far - near));

                return result;
        }

        public perspective(fov: number, aspect: number, near: number, far: number) {
                var result: Matrix4 = Matrix4.identify();

                result[0 + 0 * 4] = 1 / (aspect * Math.tan(fov / 2));

        }

        public lookAt(cameraPos: Vector3, target: Vector3, up: Vector3) {
                var result: Matrix4 = Matrix4.identify();

                
        }
}

class Scene {
        constructor() { }


}

class m_Math {
        public toRadian(angle: number) {
                return angle * ( Math.PI / 180);
        }
}

//   ######   #######  ##########  ########  ########  ########
//  ##    ##  ##  ##         ##    ##        ##           ##
//  ##    ##  #######        ##    #####     ##           ##
//  ##    ##  ##  ##        ##     ##        ##           ##
//   ######   #######  #####       ########  ########     ##

class Camera {

}

class Shader {
        constructor() { }

        public createShader(webGL, sourceCode, type) {
                var shader = webGL.createShader(type);

                webGL.shaderSource(shader, sourceCode);
                webGL.compileShader(shader);

                if(!webGL.getShaderParameter(shader, webGL.COMPILE_STATUS)) {
                        var info = webGL.getShaderInfoLog(shader);
                        throw "Could not compile WebGL program. \n\n" + info;
                }

                return shader;
        }

        public loadShader(webGL, vertexShader, fragmentShader) {
                var program = webGL.createProgram();

                webGL.attachShader(program, vertexShader);
                webGL.attachShader(program, fragmentShader);

                game.webGL.linkProgram(program);

                if ( !game.webGL.getProgramParameter( program, game.webGL.LINK_STATUS) ) {
                        var info = game.webGL.getProgramInfoLog(program);
                        throw "Could not compile WebGL program. \n\n" + info;
                }

                return program;
        }
}

class ShaderFactory {
        public vertexShaderSource =
        "attribute vec4 a_position;\n"+
        "void main() {\n"+
        "       gl_Position = a_position;\n"+
        "}\n";

        public fragmentShaderSource =
        "void main() {\n"+
        "  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n"+
        "}\n";
}

class Canvas {
        constructor() { }

        static initWebGL() {
                var width = window.innerWidth;
                var height = window.innerHeight;

                var canvas = document.createElement("canvas");
                var webGL = canvas.getContext("webgl");

                webGL.clearDepth(1.0);
                webGL.enable(webGL.DEPTH_TEST);

                canvas.width = width;
                canvas.height = height;

                document.body.appendChild(canvas);

                if(!webGL) {
                        throw "Could not initiate webGL Canvas";
                }

                return webGL;
        }
}

class Utils{
        public read_file(file_path: string) {

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
        }

        public Keys = {
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

                TAB: 9,
                CAPS: 20,
                SPACEBAR: 32,

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
