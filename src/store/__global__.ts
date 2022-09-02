import { writable } from "svelte/store";

export default {
    mouseX__: 0,
    mouseY__: 0,

    mouseTop__: 0,
    mouseRight__: 0,

    mouseLeftBtnDown__: false,
    mouseRightBtnDown__: false,

    mouseX: writable(0),
    mouseY: writable(0),
    mouseTop: writable(0),
    mouseRight: writable(0),
    mouseLeftBtnDown: writable(false),
    mouseRightBtnDown: writable(false),

    windowSize: writable({
        width: typeof window !== "undefined" ? window.innerWidth : 0,
        height: typeof window !== "undefined" ? window.innerHeight : 0,
    }),

    dispatchAll() {
        this.mouseX.update(value => value);
        this.mouseY.update(value => value);
        this.mouseTop.update(value => value);
        this.mouseRight.update(value => value);
        this.mouseLeftBtnDown.update(value => value);
        this.mouseRightBtnDown.update(value => value);
        this.windowSize.update(value => value);
    }
};
