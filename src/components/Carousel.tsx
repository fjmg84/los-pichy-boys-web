import Slider from "react-slick";
import "@justinribeiro/lite-youtube";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

interface LiteYouTubeProps {
  id: string;
  title: string;
}

const LiteYouTube = ({ id, title }: LiteYouTubeProps) => (
  <div className="mx-4">
    <LiteYouTubeEmbed id={id} aspectHeight={9} title={title ?? ""} />
  </div>
);

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

function Carousel() {
  return (
    <Slider {...settings}>
      <LiteYouTube id="Iw-xkO_03LE" title="pichy boys" />
      <LiteYouTube id="cO6NgOGcSD0" title="pichy boys" />
      <LiteYouTube id="3gQAmehyj6w" title="pichy boys" />
      <LiteYouTube id="zxtwlk0el7A" title="pichy boys" />
    </Slider>
  );
}

export default Carousel;
