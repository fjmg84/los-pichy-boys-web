import Slider from "react-slick";
import "@justinribeiro/lite-youtube";
import LiteYouTube from "./VideoYoutube";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="lg:w-[1920px] md:w-[600px] w-[300px] flex flex-col gap-16">
      <div className="flex w-full justify-center">
        <h1 className="font-extrabold text-yellow-500 uppercase text-2xl md:text-6xl">
          Nuestros videos
        </h1>
      </div>
      <Slider {...settings}>
        <LiteYouTube id="Iw-xkO_03LE" title="pichy boys" />
        <LiteYouTube id="cO6NgOGcSD0" title="pichy boys" />
        <LiteYouTube id="3gQAmehyj6w" title="pichy boys" />
        <LiteYouTube id="zxtwlk0el7A" title="pichy boys" />
      </Slider>
    </div>
  );
}

export default Carousel;
