import { Component } from "react";

class Slider extends Component {
  selected = 0;
  interval = 0;

  images = [
    "./Images/1.jpg",
    "./Images/2.jpg",
    "./Images/3.jpg",
    "./Images/4.jpg",
    "./Images/5.jpg",
  ];
  next = () => {
    if (this.selected !== this.images.length - 1) this.selected += 1;
    this.setState({ images: this.images[this.selected] });
  };

  prev = () => {
    if (this.selected !== 0) this.selected -= 1;
    this.setState({ images: this.images[this.selected] });
  };

  slide = () => {
    this.interval = setInterval(() => {
      this.next();
      if (this.selected === this.images.length - 1) this.selected = -1;
    }, 500);
  };

  stop = () => {
    clearInterval(this.interval);
  };
  constructor() {
    super();
    this.state = {
      images: this.images[0],
    };
  }
  render() {
    return (
      <div className="slider" style={{marginLeft:'320px',marginRight:'230px',marginTop:'100px',}}>
        <img  style={{width:'400px',height:'200px',}} src={this.state.images} id="slideShow" />
        <br />
        <input style={{marginLeft:'70px'}} type="button" onClick={this.prev} value="prev" className="btn" />
        <input type="button" onClick={this.next} value="next" className="btn" />
     
        <input
          type="button"
          onClick={this.slide}
          value="start"
          className="btn"
        />
        <input type="button" onClick={this.stop} value="stop" className="btn" />
      </div>
    );
  }
}

export default Slider;