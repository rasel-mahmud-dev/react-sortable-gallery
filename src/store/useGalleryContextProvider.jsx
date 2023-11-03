import GalleryContext, {initialState} from "./GalleryContext.js";
import {useReducer} from "react";
import {ActionTypes} from "@/store/actionTypes.js";

let dispatch;

function reducer(state, action) {
    let selectedIndex = -1;
    let payload =  action.payload
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

        case ActionTypes.TOGGLE_SELECT_ITEM:
            selectedIndex = state.selected.indexOf(payload)
            return {
                ...state,
                selected: selectedIndex === -1
                    ? [...state.selected, payload]
                    : state.selected.splice(selectedIndex, 1)
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