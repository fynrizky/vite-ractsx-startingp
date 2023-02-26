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
import Typesc from './images/typescript.svg';


export const Skills: React.FC = () => {
    const [currentImg, setCurrentImg] = useState<number>(0);

    const settings = {
        className: "center",
        centerMode: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed : 3000,
        centerPadding: "20px",
        slidesToShow: 3,
        speed: 500,
        afterChange: (current: number) => setCurrentImg(current),
      };

      const skillItems = [
        {id: "1", name: 'PHP', number: Php, className: currentImg === 0 ? ' active cursor-pointer' : 'blur-sm' },
        {id: "2", name: 'JS', number: Javascript, className: currentImg === 1 ? ' active cursor-pointer' : 'blur-sm' },
        {id: "3", name: 'Typescript', number: Typesc, className: currentImg === 2 ? ' active cursor-pointer': 'blur-sm' },
        {id: "4", name: 'ReactJS', number: Rjs, className: currentImg === 3 ? ' active cursor-pointer': 'blur-sm' },
        {id: "5", name: 'SCSS', number: Sass, className: currentImg === 4 ? ' active cursor-pointer' : 'blur-sm' },
        {id: "6", name: 'Tailwind', number: Tailwind, className: currentImg === 5 ? ' active cursor-pointer' : 'blur-sm' },
        {id: "7", name: 'Mysql', number: Mysql, className: currentImg === 6 ? ' active cursor-pointer' : 'blur-sm' },
        {id: "8", name: 'Firebase', number: Firebase, className: currentImg === 7 ? 'active cursor-pointer': 'blur-sm' },
        {id: "9", name: 'Go-lang', number: Golang, className: currentImg === 8 ? ' active cursor-pointer': 'blur-sm' },
      ];

      return (
        <div className="skills my-8">
          <h2 >Services</h2>
          {skillItems[currentImg] && (
            <h5 className="text-center text-sm">{skillItems[currentImg].name}</h5>
          )}
          <Slider {...settings} className=" relative mx-auto bg-zinc-800 rounded-full  px-4 pt-4 my-8 max-sm:my-2 w-4/12 max-sm:w-9/12" >
          {skillItems.map((item) => (
            <div key={item.id}>
          
            <img src={`${item.number}`} className={`${item.className} relative px-2 w-2/4 mx-auto max-sm:w-3/4 my-8 max-sm:px-[8px] transition duration-300 ease-in-out`} />
          </div>
          ))}
          </Slider>
          <style>{`
            .slick-arrow {
              display: none;
            }
          `}</style>
        </div>
      );
}
