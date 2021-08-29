import React, { Component, Fragment } from "react";
import Slide from "../components/Slide";
import { Pagination, Button, Flex } from "../components/SliderStyle";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: [
        {
          id: "1",
          image:
            "https://www.linkpicture.com/q/1_240.jpg",
          text: "ONE"
        },
        {
          id: "2",
          image:
            "https://www.linkpicture.com/q/2_489.jpg",
          text: "TWO"
        },
        {
          id: "3",
          image:
            "https://www.linkpicture.com/q/3_316.jpg",
          text: "THREE"
        },
        {
            id: "4",
            image:
              "https://www.linkpicture.com/q/4_289.jpg",
            text: "FOUR"
          },
          {
            id: "5",
            image:
              "https://www.linkpicture.com/q/5_297.jpg",
            text: "FIVE"
          }
      ],
      currentIndex: 0
    };
  }

  previousState = () => {
    const { slide, currentIndex } = this.state;
    if (currentIndex === 0) {
      return this.setState({ currentIndex: slide.length - 1 });
    }
    this.setState({ currentIndex: currentIndex - 1 });
  };

  nextState = () => {
    const { currentIndex, slide } = this.state;
    if (currentIndex === slide.length - 1) {
      return this.setState({ currentIndex: 0 });
    }
    this.setState({ currentIndex: currentIndex + 1 });
  };

  indexSlide = info => {
    const { id } = info;
    this.setState({ currentIndex: id - 1 });
  };

  render() {
    const { slide, currentIndex } = this.state;
    return (
      <Fragment>
        <Slide key={slide[currentIndex].id} info={slide[currentIndex]} />
        <Flex background>
          {slide.map(v => {
            let bgColor = "white";
            if (currentIndex + 1 === +v.id) {
              bgColor = "orange";
            }
            return (
              <Pagination
                key={v.id}
                bgColor={bgColor}
                onClick={() => this.indexSlide(v)}
              />
            );
          })}
        </Flex>
        <Flex>
          <Button onClick={this.previousState}>Previous</Button>
          <Button onClick={this.nextState}>Next</Button>
        </Flex>
      </Fragment>
    );
  }
}

export default Slider;
