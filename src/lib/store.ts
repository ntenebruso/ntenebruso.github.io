import { writable } from "svelte/store";

export const theme = writable(localStorage.getItem("theme") ?? "dark");
