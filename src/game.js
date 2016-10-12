var game = (function () {
    function game() {
    }
    game.run = function () {
        game.draw();
    };
    game.draw = function () {
        var width = window.innerWidth;
        var height = window.innerHeight;
        var canvas = Canvas.initCanvas(width, height);
        var canvasContext = canvas.getContext("2d");
        var vector = new Vector2(50, 50);
        var rect = DrawableObjects;
        var circle = DrawableObjects;
        circle.drawArc(canvasContext, new Vector2(500, 500), 100, 0, 2 * Math.PI, false, "white");
        rect.drawRectangle(canvasContext, vector, 20, 50, "rgba(255, 10, 200, 0.7)");
        canvasContext.beginPath();
        canvasContext.strokeStyle = "white";
        canvasContext.rect(10, 10, 20, 50);
        canvasContext.stroke();
    };
    game.update = function () {
    };
    return game;
}());
window.onload = function () {
    game.run();
};
//# sourceMappingURL=game.js.map