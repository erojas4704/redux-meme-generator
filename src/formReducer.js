import { v4 as uuid } from "uuid";
const INITIAL_STATE = { top: '', bottom: '', url: '', memes: [] };

const formReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD":
            return { ...state, memes: [...state.memes, { ...action.data, id: uuid() }] };
        case "REMOVE":
            return { ...state, memes: state.memes.filter(meme => meme.id !== action.data) };
        case "UPDATE_FORM":
            return { ...state, [action.field]: action.data }
        default:
            return state;
    }
}

export default formReducer;
