type ActionType = {
    type: string,
}
export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'

export type StateType = {
    collapsed: boolean,
}

const reducer = (state: StateType, action: ActionType): StateType => {
    if(action.type === TOGGLE_COLLAPSED) {
        return {
            ...state,
            collapsed: !state.collapsed,
        };
    }

    return state;
}

export default reducer;