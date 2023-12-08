import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from "./types";
const initialState = []
const filteredTodo = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ACTIVE:
            return state.filter(todo => !todo.isComplete)
        case SHOW_COMPLETED:
            return state.filter(todo => todo.isComplete);
        case SHOW_ALL:
        default:
            return state;
    }

}
export default filteredTodo;