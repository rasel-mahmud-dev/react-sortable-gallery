import {createContext} from "react";

export const initialState = {
    images: [],
    selected: []
}

const GalleryContext = createContext(initialState)

export default GalleryContext