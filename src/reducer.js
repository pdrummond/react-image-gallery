const defaultState = {
  images: [
    "https://farm2.staticflickr.com/1553/25266806624_fdd55cecbc.jpg",
    "https://farm2.staticflickr.com/1571/25911417225_a74c8041b0.jpg",
    "https://farm2.staticflickr.com/1450/25888412766_44745cbca3.jpg"
  ],
  selectedImage: "https://farm2.staticflickr.com/1553/25266806624_fdd55cecbc.jpg"
}

export default function images(state = defaultState, action) {
  console.log(`ACTION [${action.type}]:`, state);
  switch(action.type) {
    case 'IMAGE_SELECTED': {
       return {...state, selectedImage: action.image};
    }
    default: {
      return state;
    }
  }
}
