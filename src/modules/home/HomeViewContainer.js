import {compose, lifecycle, withState} from 'recompose';

import HomeScreen from './HomeView';
import { connect } from 'react-redux';
import {getRecipes} from "../gallery/GalleryState";

// export default compose(withState('isExtended', 'setIsExtended', false))(
//   HomeScreen,
// );


export default compose(
    connect(
        state => ({
        }),
        dispatch => ({
            getRecipes: (image) => dispatch(getRecipes(image)),
        }),
    ),
    lifecycle({
    }),
)(HomeScreen);
