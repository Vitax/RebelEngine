import { Canvas } from './Graphics/Canvas'
import { InputHandler } from './InputManager/InputHandler'
import { Shader, ShaderFactory } from './Graphics/Shader'
import { Matrix4 } from './Maths/Matrix4'
import { Vector2 } from './Maths/Vector2'
import { Vector3 } from './Maths/Vector3'

class Engine {
    private timeStep: number = 1000 / 60;
    private fps: number = 0;
    private delta: number = 0;
    private lastFrameTimeMs: number = 0;
    private maxFps: number = 60;
    private numUpdateSteps = 0;
    private running: boolean = false;

    private inputHandler: InputHandler;
    private webGl: WebGLRenderingContext;

    constructor() {
        this.webGl = Canvas.initWebGL(window.innerWidth, window.innerHeight);
        this.inputHandler = new InputHandler();
    }

    private scene() {
        var vertShader = Shader.createShader(this.webGl, ShaderFactory.vertexShaderSource, this.webGl.VERTEX_SHADER);
        var fragShader = Shader.createShader(this.webGl, ShaderFactory.fragmentShaderSource, this.webGl.FRAGMENT_SHADER);

        var program = Shader.createShaderProgram(this.webGl, vertShader, fragShader);

        var positionAttributeLocation = this.webGl.getAttribLocation(program, "vPosition");
        var positionBuffer = this.webGl.createBuffer();

        this.webGl.bindBuffer(this.webGl.ARRAY_BUFFER, positionBuffer);

        var vertices: number[] = [
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
        var aspectRatio: number = this.webGl.canvas.clientWidth / this.webGl.canvas.clientHeight;
        var worldMat: Matrix4 = Matrix4.perspective(90, aspectRatio, 0.1, 100);
        
        this.webGl.bufferData(this.webGl.ARRAY_BUFFER, new Float32Array(vertices), this.webGl.STATIC_DRAW);
        this.webGl.viewport(0, 0, this.webGl.canvas.width, this.webGl.canvas.height);
        this.webGl.clearColor(0, 0, 0, 0);
        this.webGl.clear(this.webGl.COLOR_BUFFER_BIT);
        this.webGl.useProgram(program);
        this.webGl.enableVertexAttribArray(positionAttributeLocation);

        // Bind the position buffer.
        this.webGl.bindBuffer(this.webGl.ARRAY_BUFFER, positionBuffer);

        // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER), size, type, normailze, stride, offset
        this.webGl.vertexAttribPointer(positionAttributeLocation, 3, this.webGl.FLOAT, false, 0, 0);

        var primitiveType: number = this.webGl.TRIANGLES;
        var offset: number = 0;
        var count: number = 3;

        this.webGl.drawArrays(primitiveType, offset, count);
    }

    private draw() {
        this.scene();    
    }
        
    private update(delta: number) {
        if (this.inputHandler.keyPressed(InputHandler.KEYS.UP)) {
            console.log("up");
        }

        if (this.inputHandler.keyPressed(InputHandler.KEYS.DOWN)) {
            console.log("down");
        }

        if (this.inputHandler.keyPressed(InputHandler.KEYS.LEFT)) {
            console.log("left")
        }

        if (this.inputHandler.keyPressed(InputHandler.KEYS.RIGHT)) {
            console.log("right")
        }

        if(this.inputHandler.mousePressed(InputHandler.MOUSE_BUTTONS.LEFT)) {
            console.log("left mouse button");            
        }
    }

    private panic() {
        this.delta = 0;
    }

    public init() {
        var a: Vector2 = new Vector2(1.0, 0.0);
        var b: Vector2 = new Vector2(1.0, 1.0);
        var c: Vector3 = Vector3.convertVec2(a);

        a = Vector2.add(a, b);

        var ms: Matrix4 = Matrix4.identify();
    }

    public run(timestamp: number) {
        this.delta = timestamp - this.lastFrameTimeMs;
        this.lastFrameTimeMs = timestamp;

        while(this.delta >= this.timeStep) {
            this.update(this.delta);
            this.delta -= this.timeStep;
            if (++this.numUpdateSteps >= 240) {
            
                this.panic();
                break;
            }
        }

        this.draw();
        
        requestAnimationFrame(this.run.bind(this));
    }
}

window.onload = () => {
    var engine: Engine = new Engine();

    engine.init();
    requestAnimationFrame(engine.run.bind(engine));
}
