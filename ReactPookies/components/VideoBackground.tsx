import Video from "../public/0316.mp4";


const Background = () => {
  return (
    <div className="main">
      <video src={Video} autoPlay loop muted/>
    </div>
    );
}
export default Background;