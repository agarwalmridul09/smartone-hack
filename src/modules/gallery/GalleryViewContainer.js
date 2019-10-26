import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import GalleryScreen from './GalleryView';

export default compose(
  connect(
    state => ({
      isLoading: state.gallery.isLoading,
      images: state.gallery.images,
    }),
    dispatch => ({
    }),
  ),
  lifecycle({
    componentDidMount() {
    },
  }),
)(GalleryScreen);
