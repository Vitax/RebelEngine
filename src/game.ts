class game {
        static input;
        static webGL;
        static player;

        constructor() { }

        static init() {
                game.webGL = Canvas.initWebGL();
                game.input = new InputHandler();
        }

        static draw() {
                var a : Vector2 = new Vector2(1.0,0.0);
                var b : Vector2 = new Vector2(1.0,1.0);
                a = Vector2.add(a, b);
        }

        static tick()  {
                if(game.input.keyPressed(game.input.Keys.UP))
                        console.log("here");
                if(game.input.keyPressed(game.input.Keys.DOWN))
                        console.log("down");
        }

        static run() {
                // TODO: Figure out how a game loop works in TypeScript
                game.init();
                window.setInterval(game.tick, 1000/ 30);
        }
}

window.onload = () => {
   game.run();
}
