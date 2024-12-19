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
        shotsA: team === "A" ? state.shotsA + 1 : state.shotsA,
        shotsB: team === "B" ? state.shotsB + 1 : state.shotsB,
    };
};


export const checkWinner = (state: State): string | null => {
    const {scoreA, scoreB, shotsA, shotsB, totalShots} = state;

    if (scoreA > scoreB + (totalShots - shotsB)) return "Équipe A"; // L'équipe A ne peut plus être rattrapée
    if (scoreB > scoreA + (totalShots - shotsA)) return "Équipe B"; // L'équipe B ne peut plus être rattrapée

    return null; // Pas de gagnant pour l'instant
}