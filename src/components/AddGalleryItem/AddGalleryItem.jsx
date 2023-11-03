import {useRef} from 'react';
import {ActionTypes} from "@/store/actionTypes.js";
import {useDispatch} from "@/store/useGalleryContextProvider.jsx";

const AddGalleryItem = () => {
    const dispatch = useDispatch()

    const fileInput = useRef()

    function handleTakeImage(){
        fileInput.current?.click()
    }

    function handleLoadImage(e){
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.onload = function (e){
            const base64 = e.target?.result
            if(!base64) return
            const randomId = Math.ceil(Math.random() * 100) + Date.now()
            dispatch({
                type: ActionTypes.ADD_NEW,
                payload: {
                    image: base64,
                    title: randomId,
                    id: randomId
                }
            })
        }
        reader.onerror = function (){}
        reader.readAsDataURL(file)
    }

    return (
        <div onClick={handleTakeImage} className="gallery-item add-btn-item">
            <img src="/image.svg" alt=""/>
            <div className="add-btn-content">
                <img className="icon" src="/image.svg" alt=""/>
                <label htmlFor="">Add Image</label>
            </div>
            <input accept="image/*" onChange={handleLoadImage} ref={fileInput} type="file"  hidden={true} />
        </div>
    );
};

export default AddGalleryItem;