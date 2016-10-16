var game = (function () {
    function game() {
    }
    game.run = function () {
        game.draw();
    };
    game.draw = function () {
        var webGl = Canvas.initWebGL();
    };
    game.update = function () {
    };
    return game;
}());
window.onload = function () {
    game.run();
};
//# sourceMappingURL=game.js.map