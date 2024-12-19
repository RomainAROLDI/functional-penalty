import type {State} from "../interfaces/state.interface.ts";
import {checkWinner, updateState} from "../utils/state.util.ts";
import type {Team} from "../types/team.type.ts";
import {simulatePenaltyKick} from "../utils/simulation.util.ts";

export const penaltyShootout = (state: State): State => {
    const winner = checkWinner(state);
    if (winner) {
        state.history.push(`Victoire : ${winner} (Score : ${state.scoreA}/${state.scoreB})`);
        return state;
    }

    if (state.totalShots === 0) {
        // Prolongation de la séance de tirs au but
        return penaltyShootout({...state, totalShots: 2});
    }

    const team: Team = state.totalShots % 2 === 0 ? "A" : "B";
    const scored = simulatePenaltyKick();
    const newState = updateState(state, team, scored);

    return penaltyShootout(newState);
}
