import React, { useState } from 'react';

import './MainContent.scss';
import Slideshow from '../slide-show/Slideshow';
import Paginate from '../paginate/Paginate';

const MainContent = () => {
  const images = [
    { url: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80' },
    { url: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80' },
    { url: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2125&q=80' }
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const paginate = type => {
    if (type === 'prev' && currentPage >= 1) {
      setCurrentPage(prev => prev - 1);
    } else {
      setCurrentPage(prev => prev + 1);
    }
  };

  return (
    <div className="main-content">
      <Slideshow images={images} auto={false} showArrows={true}/>
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">
          <Paginate currentPage={currentPage} totalPages={10} paginate={paginate}/>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
