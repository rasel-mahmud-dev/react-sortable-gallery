import {createContext} from "react";

export const initialState = {
    images: []
}

const GalleryContext = createContext(initialState)

export default GalleryContext