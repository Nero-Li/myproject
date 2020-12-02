import { HEADER_SEARCH_FOCUS, HEADER_SEARCH_BLUR } from './actionType'

const defaultState = {
    focused: false
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case HEADER_SEARCH_FOCUS:
            return {
                focused: true
            }
        case HEADER_SEARCH_BLUR:
            return {
                focused: false
            }
        default:
            return state
    }

}

export default reducer;