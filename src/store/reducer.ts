import { Actions, AppState, StarActions } from "../types/store";

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
    const { action, payload } = currentAction; 

    switch (action) {

        case StarActions.GET:
            return {
                ...currentState,
                characters: payload
            }

    
        default:
            return currentState;
    }
}