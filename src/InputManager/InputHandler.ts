export class InputHandler {
    constructor() {
        window.addEventListener('keyup', this.onKeyUp.bind(this));
        window.addEventListener('keydown', this.onKeyDown.bind(this));
        window.addEventListener('mousedown', this.onMouseDown.bind(this));
        window.addEventListener('mouseup', this.onMouseUp.bind(this));
    }

    public static KEYS = {
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,

        F1: 112,
        F2: 113,
        F3: 114,
        F8: 119,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,

        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,

        TAB: 9,
        CAPS: 20,
        SPACEBAR: 32,

        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    }

    public static MOUSE_BUTTONS = {
        RIGHT: 0,
        MIDDLE: 1,
        LEFT: 2
    }

    private _pressed: { [keyCode: number]: any; } = {};

    public keyPressed = (keyCode: number) => {
        return this._pressed[keyCode];
    }

    private onKeyUp = (event: KeyboardEvent): void => {
        delete this._pressed[event.keyCode];
    }

    private onKeyDown = (event: KeyboardEvent): void => {
        this._pressed[event.keyCode] = true;
    }

    public mousePressed = (keyCode: number) => {
        return this._pressed[keyCode];
    }

    private onMouseDown = (event: MouseEvent): void => {
        this._pressed[event.button] = true;
    }

    private onMouseUp = (event: MouseEvent): void => {
        this._pressed[event.button] = false;
    }
}
