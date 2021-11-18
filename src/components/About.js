import '../styles/about.scss';
import logo from '../assets/images/logo.png';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-message">
          There was a time when Andy Warhol would carry priceless diamonds in
          his breast pocket - close to him but invisible, just for the hell and
          thrill of it. That is the power and lure of jewellery. We want you to
          feel that exhilarating thrill Warhol felt. We want you to feel that
          endlessly.
          <br />
          <br />
          Endless, which represents the unlimited statements of jewelry, is an
          independent American luxury company. All the pieces are handmade in
          Italy and inspired by "childhood obsessions," and "heritage as a
          fantasy."
        </div>
        <img src={logo} alt="endless logo" />
      </div>
    </div>
  );
};

export default About;
