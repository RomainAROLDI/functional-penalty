import {penaltyShootout} from "./src/logics/penalty-shootout.logic.ts";
import type {State} from "./src/interfaces/state.interface.ts";
import {displayHistory} from "./src/utils/display.util.ts";

const initialState: State = {
    scoreA: 0,
    scoreB: 0,
    history: [],
    totalShots: 10, // 5 tirs par équipe
};

const main = (): void => {
    displayHistory(penaltyShootout(initialState));
}

main();
