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
import Firebase from './images/firebase-1.svg';
import Golang from './images/golang.svg';


export const Skills: React.FC = () => {
    const [currentImg, setCurrentImg] = useState<number>(0);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed : 3000,
        centerPadding: "20px",
        slidesToShow: 3,
        speed: 500,
        afterChange: (current: number) => setCurrentImg(current),
      };

      const skillItems = [
        {id: "1", name: 'PHP', number: Php, className: currentImg === 0 ? ' active ' : 'blur-sm' },
        {id: "2", name: 'JS', number: Javascript, className: currentImg === 1 ? ' active ' : 'blur-sm' },
        {id: "3", name: 'ReactJS', number: Rjs, className: currentImg === 2 ? ' active ': 'blur-sm' },
        {id: "4", name: 'SCSS', number: Sass, className: currentImg === 3 ? ' active ' : 'blur-sm' },
        {id: "5", name: 'Tailwind', number: Tailwind, className: currentImg === 4 ? ' active' : 'blur-sm' },
        {id: "6", name: 'Mysql', number: Mysql, className: currentImg === 5 ? ' active' : 'blur-sm' },
        {id: "7", name: 'Firebase', number: Firebase, className: currentImg === 6 ? 'active ': 'blur-sm' },
        {id: "8", name: 'Go-lang', number: Golang, className: currentImg === 7 ? ' active ': 'blur-sm' },
      ];

      return (
        <div className="skills my-20">
          <h2 >Services</h2>
          {skillItems[currentImg] && (
            <h5 className="text-center text-sm">{skillItems[currentImg].name}</h5>
          )}
          <Slider {...settings} className=" relative mx-auto  my-12 max-sm:my-2 w-4/12 max-sm:w-9/12" >
          {skillItems.map((item) => (
            <div key={item.id}>
          
            <img src={`${item.number}`} className={`${item.className} px-5 w-3/4 h-3/4 max-sm:h-3/4 max-sm:w-3/4 my-8 mx-auto max-sm:px-[12px] transition duration-300 ease-in-out`} />
          </div>
          ))}
          </Slider>
        </div>
      );
}
