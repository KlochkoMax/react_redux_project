import {Rating} from "react-simple-star-rating";
import React, {useState} from 'react';

const Stars = () => {
    const [rating, setRating] = useState(0)

    const handleRating = (rate) => {
        setRating(rate)

    }

    return (
        <div>
            <Rating
                onClick={handleRating}
                ratingValue={rating}
                size={20}
                label
                transition
                fillColor='orange'
                emptyColor='gray'
                className='foo' // Will remove the inline style if applied
            />
            {/* Use rating value */}
            {rating}
        </div>
    );
};

export default Stars;