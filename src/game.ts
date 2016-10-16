class game {
        constructor() {
        }

        static run() {
                game.draw();
        }

        static draw() {
                var webGl = Canvas.initWebGL();

        }

        static update() {

        }
}

window.onload = () => {
   game.run();
}
