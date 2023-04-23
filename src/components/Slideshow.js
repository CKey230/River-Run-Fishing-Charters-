import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css';
import IMG_0709 from '../images/IMG_0709.jpg';
import IMG_0710 from '../images/IMG_0710.jpg';
import IMG_0711 from '../images/IMG_0711.jpg';
import IMG_0713 from '../images/IMG_0713.jpg';
import IMG_0714 from '../images/IMG_0714.jpg';
import IMG_0715 from '../images/IMG_0715.jpg';
import IMG_0717 from '../images/IMG_0717.jpg';
import IMG_0719 from '../images/IMG_0719.jpg';
import IMG_0720 from '../images/IMG_0720.jpg';
import IMG_0722 from '../images/IMG_0722.jpg';
import IMG_0725 from '../images/IMG_0725.jpg';
import IMG_0728 from '../images/IMG_0728.jpg';
import IMG_0730 from '../images/IMG_0730.jpg';
import IMG_0731 from '../images/IMG_0731.jpg';

const images = [
  IMG_0709,
  IMG_0710,
  IMG_0711,
  IMG_0713,
  IMG_0714,
  IMG_0715,
  IMG_0717,
  IMG_0719,
  IMG_0720,
  IMG_0722,
  IMG_0725,
  IMG_0728,
  IMG_0730,
  IMG_0731,
];

const Slideshow = () => {
    const settings = {
      dots: true,
      dotsClass: 'slick-dots vertical-dots',
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="slideshow-container">
        <div className="slider-container">
          <Slider {...settings} className="slider">
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt="slide" className="slide-image" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  };

export default Slideshow;