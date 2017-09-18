export class Canvas {
    constructor() { }

    static initWebGL(width: number, height: number) {
        var m_Width = width;
        var m_Height = height;

        var canvas = document.createElement("canvas");
        var gl: WebGLRenderingContext = canvas.getContext("experimental-webgl");
        canvas.oncontextmenu = function(e) {
            e.preventDefault();
        }

        gl.clearDepth(1.0);
        gl.enable(gl.DEPTH_TEST);

        canvas.width = m_Width;
        canvas.height = m_Height;

        document.body.appendChild(canvas);

        if (!gl) {
            throw "Could not initiate gl Canvas";
        }

        return gl;
    }
}
