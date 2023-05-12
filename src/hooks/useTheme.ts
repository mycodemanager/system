import darkConfig from "@/json/drrk.json"
import lightConfig from "@/json/light.json"

let dark = darkConfig;
let light = lightConfig;
let model = "light"

let listeners: Function[] = [];

export const todosStore = {
    addTodo({ key, value }: any) {
        switch (key) {
            case "model":
                model = value;
                break;
            case "dark":
                dark =  JSON.parse(value);
                break;
            case "light":
                light = JSON.parse(value);
                break;
            default:
                break;
        }
        emitChange();
    },
    subscribe(listener: Function) {
        listeners = [...listeners, listener];
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    },
    getSnapshot() {
        return JSON.stringify({ model, dark, light });
    }
};

function emitChange() {
    for (let listener of listeners) {
        listener();
    }
}


export function useTheme() {
    return {
        todosStore,
    }
}