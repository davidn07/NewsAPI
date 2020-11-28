import {GETNEWS, SETSEARCH} from './types'

export default (state, action) => {
    switch (action.type) {
        case GETNEWS:
            
            return {
                articles: action.payload
            };
    case SETSEARCH:
        return {
            articles: action.payload
        }
        default:
            return state;
    }
}