import type {State} from "../interfaces/state.interface.ts";
import type {Team} from "../types/team.type.ts";

export const updateState = (state: State, team: Team, scored: boolean): State => {
    const newScores = {
        A: team === "A" && scored ? state.scoreA + 1 : state.scoreA,
        B: team === "B" && scored ? state.scoreB + 1 : state.scoreB,
    };

    const shotResult = `${team === "A" ? "Équipe A" : "Équipe B"} : ${scored ? "+1" : "0"}`;
    const newHistory = [
        ...state.history,
        `Tir ${state.totalShots - state.shotsRemaining + 1} : Score : ${newScores.A}/${newScores.B} (${shotResult})`,
    ];

    return {
        ...state,
        scoreA: newScores.A,
        scoreB: newScores.B,
        history: newHistory,
        shotsRemaining: state.shotsRemaining - 1,
    };
};


export const checkWinner = (state: State): string | null => {
    const {scoreA, scoreB, totalShots} = state;

    if (scoreA > scoreB && scoreA - scoreB > totalShots / 2) return "Équipe A";
    if (scoreB > scoreA && scoreB - scoreA > totalShots / 2) return "Équipe B";

    return null;
}