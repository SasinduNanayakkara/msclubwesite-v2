import React from 'react';
import Slider from "react-owl-carousel";
import { CARD_TYPE_WEBINA, SLIDER_RESPONSIVE_BREAKPOINTS } from '../../constants';
import { Card } from '../../components';
import webinars from '../../data/PastWebinarsData.json';
import {translation} from '../../locales/en-US/translation.json';

const PastWebinarSection: React.FC = () => {
  let slider: any;
  let keyboardCode: number;

  const slideNext = () => {
    slider.next(500);
  }

  const slidePrev = () => {
    slider.prev(500);
  }

  const slideNextKeyBoard = (event: any) => {
    keyboardCode = event.keyCode;

    if (keyboardCode === 39) {
      slideNext();
    }
  }

  const slidePrevKeyBoard = (event: any) => {
    keyboardCode = event.keyCode;

    if (keyboardCode === 37) {
      slidePrev();
    }
  }
  return (
    <div className="container">
      <h2 className="item-header">{translation.label["home-past-webinars-title"]}</h2>
      <div className="item-navigation">
        <div className="view-more-text">{translation.label["view-more"]}</div>
        <div
          onClick={slidePrev}
          onKeyDown={slidePrevKeyBoard}
          role="button"
          tabIndex={0}
          className="mr-2"
        >
          <i className="far fa-arrow-alt-circle-left fa-lg nav-icon" />
        </div>
        &nbsp;
        <div
          onClick={slideNext}
          onKeyDown={slideNextKeyBoard}
          role="button"
          tabIndex={0}
        >
          <i className="far fa-arrow-alt-circle-right fa-lg nav-icon" />
        </div>
      </div>

      {webinars && webinars.data.length > 0 && 
      (
        <Slider
          className="owl-theme"
          dots={false}
          loop={true}
          margin={70}
          responsive={SLIDER_RESPONSIVE_BREAKPOINTS}
          ref={(slide) => {
            slider = slide;
          }}
        >
          {webinars.data.map((event, index) => (
            <Card 
              key={index}
              id={event.id}
              title={event.title}
              dateTime={event.dateTime}
              description={event.description}
              imageUrl={event.imageUrl}
              link={event.link}
              tags={event.tags}
              type={CARD_TYPE_WEBINA}
            />
          ))}
        </Slider>
      )}
    </div>
  );
};

export default PastWebinarSection;