export class Shader {
    constructor() { }

    static createShader(gl: WebGLRenderingContext, sourceCode: string, type: any) {
        var shader = gl.createShader(type);

        gl.shaderSource(shader, sourceCode);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            var info = gl.getShaderInfoLog(shader);
            throw "Could not compile gl program. \n\n" + info;
        }

        var succes = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

        if (succes) {
            return shader;
        }

        gl.deleteShader(shader);
    }

    static createShaderProgram(gl: WebGLRenderingContext, vertexShader: any, fragmentShader: any) {
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
