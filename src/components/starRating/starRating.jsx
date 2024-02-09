import React from 'react'


const StarRating = ({item}) => {
  const fullStars = Math.floor(item.rating);
  const halfStar = item.rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-[yellow]" style={{ color: "yellow" }}>&#9733;</span>);
    }

    if (halfStar) {
      stars.push(
        <span key={fullStars} className="text-yellow-500" style={{ color: "yellow" }}>&#9734;</span>
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={fullStars + (halfStar ? 1 : 0) + i} className="text-gray-300">&#9734;</span>);
    }

    return stars;
  };

  return <div className="flex text-yellow-500">{renderStars()}</div>;
};
  
export default StarRating
