import Slider from "react-slick";
import "@justinribeiro/lite-youtube";
import LiteYouTube from "./VideoYoutube";

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
    <div className="xl:w-[1178px] lg:w-[900px] md:w-[600px] w-[300px] ">
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
