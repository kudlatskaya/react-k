import reducer, {StateType, TOGGLE_COLLAPSED} from "./reducer";

test('the reducer should reverse the value ', () => {
    // data
    const state: StateType = {
        collapsed: false
    }
    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expectation
    expect(newState.collapsed).toBe(true);
})