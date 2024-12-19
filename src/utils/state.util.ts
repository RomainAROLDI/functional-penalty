import type {State} from "../interfaces/state.interface.ts";
import type {Team} from "../types/team.type.ts";

export const updateState = (state: State, team: Team, scored: boolean): State => {
    const newScoreA = team === "A" && scored ? state.scoreA + 1 : state.scoreA;
    const newScoreB = team === "B" && scored ? state.scoreB + 1 : state.scoreB;
    const shotResult = `${team === "A" ? "Équipe A" : "Équipe B"} : ${scored ? "+1" : "0"}`;
    const newHistory = [...state.history, `Score : ${newScoreA}/${newScoreB} (${shotResult})`];

    return {scoreA: newScoreA, scoreB: newScoreB, history: newHistory};
}