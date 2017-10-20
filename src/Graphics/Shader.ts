export class Shader {
    constructor() { }

    static createShader(gl: WebGLRenderingContext, sourceCode: string, type: number) {
        var shader = gl.createShader(type);

        gl.shaderSource(shader, sourceCode);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            var info = gl.getShaderInfoLog(shader);
            console.trace("Could not compile gl program. \n\n", info);
        }

        var succes = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

        if (succes) {
            return shader;
        }

        gl.deleteShader(shader);
    }

    static createShaderProgram(gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader) {
        var program = gl.createProgram();

        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);

        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            var info = gl.getProgramInfoLog(program);
            throw "Could not compile gl program. \n\n" + info;
        }

        var success = gl.getProgramParameter(program, gl.LINK_STATUS);

        if (success) {
            return program;
        }

        gl.deleteProgram(program);
    }
}

export class ShaderFactory {
    static vertexShaderSource  =  
        "attribute vec4 vPosition; \n" +
        "attribute vec4 vColor; \n" +
        "varying vec4 fColor; \n" +

        "uniform mat4 modelViewMatrix; \n" +
        "uniform mat4 projectionMatrix; \n" +

        "void main() { \n" +
            "fColor = vColor; \n" +
            //"gl_Position = projectionMatrix * modelViewMatrix * vPosition; \n" +
            "gl_Position = vPosition; \n" + // dont use any external information yet
        "}";

    static fragmentShaderSource = 
        "precision mediump float; \n" +
        "varying vec4 fColor; \n" +

        "void main() { \n" +
            "gl_FragColor = fColor; \n" +
        "}";
}
