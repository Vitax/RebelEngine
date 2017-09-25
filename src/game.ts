class game {
        static input;
        static gl: WebGLRenderingContext;
        static player;
        static fps;
        static triangleVertexPositionBuffer;

        constructor() { }

        static init() {
                game.gl = Canvas.initWebGL();
                game.input = new InputHandler();
                game.fps = 60;
        }

        static scene() {
                var vertShader = Shader.createShader(game.gl, ShaderFactory.vertexShaderSource, game.gl.VERTEX_SHADER);
                var fragShader = Shader.createShader(game.gl, ShaderFactory.fragmentShaderSource, game.gl.FRAGMENT_SHADER);

                var program = Shader.createShaderProgram(game.gl, vertShader, fragShader);

                var positionAttributeLocation = game.gl.getAttribLocation(program, "a_position");
                var positionBuffer = game.gl.createBuffer();

                game.gl.bindBuffer(game.gl.ARRAY_BUFFER, positionBuffer);

                var vertices = [
                        // left column
                        0,   0,  0,
                        30,   0,  0,
                        0, 150,  0,
                        0, 150,  0,
                        30,   0,  0,
                        30, 150,  0,

                        // top rung
                        30,   0,  0,
                        100,   0,  0,
                        30,  30,  0,
                        30,  30,  0,
                        100,   0,  0,
                        100,  30,  0,

                        // middle rung
                        30,  60,  0,
                        67,  60,  0,
                        30,  90,  0,
                        30,  90,  0,
                        67,  60,  0,
                        67,  90,  0
                ];

                var worldMat: Matrix4 = Matrix4.perspective(45, 16/9, 0.1, 100);
                var objMatrix: Matrix4 = Matrix4.identify();

                game.gl.bufferData(game.gl.ARRAY_BUFFER, new Float32Array(vertices), game.gl.STATIC_DRAW);
                game.gl.viewport(0, 0, game.gl.canvas.width, game.gl.canvas.height);
                game.gl.clearColor(0, 0, 0, 0);
                game.gl.clear(game.gl.COLOR_BUFFER_BIT);
                game.gl.useProgram(program);
                game.gl.enableVertexAttribArray(positionAttributeLocation);

                // Bind the position buffer.
                game.gl.bindBuffer(game.gl.ARRAY_BUFFER, positionBuffer);

                // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER), size, type, normailze, stride, offset
                game.gl.vertexAttribPointer(positionAttributeLocation, 3, game.gl.FLOAT, false, 0, 0);

                var primitiveType = game.gl.TRIANGLES;
                var offset = 0;
                var count = 3;
                game.gl.drawArrays(primitiveType, offset, count);
        }

        static draw() {
                game.scene();
        }

        static tick()  {
                if(game.input.keyPressed(game.input.Keys.UP))
                        console.log("here");
                if(game.input.keyPressed(game.input.Keys.DOWN))
                        console.log("down");

                if(game.input.mousePressed(game.input.MouseButtons.RIGHT))
                        console.log("Right Click");

                if(game.input.mousePressed(game.input.MouseButtons.MIDDLE))
                        console.log("Middle Click");

                if(game.input.mousePressed(game.input.MouseButtons.LEFT))
                        console.log("Left Click");
        }

        static run() {
                // TODO: Figure out how a game loop works in TypeScript
                game.init();

                setInterval(game.draw(), 1000 / 60);
        }
}

window.onload = () => {
   game.run();
}
