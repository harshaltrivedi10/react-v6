import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  // static is a class variable. It is callable from Class itself.
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    // State is mutable, you can change it in this component
    const { active } = this.state;
    // props are immutable in this component, only parent can change props.
    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="Animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            //eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              data-index={index}
              onClick={this.handleIndexClick}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
