import { writable } from "svelte/store";

export default {
    mouseX: writable(0),
    mouseY: writable(0),
    mouseTop: writable(0),
    mouseRight: writable(0),
    mouseLeftBtnDown: writable(false),
    mouseRightBtnDown: writable(false),
};


