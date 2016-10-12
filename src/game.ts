class game {
        constructor() {
        }

        static run() {
                game.draw();
        }

        static draw() {
                var width = window.innerWidth;
                var height = window.innerHeight;

                var canvas = Canvas.initCanvas(width,height);
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
        }

        static update() {

        }
}

window.onload = () => {
   game.run();
}
