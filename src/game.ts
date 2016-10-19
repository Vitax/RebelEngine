class game {
        static webGL;
        static input;
        static player;

        constructor() { }
        static init() {
                this.input = new InputHandler();
                this.webGL = Canvas.initWebGL();
                this.player = Player;
        }

        static run() {
                // TODO: Figure out how a game loop works in TypeScript
                game.init();
                window.setInterval(game.tick, 1000/ 30);
        }

        static draw() {
        }

        static tick()  {
        }
}

window.onload = () => {
   game.run();
}
