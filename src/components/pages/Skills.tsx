import React, {useState, useEffect} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Php from './images/php-1.svg'
import Javascript from './images/javascript-1.svg';
import Rjs from './images/react.svg';
import Sass from './images/sass-1.svg';
import Tailwind from './images/tailwind-css.svg';
import Mysql from './images/mysql-4.svg';


export const Skills: React.FC = () => {
    const [currentImg, setCurrentImg] = useState<number>(0);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed : 2000,
        centerPadding: "20px",
        slidesToShow: 3,
        speed: 500,
        afterChange: (current: number) => setCurrentImg(current),
      };

      const skillItems = [
        {id: "1", number: Php, className: currentImg === 0 ? ' active' : '' },
        {id: "2", number: Javascript, className: currentImg === 1 ? ' active' : '' },
        {id: "3", number: Rjs, className: currentImg === 2 ? ' active' : '' },
        {id: "4", number: Sass, className: currentImg === 3 ? ' active' : '' },
        {id: "5", number: Tailwind, className: currentImg === 4 ? ' active' : '' },
        {id: "6", number: Mysql, className: currentImg === 5 ? ' active ' : '' },
      ];

      return (
        <div className="skills my-20">
          <h2 >Services</h2>
          <Slider {...settings} className="relative flex mx-auto my-8 w-4/12 max-sm:w-4/6" >
          {skillItems.map((item) => (
          <div key={item.id}>
          
            <img src={`${item.number}`} className={`text-slate-300 ${item.className}  w-1/4 h-2/4 max-sm:w-2/4 my-8 mx-auto transition duration-300 ease-in-out hover:text-white`} />
          </div>
        ))}
          </Slider>
        </div>
      );
}
