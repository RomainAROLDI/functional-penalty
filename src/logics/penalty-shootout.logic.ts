import type {State} from "../interfaces/state.interface.ts";
import {checkWinner, updateState} from "../utils/state.util.ts";
import type {Team} from "../types/team.type.ts";
import {simulatePenaltyKick} from "../utils/simulation.util.ts";

export function penaltyShootout(state: State): State {
    if (state.shotsRemaining === 0) {
        const winner = checkWinner(state);

        if (winner) {
            state.history.push(`Victoire : ${winner} (Score : ${state.scoreA}/${state.scoreB})`);
            return state;
        }

        // Prolongation de la séance de tirs au but
        return penaltyShootout({...state, shotsRemaining: 2});
    }

    const team: Team = state.shotsRemaining % 2 === 0 ? "A" : "B";
    const scored = simulatePenaltyKick();
    const newState = updateState(state, team, scored);

    return penaltyShootout(newState);
}
