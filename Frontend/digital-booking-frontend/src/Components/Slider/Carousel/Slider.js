import { Carousel } from "../lib";

import "./carousel-principal.css";

function Slider() {
  const data = [
    {
      image:
        "https://cdn.pixabay.com/photo/2018/08/06/19/49/design-3588214__340.jpg",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/03/28/09/34/bedroom-1285156__340.jpg",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/07/08/23/36/beach-house-1505461__340.jpg",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/08/06/14/56/people-2593251__340.jpg",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2021/08/27/01/33/bedroom-6577523__340.jpg",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/11/17/09/28/hotel-1831072__340.jpg",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/11/19/06/22/wine-1838132__340.jpg",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/09/07/19/12/hotel-928937__340.jpg",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406__340.jpg",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="carousel__principal">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0 0px",
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="450px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            showNavBtn={true}
            style={{
              textAlign: "center",
              maxWidth: "850px",
              margin: "40px auto",
              padding: "0px 0px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;
