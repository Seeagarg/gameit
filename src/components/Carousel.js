import React from "react";
import classes from "./Carousel.module.css";
import OwlCarousel from "react-owl-carousel";

const Carousel = ({ data, titlePrimary, titleSecondary }) => {
     //Owl Carousel Settings
  const options = {
    loop: true,
    items: 3,
    // margin: 0,
    margin: 40,
    center: true,
    autoWidth: true,
    nav: true,
    autoplay: true,
    dots: false,
    autoplayTimeout: 3000, // Autoplay interval in milliseconds
    autoplayHoverPause: true,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1,
      },
      300: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  return (
    <div className={classes.games_sub_container}>
      <div className={classes.game_title}>
        <div className={classes.small_line}></div>
        <div className={classes.game_title_name_div}>
          <h1 className={classes.game_title_name}>
            {titlePrimary}{" "}
            <span className={classes.game_title_name2}>{titleSecondary}</span>
          </h1>
        </div>
        <div className={classes.large_line}></div>
      </div>
      <div className={classes.games_carousel}>
        <OwlCarousel className="owl-theme" {...options}>
          {data?.map((dataItem) => {
            return (
              <div className={classes.game_container}>
                <div className={classes.game_image_div}>
                  <img
                    src={dataItem?.imgurl}
                    alt={dataItem?.gamename}
                    className={classes.game_image}
                  />
                </div>
                <div className={classes.game_name_div}>
                  <h3 className={classes.game_name}>{dataItem?.gamename}</h3>
                </div>
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Carousel;
