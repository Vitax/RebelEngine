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
    Vector2.multiply = function (factor, vector) {
        return new Vector2(vector.x * factor, vector.y * factor);
    };
    Vector2.dot = function (left, right) {
        return left.x * right.x + left.y * right.y;
    };
    Vector2.normalize = function () {
    };
    Vector2.distance = function (left, right) {
        var dx = left.x - right.x;
        var dy = left.y - right.y;
        return Math.sqrt(dx * dx + dy * dy);
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
    Vector3.multiply = function (factor, vector) {
        return new Vector3(factor * vector.x, factor * vector.y, factor * vector.z);
    };
    Vector3.dot = function (right, left) {
        return right.x * left.x + right.y * left.y + right.z * left.z;
    };
    Vector3.normalize = function () {
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
    Vector4.dot = function (right, left) {
        return right.x * left.x + right.y * left.y + right.z * left.z + right.w * left.w;
    };
    Vector4.normalize = function () {
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
    Matrix4.add = function () {
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
    return Matrix4;
}());
var Canvas = (function () {
    function Canvas() {
    }
    Canvas.initCanvas = function (width, height) {
        var canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        document.body.appendChild(canvas);
        return canvas;
    };
    return Canvas;
}());
var DrawableObjects = (function () {
    function DrawableObjects() {
    }
    DrawableObjects.drawRectangle = function (context, vector, width, height, color) {
        if (color == null) {
            context.rect(vector.x, vector.y, width, height);
        }
        else {
            context.fillStyle = color;
            context.fillRect(vector.x, vector.y, width, height);
        }
    };
    DrawableObjects.drawArc = function (context, vector, radius, startAngle, endAngle, antiClockwise, color) {
        if (color == null) {
            context.arc(vector.x, vector.y, radius, startAngle, endAngle, antiClockwise);
        }
        else {
            context.fillStyle = color;
            context.arc(vector.x, vector.y, radius, startAngle, endAngle);
            context.fill();
        }
    };
    return DrawableObjects;
}());
var Input = (function () {
    function Input() {
    }
    return Input;
}());
//# sourceMappingURL=RebelGames.js.map