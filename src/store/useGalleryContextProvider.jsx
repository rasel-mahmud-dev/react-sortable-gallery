import GalleryContext, {initialState} from "./GalleryContext.js";
import {useReducer} from "react";
import {ActionTypes} from "@/store/actionTypes.js";

let dispatch;

function reducer(state, action) {
    switch (action.type) {
        case ActionTypes.LOAD_IMAGES:
            return {
                ...state,
                images: action.payload
            }

        case ActionTypes.DELETE_IMAGES:
            return {
                ...state,
                images: state.images.filter(item => action.payload?.includes(item.id)),
                selected: []
            }

        default:
            return state
    }
}


function useGalleryContextProvider(HigherOrderComponent) {
    return function () {
        const [state, stateDispatch] = useReducer(reducer, initialState,)
        dispatch = stateDispatch

        return (
            <GalleryContext.Provider value={state}>
                <HigherOrderComponent/>
            </GalleryContext.Provider>
        )
    }
}

export function useDispatch() {
    return dispatch
}


export default useGalleryContextProvider