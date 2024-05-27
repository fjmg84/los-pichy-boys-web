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
  };

  return (
    <div className="w-[1178px] ">
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
