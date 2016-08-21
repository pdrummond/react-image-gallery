import React, {Component} from 'react'
import {connect} from 'react-redux';
import  * as GalleryActions from './actions.js';
import {bindActionCreators} from 'redux';

const flickrImages = [];

export class Gallery extends Component {

  render() {
    const {images, selectedImage, selectImage} = this.props;
    return (
      <div className="image-gallery">
        <div className="gallery-image">
          <div>
            <img src={selectedImage} />
          </div>
        </div>
        <div className="image-scroller">
          {images.map((image, index) => (
            <div key={index} onClick={() => selectImage(image)}>
              <img src={image}/>
            </div>
          ))}
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.props.loadImages();
  }

  handleThumbClick(selectedImage) {
    this.setState({
      selectedImage
    })
  }
}

function mapStateToProps(state) {
  return {
    images: state.images,
    selectedImage: state.selectedImage
  }
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(GalleryActions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Gallery)
