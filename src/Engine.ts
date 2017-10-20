import { Canvas } from './Graphics/Canvas'
import { InputHandler } from './InputManager/InputHandler'
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
        
    }

    private draw() {
            
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
            
                this.panic(); // fix things
                break; // bail out
            }
        }

        this.draw();
        
        requestAnimationFrame(this.run.bind(this));
    }
}

window.onload = () => {
    var time = new Date().getMilliseconds();
    var engine = new Engine();

    engine.init();
    requestAnimationFrame(engine.run.bind(engine));
}
