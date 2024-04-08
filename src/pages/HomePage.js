import React, { useEffect, useRef, useState } from "react";
import classes from "./HomePage.module.css";
import { Link } from "react-router-dom";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import {
  Thumbs,
  FreeMode,
  Navigation,
  Autoplay,
  EffectFade,
  EffectCards,
  EffectCreative,
} from "swiper/modules";
import axios from "axios";
import { getContentApi } from "../api/api";
import OwlCarousel from "react-owl-carousel";
import Carousel from "../components/Carousel";
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import { useParams } from "react-router-dom/dist";

SwiperCore.use([
  Thumbs,
  FreeMode,
  Navigation,
  Autoplay,
  EffectFade,
  EffectCards,
  EffectCreative,
]);

const HomePage = () => {
  const swiperRef = useRef(null);
  const thumbsRef = useRef(null);

  const params = useParams();
  

  const [data, setData] = useState([
    {
      imageLink: "/assets/images/slide1.jpg",
    },
    {
      imageLink: "/assets/images/slide2.jpg",
    },
    {
      imageLink: "/assets/images/slide3.jpg",
    },
    {
      imageLink: "/assets/images/slide4.jpg",
    },
    {
      imageLink: "/assets/images/slide5.jpg",
    },
  ]);

  const [content, setContent] = useState([]);
  const [mostPlayed, setMostPlayed] = useState([]);
  const [funny, setFunny] = useState([]);
  const [action, setAction] = useState([]);
  const [adventure, setAdventure] = useState([]);
  const [racing, setRacing] = useState([]);
  const [sports, setSports] = useState([]);

  useEffect(() => {
    const swiperInstance = new SwiperCore(swiperRef.current, {
      direction: "horizontal",
      loop: true,
      //   effect: "cards",
      effect: "fade",
      //   effect: "creative",
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      allowTouchMove: true,
      crossfade: true,
      autoplay: {
        delay: 2000,
      },
      parallax: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      thumbs: {
        swiper: thumbsRef.current,
      },
    });

    const thumbsInstance = new SwiperCore(thumbsRef.current, {
      direction: "horizontal",
      spaceBetween: 10,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      autoplay: {
        delay: 1000,
      },
    });

    return () => {
      swiperInstance.destroy(true, true);
      thumbsInstance.destroy(true, true);
    };
  }, []);

  const getContentFromBackend = async () => {
    try {
      const response = await axios.get(`${getContentApi}`);
      console.log(response, "response");
      setContent(response?.data);
      setMostPlayed(() =>
        response?.data?.filter((data) => data?.category == "General")
      );
      setFunny(() =>
        response?.data?.filter((data) => data?.category == "Funny")
      );
      setAction(() =>
        response?.data?.filter((data) => data?.category == "Action")
      );
      setAdventure(() =>
        response?.data?.filter((data) => data?.category == "Adventure")
      );
      setRacing(() =>
        response?.data?.filter((data) => data?.category == "Racing")
      );
      setSports(() =>
        response?.data?.filter((data) => data?.category == "Sports")
      );
    } catch (error) {
      console.log(error, "--------------error");
    }
  };

  useEffect(() => {
    getContentFromBackend();
  }, []);

  return (
    <>
      {/* // navbar section */}
      <header className={classes.header}>
        <nav className={classes.navbar}>
          <div className={classes.logo_div}>
            <img
              src="/assets/images/logo.png"
              alt="Game It"
              className={classes.logo}
            />
          </div>
          <Header active={params.cat == 'General' ? 1 : params.cat == 'Funny' ? 2 : params.cat == 'Racing' ? 3 : params.cat == 'Sports' ? 4 : params.cat == 'Adventure' ? 5 : params.cat == 'Action' ? 6 : "" }/>
          
        </nav>
      </header>

      {/* Thumb CAROUSEL */}
      <div className={classes.thumb_carousel}>
        <div className={classes.background_image_div}>
          <img
            src="/assets/images/bg-top-4.png"
            alt="background game"
            className={classes.background_image}
          />
        </div>
        <div className={classes.carousel_container}>
          <div className="swiper-container" ref={swiperRef}>
            <div className="swiper-wrapper">
              {data?.map((dataItem, index) => (
                <div className="swiper-slide" key={index}>
                  <img src={dataItem?.imageLink} alt={`slide${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>

          <div
            className="swiper-container swiper-thumbs-container"
            ref={thumbsRef}
          >
            <div className="swiper-wrapper swiper-thumbs-wrapper">
              {data?.map((dataItem, index) => (
                <div className="swiper-slide swiper-thumbs-slide" key={index}>
                  <img src={dataItem?.imageLink} alt={`thumb${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SECTION GAMES */}
      <div className={classes.games}>
        <Carousel
          data={mostPlayed}
          titlePrimary="Most"
          titleSecondary="Played"
        />
        <Carousel data={funny} titlePrimary="Funny" titleSecondary="Games" />
        <Carousel data={racing} titlePrimary="Racing" titleSecondary="Games" />
        <Carousel data={sports} titlePrimary="Sports" titleSecondary="Games" />
        <Carousel
          data={adventure}
          titlePrimary="Adventure"
          titleSecondary="Games"
        />

        <div className={classes.bottom_container}>
          <div className={classes.bottom_background_image_div}>
            <img
              src="/assets/images/bg-bottom.png"
              alt="bottom background"
              className={classes.bottom_background_image}
            />
          </div>
          <Carousel
            data={action}
            titlePrimary="Action"
            titleSecondary="Games"
          />
        </div>
       
        
      </div>
    </>
  );
};

export default HomePage;
