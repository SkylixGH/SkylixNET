import { writable } from "svelte/store";

export default {
    open: writable(true),
    content: writable("" as unknown),
    title: writable("Default"),
    canClose: writable(true)
};
