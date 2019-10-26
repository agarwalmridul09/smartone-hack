import axios from "axios";


// Initial state
const initialState = {
  isLoading: true,
  images: [],
};

// Actions
const START_IMAGES_LOADING = 'GalleryState/START_LOADING';
const IMAGES_LOADED = 'GalleryState/IMAGES_LOADED';
const CLEAR_IMAGES = 'GalleryState/CLEAR_IMAGES';

// Action creators
function startImagesLoading() {
  return { type: START_IMAGES_LOADING };
}

function recipesAdded(images) {
  return {
    type: IMAGES_LOADED,
    images,
  };
}

function clearImages() {
  return { type: CLEAR_IMAGES };
}

export function getRecipes(image) {
  return dispatch => {
    dispatch(startImagesLoading());
    axios.post("http://4a2881fb.ngrok.io/uploadPic", {image: image}).then((res)=>{
      dispatch(recipesAdded(res.data));

    }).catch(e => alert(e));
  };
}

// Reducer
export default function GalleryStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case START_IMAGES_LOADING:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case IMAGES_LOADED:
      return Object.assign({}, state, {
        isLoading: false,
        images: action.images,
      });
    case CLEAR_IMAGES:
      return Object.assign({}, state, {
        images: [],
      });
    default:
      return state;
  }
}
