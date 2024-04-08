import React,{useState,useRef,useEffect} from 'react'
import classes from './AccountPage.module.css'
import { Link } from 'react-router-dom/dist'
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import { collapseClasses } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changeLang } from '../slices/langSlice';
import { CheckBox } from '@mui/icons-material';


const AccountPage = () => {

  const dispatch = useDispatch()

  const {lang} = useSelector((state)=>state.langSlice)

  const swiperRef = useRef(null);
  const thumbsRef = useRef(null);
  const [open,setOpen] = useState(true);

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
  return (
   <>
   <div className={classes.main}>
   <div className={classes.background_image_div}>
          <img
            src="/assets/images/bg-top-4.png"
            alt="background game"
            className={classes.background_image}
          />
        </div>
   
    <div className={classes.thumb_carousel}>
        <div className={classes.lang_buttons}>

        <div className={classes.english_btn}>
        <button className={classes.lang_btn} onClick={()=>dispatch(changeLang(0))}>English</button>
        </div>
        <div className={classes.arabic_btn}>
          <button className={classes.lang_btn} onClick={()=>dispatch(changeLang(1))}>Arabic</button>
        </div>

        </div>
        
        <div className={classes.carousel_container}>
        <div className={classes.logo_div}>
            <img
              src="/assets/images/logo.png"
              alt="Game It"
              className={classes.logo}
            />
          </div>
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

      <div className={classes.form_container}>
     <div className={classes.form_sub_container}>
     <p style={{fontSize:"3rem",fontWeight:"600"}}>{lang == 0 ? "WELCOME TO GAMEIT PORTAL":"مرحبًا بك في بوابة GAMEIT"}</p>
      <p style={{fontSize:"1.75rem",fontWeight:"600"}}>{lang == 0 ? "PLAY UNLIMITED HUNDREDS OF COOL GAMES IN AED 3.25":"العب مئات غير محدودة من الألعاب الرائعة مقابل 3.25 درهمًا إماراتيًا"}</p>
      <p style={{fontSize:"1.75rem",fontWeight:"400",color:"grey"}}>{lang == 0 ? "ENTER YOUR MOBILE NUMBER TO RECEIVE OTP":"أدخل رقم هاتفك المحمول لتلقي كلمة المرور لمرة واحدة (OTP)."}</p>
      <form action="submit" className={classes.form}>
        <input type="text" placeholder={lang == 0 ? "Enter Your Phone Number : eg. 9715xxxxx":"أدخل رقم هاتفك: على سبيل المثال. 9715xxxxxx"} className={classes.number_input} />
        <div className={classes.checkbox}>
        <input type="checkbox" id="" name="" value="value" className={classes.checkbox_input} />
        
  <label for="vehicle1" style={{color:"grey",fontSize:"1.75rem"}}> {lang == 0 ? "I agree to the Terms and Conditions.":"أوافق على الشروط."}</label><br/>
  </div>
  <div className={classes.form_buttons}>
  <div className={classes.btn_container}>
  <button className={classes.subscribe_btn}>Subscribe</button>
  </div>
  <div className={classes.btn_container}>
  <button className={classes.close_btn}>Close</button>
  </div>
  </div>
      </form>
     </div>
      </div>


      <div className={classes.bottom_container}>
          
         
          <div className={classes.terms_container}>
          <h2 style={{color:"white",fontSize:"3rem"}}>{lang== 0 ?"TERMS AND CONDITION":"أحكام وشروط"}</h2>
          <p style={{fontSize:"1.75rem"}}>{lang==0?"By clicking on the above subscribe button, you will agree on the below terms and conditions:":"بالضغط على زر الاشتراك أعلاه، فإنك توافق على الشروط والأحكام التالية:"}</p>
          <ul>
            <li>{lang==0 ? "You will start the paid subscription after the free period automatically":"ستبدأ الاشتراك المدفوع بعد الفترة المجانية تلقائيًا"}</li>
            <li>{lang==0 ? "No commitment, you can cancel your subscription at any time by sending C GMD to 1111":"لا يوجد التزام، يمكنك إلغاء اشتراكك في أي وقت عن طريق إرسال C GMD إلى 1111"}</li>
            <li>{lang==0 ? "To get support, please contact support@genrosys.com or info@blazon.ae":"للحصول على الدعم، يرجى التواصل مع support@genrosys.com أو info@blazon.ae"}</li>
            <li>{lang==0 ? "The free trail is valid only for new subscribers":"المسار المجاني صالح فقط للمشتركين الجدد"}</li>
            <li>{lang==0 ? "Enjoy Your Free trial for 24 hours":"استمتع بتجربتك المجانية لمدة 24 ساعة"}</li>
            <li>{lang==0 ? "Please make sure that your browser is not using any 3rdparty blocking technologies and you have a healthy internet connection for swift access to the content.":"يرجى التأكد من أن متصفحك لا يستخدم أي تقنيات حظر تابعة لجهات خارجية وأن لديك اتصال إنترنت سليم للوصول السريع إلى المحتوى."}</li>
            <li>{lang==0 ? "For full terms and conditions ":"للحصول على الشروط والأحكام الكاملة "}<Link to='/' style={{color:"white"}}>{lang == 0 ?"click here":"انقر هنا"}</Link></li>
          </ul>

          

          </div>
         
          
        </div>
        

        <div className={classes.footer_container}>
        <p>Copyright © 2021 <span style={{color:"#ffcb05"}}>GameIT </span></p>
          </div>

          <div className={classes.bottom_background_image_div}>
            <img
              src="/assets/images/bg-bottom.png"
              alt="bottom background"
              className={classes.bottom_background_image}
            />
          </div>
      </div>
     
   </>
  )
}

export default AccountPage