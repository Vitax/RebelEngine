var Vector2 = (function () {
    function Vector2(x, y) {
        this.x = x;
        this.y = y;
    }
    Vector2.add = function (left, right) {
        return new Vector2(left.x + right.x, left.y + right.y);
    };
    Vector2.subtract = function (left, right) {
        return new Vector2(left.x - right.x, left.y - right.y);
    };
    Vector2.multiplyFactor = function (factor, vector) {
        return new Vector2(vector.x * factor, vector.y * factor);
    };
    Vector2.multiplyVector = function (left, right) {
        return new Vector2(left.x * right.x, left.y * right.y);
    };
    Vector2.divide = function (left, right) {
        return new Vector2(left.x / right.x, left.y / right.y);
    };
    Vector2.dot = function (left, right) {
        return left.x * right.x + left.y * right.y;
    };
    Vector2.magnitute = function (vector) {
        return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
    };
    Vector2.normalize = function (vector) {
        var mag = Vector2.magnitute(vector);
        return new Vector2(vector.x / mag, vector.y / mag);
    };
    Vector2.distance = function (left, right) {
        var dx = left.x - right.x;
        var dy = left.y - right.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    Vector2.equals = function (left, right) {
        if (left.x == right.x && left.y == right.y)
            return true;
        else
            return false;
    };
    Vector2.notEquals = function (left, right) {
        if (!Vector2.equals(left, right))
            return true;
        else
            return false;
    };
    return Vector2;
}());
var Vector3 = (function () {
    function Vector3(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Vector3.add = function (left, right) {
        return new Vector3(left.x + right.x, left.y + right.y, left.z + right.z);
    };
    Vector3.subtract = function (left, right) {
        return new Vector3(left.x - right.x, left.y - right.y, left.z - right.z);
    };
    Vector3.multiplyFactor = function (factor, vector) {
        return new Vector3(factor * vector.x, factor * vector.y, factor * vector.z);
    };
    Vector3.multiplyVector = function (left, right) {
        return new Vector3(left.x * right.x, left.y * right.y, left.z * right.z);
    };
    Vector3.divide = function (left, right) {
        return new Vector3(left.x / right.x, left.y / right.y, left.z / right.z);
    };
    Vector3.dot = function (left, right) {
        return right.x * left.x + right.y * left.y + right.z * left.z;
    };
    Vector3.magnitute = function (vector) {
        return Math.sqrt(vector.x * vector.x + vector.y * vector.y + vector.z * vector.z);
    };
    Vector3.normalize = function (vector) {
        var mag = Vector2.magnitute(vector);
        return new Vector3(vector.x / mag, vector.y / mag, vector.z / mag);
    };
    Vector3.cross = function (left, right) {
        return new Vector3(left.y * right.z - left.z * right.y, left.x * right.z - left.z * right.x, left.x * right.y - left.y * right.x);
    };
    Vector3.distance = function (left, right) {
        var dx = left.x - right.x;
        var dy = left.y - right.y;
        var dz = left.z - right.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    };
    Vector3.equals = function (left, right) {
        if (left.x == right.x && left.y == right.y && left.z == right.z)
            return true;
        else
            return false;
    };
    Vector3.notEquals = function (left, right) {
        if (!Vector2.equals(left, right))
            return true;
        else
            return false;
    };
    return Vector3;
}());
var Vector4 = (function () {
    function Vector4(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    Vector4.add = function (left, right) {
        return new Vector4(left.x + right.x, left.y + right.y, left.z + right.z, left.w + right.w);
    };
    Vector4.subtract = function (left, right) {
        return new Vector4(left.x - right.x, left.y - right.y, left.z - right.z, left.w - right.w);
    };
    Vector4.multiplyFactor = function (factor, vector) {
        return new Vector4(factor * vector.x, factor * vector.y, factor * vector.z, factor * vector.w);
    };
    Vector4.multiplyVector = function (left, right) {
        return new Vector4(left.x * right.x, left.y * right.y, left.z * right.z, left.w * right.w);
    };
    Vector4.divide = function (left, right) {
        return new Vector4(left.x / right.x, left.y / right.y, left.z / right.z, left.w / right.w);
    };
    Vector4.dot = function (left, right) {
        return right.x * left.x + right.y * left.y + right.z * left.z + right.w * left.w;
    };
    Vector4.magnitude = function (vector) {
        return Math.sqrt(vector.x * vector.x + vector.y * vector.y + vector.z * vector.z + vector.w * vector.w);
    };
    Vector4.normalize = function (vector) {
        var mag = Vector4.magnitude(vector);
        return new Vector4(vector.x / mag, vector.y / mag, vector.z / mag, vector.w / mag);
    };
    Vector4.cross = function (left, right) {
        return new Vector3(left.y * right.z - left.z * right.y, left.x * right.z - left.z * right.x, left.x * right.y - left.y * right.x);
    };
    Vector4.distance = function (left, right) {
        var dx = left.x - right.x;
        var dy = left.y - right.y;
        var dz = left.z - right.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    };
    return Vector4;
}());
var Matrix4 = (function () {
    function Matrix4(elements) {
        if (elements === void 0) { elements = [4 * 4]; }
        this.elements = elements;
    }
    Matrix4.diagonal = function (diagonal) {
        for (var i = 0; i < Matrix4.prototype.elements.length; i++) {
            Matrix4.prototype.elements[i] = 0;
        }
        Matrix4.prototype.elements[0 + 0 * 4] = diagonal;
        Matrix4.prototype.elements[1 + 1 * 4] = diagonal;
        Matrix4.prototype.elements[2 + 2 * 4] = diagonal;
        Matrix4.prototype.elements[3 + 3 * 4] = diagonal;
    };
    Matrix4.identify = function () {
        Matrix4.diagonal(1);
    };
    Matrix4.multiply = function (left, right) {
        var result = new Matrix4();
        for (var x = 0; x < 4; x++) {
            for (var y = 0; y < 4; y++) {
            }
        }
    };
    Matrix4.subtract = function () {
    };
    Matrix4.rotate = function (rotation) {
    };
    Matrix4.translate = function (translation) {
        var matrix = Matrix4.diagonal(1);
        matrix[0 + 3 * 4] = translation.x;
        matrix[1 + 3 * 4] = translation.y;
        matrix[2 + 3 * 4] = translation.z;
        return matrix;
    };
    Matrix4.scale = function (scale) {
        var matrix = Matrix4.diagonal(1);
        matrix[0 + 3 * 4] = scale.x;
        matrix[1 + 1 * 4] = scale.y;
        matrix[2 + 2 * 4] = scale.z;
        return matrix;
    };
    Matrix4.orthoMatrix = function (left, right, bottom, top, near, far, dest) {
        dest = new Matrix4.identify();
    };
    Matrix4.perspMatrix = function (fov, aspect, near, far, dest) {
    };
    Matrix4.lookAt = function (cameraPos, target, up, dest) {
    };
    return Matrix4;
}());
var Canvas = (function () {
    function Canvas() {
    }
    Canvas.initWebGL = function () {
        var width = window.innerWidth;
        var height = window.innerHeight;
        var canvas = document.createElement("canvas");
        var webGL = canvas.getContext("webgl");
        webGL.enable(webGL.DEPTH_TEST);
        canvas.width = width;
        canvas.height = height;
        document.body.appendChild(canvas);
        if (!webGL) {
            console.log("Could not initiate webGL Canvas");
            return;
        }
        return webGL;
    };
    return Canvas;
}());
var Utils = (function () {
    function Utils() {
    }
    Utils.read_file = function () {
    };
    return Utils;
}());
var Shader = (function () {
    function Shader() {
    }
    Shader.loadFromFile = function (vertexPath, fragmentPath) {
    };
    Shader.load = function () {
    };
    return Shader;
}());
var Input = (function () {
    function Input() {
    }
    return Input;
}());
//# sourceMappingURL=RebelGames.js.map