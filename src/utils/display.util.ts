import type {State} from "../interfaces/state.interface.ts";

export const displayHistory = (state: State): void => {
    console.log(state.history.join("\n"));
}
