import React,{useEffect,useState} from 'react'
import classes from './CategoryPage.module.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { getContentApi } from '../api/api';
import { useParams } from 'react-router-dom/dist';
import Header from '../components/Header';
// import { useEffect } from 'react'

const CategoryPage = () => {

  const [content, setContent] = useState([]);
  const [search,setSearch] = useState("");

  const params = useParams()
  console.log(params.cat)
 


  const getContentFromBackend = async () => {
    try {
      const response = await axios.get(`${getContentApi}`);
      console.log(response, "response");
      setContent(response?.data);
      console.log(response?.data?.filter((data) => data?.category == params.cat ))
      setContent(() =>
        response?.data?.filter((data) => data?.category == params.cat)
      );
    
    } catch (error) {
      console.log(error, "--------------error");
    }
  };

  useEffect(() => {
    getContentFromBackend();
  }, [params]);

  console.log(search,'--')


  return (
    <div className={classes.main}>
    <div className={classes.background_image_div}>
          <img
            src="/assets/images/bg-top-4.png"
            alt="background game"
            className={classes.background_image}
          />
        </div>


        <div className={classes.sub_main}>
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

      <div className={classes.main_content}>
      <div className={classes.search}>
      <input type="text" placeholder='Type Something...' value={search} onChange={(e)=>setSearch(e.target.value)}/>
      <div className={classes.searchIcon}>
      <SearchIcon fontSize='large'/>
      </div>
      
      </div>


        <div className={classes.game_title}>
        <div className={classes.small_line}></div>
        <div className={classes.game_title_name_div}>
          <h1 className={classes.game_title_name}>
            {params.cat == 'General'?"Most":params.cat}
            <span className={classes.game_title_name2}>{params.cat == 'General' ? "Played":"Games"}</span>
          </h1>
        </div>
        <div className={classes.large_line}></div>
      </div>

      <div className={classes.games}>
      {
        content.filter((item)=>item.gamename.toLowerCase().includes(search)).map((item,idx)=>(
          <>
            <div>
              <img src={item.imgurl} alt="" className={classes.gameImg} />
              <p>{item.gamename}</p>
            </div>
          </>
        ))
      }
      </div>


      </div>


<div className={classes.footer_container}>
        <p>Copyright © 2021 <span style={{color:"#ffcb05"}}>GameIT </span></p>
          </div>


        </div>
        <div className={classes.bottom_background_image_div}>
            <img
              src="/assets/images/bg-bottom.png"
              alt="bottom background"
              className={classes.bottom_background_image}
            />
          </div>
    </div>
  )
}

export default CategoryPage