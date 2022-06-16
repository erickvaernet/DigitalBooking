import React, { useState } from "react";

import Star from "./Star";

const createArray = (length) => Array.from({ length });

export default function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      <div>
        {createArray(totalStars).map((n, i) => (
          <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => setSelectedStars(i + 1)}
          />
        ))}
      </div>
      <p>{selectedStars * 1}</p>
    </>
  );
}
