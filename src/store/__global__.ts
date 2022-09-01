import { writable } from "svelte/store";

export default {
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
};
