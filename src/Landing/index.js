import profile from '../assets/profile.jpeg';

function Landing() {
  return (
    <div className="container bg-whitesmoke ">
      <div className="_left">
        <div className="title_group">
          <p className="hello">Hello</p>
          <p className="primary title">I'm Chutatip</p>
          <p className="primary title">Wattana</p>
          <p className="primary title">Malee</p>
        </div>
      </div>

      <div className="_right">
        <img className="img_profile" alt="profile" src={profile} />
      </div>
    </div>
  );
}

export default Landing;
