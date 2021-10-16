import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';

const CarouselHomeImg = (props) => {
  const imageSet = [
    {
      name: 'image1',
      url: '../../images/clem-onojeghuo-24vjqGCu0pI-unsplash.jpg',
    },
  ];

  return (
    <Carousel>
      {imageSet.map((item) => (
        <Item item={item} />
      ))}
    </Carousel>
  );
};

function Item({ item }) {
  return (
    <Paper>
      <h2>{item.name}</h2>
      <p>{item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default CarouselHomeImg;
