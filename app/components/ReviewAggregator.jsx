import React, {Component} from 'react';

// import rating from './stars/star';
// import StarRating from 'react-bootstrap-star-rating';
import ReactStars from 'react-stars'




export default function Review(props) {
    let ratings = props.ratings;

    let totalStars = ratings.reduce((initial, rating) => initial + rating.stars, 0);
    let averageRating = totalStars / ratings.length;

    return(
        <div>
            <ReactStars
                count={averageRating}
                size={24}
                color1={'#ffd700'}
                color2={'#ffd700'} />
        </div>
    )
}
