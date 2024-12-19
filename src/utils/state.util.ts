import type {State} from "../interfaces/state.interface.ts";
import type {Team} from "../types/team.type.ts";

export const updateState = (state: State, team: Team, scored: boolean): State => {
    const {scoreA, scoreB, history} = state;
    const isTeamATurn = team === "A";

    const newScores = {
        A: isTeamATurn && scored ? scoreA + 1 : scoreA,
        B: !isTeamATurn && scored ? scoreB + 1 : scoreB,
    };

    const shotResult = `${isTeamATurn ? "Équipe A" : "Équipe B"} : ${scored ? "+1" : "0"}`;
    const newHistory = [
        ...history,
        `Tir ${Math.floor(history.length / 2) + 1} : Score : ${newScores.A}/${newScores.B} (${shotResult})`,
    ];

    return {
        ...state,
        scoreA: newScores.A,
        scoreB: newScores.B,
        history: newHistory,
        totalShots: state.totalShots - 1,
    };
};


export const checkWinner = (state: State): string | null => {
    const {scoreA, scoreB, totalShots} = state;

    const remainingShotsA = Math.floor(totalShots / 2);
    const remainingShotsB = Math.ceil(totalShots / 2);

    if (scoreA > scoreB + remainingShotsB) return "Équipe A"; // L'équipe A ne peut plus être rattrapée
    if (scoreB > scoreA + remainingShotsA) return "Équipe B"; // L'équipe B ne peut plus être rattrapée

    return null; // Pas de gagnant pour l'instant
}