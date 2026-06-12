import { useEffect, useState } from 'react'

export const StarRating = () => {
    const stars = Array(5).fill(1)
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleRating = (value) => {
        setRating(value);
        // if (onRatingChange) {
        //     onRatingChange(value);
        // }
    };
    return (
        <div style={{ height: '20px', display: 'flex', gap: '10px', width: '100px' }}>
            {stars.map((_, index) => {
                const isFilled = (index+1) <= (hover || rating);
                console.log(index, isFilled)
                return (
                    <button
                        key={index}
                        onClick={() => handleRating(index + 1)}
                        onMouseEnter={() => setHover(index + 1)}
                        onMouseLeave={() => setHover(0)}
                        aria-label={`Rate ${index + 1} out of 5 stars`}
                        style={{
                            backgroundColor: isFilled ? "#FFD700" : "#E4E5E9",
                        }}

                    >
                        {index + 1}
                    </button>
                )
            })}
        </div>
    )
}