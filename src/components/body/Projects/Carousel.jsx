import React, { useState } from 'react';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const CarouselComponent = (props) => {
  const { proj } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === proj.images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? proj.images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = proj.images.map((image, idx) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={idx + 1}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={image} height={250} width={'100%'} />
        <CarouselCaption
          className="text-danger"
          captionText={''}
          captionHeader={''}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous} dark>
      {slides}
      {proj.images && proj.images.length > 1 && (
        <>
          <CarouselIndicators
            items={proj.images}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </>
      )}
    </Carousel>
  );
};

export default CarouselComponent;
