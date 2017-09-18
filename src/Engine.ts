import { Canvas } from './Graphics/Canvas'
import { InputHandler } from './InputManager/InputHandler'
import { Matrix4 } from './Maths/Matrix4'
import { Vector2 } from './Maths/Vector2'
import { Vector3 } from './Maths/Vector3'

class Engine {
    constructor(private gl: WebGLRenderingContext, private input: InputHandler) { }

    init() {
        this.gl = Canvas.initWebGL(window.innerWidth, window.innerHeight);
        this.input = new InputHandler();
    }

    draw() {
        var a: Vector2 = new Vector2(1.0, 0.0);
        var b: Vector2 = new Vector2(1.0, 1.0);
        a = Vector2.add(a, b);
        
        var c: Vector3 = Vector3.convertVec2(a);
        var ms: Matrix4 = Matrix4.identify();
    }

    tick() {
        if (this.input.keyPressed(this.input.Keys.UP)) {
            console.log("up");
        }

        if (this.input.keyPressed(this.input.Keys.DOWN)) {
            console.log("down");
        }

        if (this.input.keyPressed(this.input.Keys.LEFT)) {
            console.log("left")
        }

        if (this.input.keyPressed(this.input.Keys.RIGHT)) {
            console.log("right")
        }
    }

    run() {
        // TODO: Figure out how a Engine loop works in TypeScript / WebGL
        this.init();
        window.setInterval(this.tick, 1000 / 30);
    }
}

window.onload = () => {
    this.run();
}
