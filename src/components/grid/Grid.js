import React from 'react';
import './Grid.scss';
import Rating from '../rating/Rating';

const Grid = ({ images }) => {
  return (
    <>
      <div className="grid">
        {
          images.map((image, i) => {
            return (
              <div key={i}>
                <div className="grid-cell" style={{ backgroundImage: `url(${image.url})` }}>
                  <div className="grid-read-more">
                    <button className="grid-cell-button">
                      Read More
                    </button>
                  </div>
                  <div className="grid-detail">
                    <span className="grid-detail-title">Cinema Blinema</span>
                    <div className="grid-detail-rating">
                      <Rating rating={image.rating} totalStars={5} />
                      &nbsp;&nbsp;
                      <div className="grid-vote-average">{image.rating}</div>
                    </div>
                   </div>
                  </div>
                </div>
            );
          })
        }
      </div>
    </>
  );
};

export default Grid;
