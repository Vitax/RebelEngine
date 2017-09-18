export class ShaderFactory {
    static vertexShaderSource =
    "attribute vec4 a_position;\n" +
    "uniform mat4 u_matrix" +
    "void main() {\n" +
    "       gl_Position = u_matrix * a_position;\n" +
    "}\n";

    static fragmentShaderSource =
    "void main() {\n" +
    "  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n" +
    "}\n"   ;
}
