import { Canvas } from './Graphics/Canvas'
import { InputHandler } from './InputManager/InputHandler'
import { Matrix4 } from './Maths/Matrix4'
import { Vector2 } from './Maths/Vector2'
import { Vector3 } from './Maths/Vector3'

class Engine {
    
    private timeStamp: number = 1000 / 60;
    private fps: number = 0;
    private deltea: number = 0;
    private lastFrameTimeMS: number = 0;

    private running: boolean = false;

    private static inputHandler: InputHandler;
    private static webGl: WebGLRenderingContext;
    

    private static draw() {
            
    }

    private static update() {
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

    public static init() {
        this.webGl = Canvas.initWebGL(window.innerWidth, window.innerHeight);
        this.inputHandler = new InputHandler();
        
        var a: Vector2 = new Vector2(1.0, 0.0);
        var b: Vector2 = new Vector2(1.0, 1.0);
        var c: Vector3 = Vector3.convertVec2(a);

        a = Vector2.add(a, b);

        var ms: Matrix4 = Matrix4.identify();
    }

    public static run() {     
        Engine.update();
        Engine.draw();
        
        requestAnimationFrame(Engine.run);
    }
}

window.onload = () => {
    Engine.init();

    requestAnimationFrame(Engine.run);
}
