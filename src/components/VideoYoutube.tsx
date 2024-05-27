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

export default LiteYouTube;
