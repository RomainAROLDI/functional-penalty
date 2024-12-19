import {penaltyShootout} from "./src/logics/penalty-shootout.logic.ts";
import type {State} from "./src/interfaces/state.interface.ts";
import {displayHistory} from "./src/utils/display.util.ts";

const initialState: State = {
    scoreA: 0,
    scoreB: 0,
    history: [],
    shotsRemaining: 10, // 5 tirs par équipe
    totalShots: 10,
};

const main = (): void => {
    displayHistory(penaltyShootout(initialState));
}

main();
