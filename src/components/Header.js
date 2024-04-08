import React,{useState} from 'react'
import classes from './Header.module.css'
import { Link } from 'react-router-dom'
import SideBar from './SideBar'
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({active}) => {
    const [open,setOpen] = useState(false);
  return (
    <div>
       <div className={classes.menu_list}>
            <Link to="/account" className={`${classes.link} `}>
              MY ACCOUNT
            </Link>
            <Link to={`/category/General`} className={`${classes.link} ${active == 1 ? classes.active:""}`}>
              MOST PLAYED
            </Link>
            <Link to="/category/Funny" className={`${classes.link} ${active == 2 ? classes.active:""}`}>
              FUNNY GAMES
            </Link>
            <Link to="/category/Racing" className={`${classes.link} ${active == 3 ? classes.active:""}`}>
              RACING GAMES
            </Link>
            <Link to="/category/Sports" className={`${classes.link} ${active == 4 ? classes.active:""}`}>
              SPORTS GAMES
            </Link>
            <Link to="/category/Adventure" className={`${classes.link} ${active == 5 ? classes.active:""}`}>
              ADVENTURE GAMES
            </Link>
            <Link to="/category/Action" className={`${classes.link} ${active == 6 ? classes.active:""}`}>
              ACTION GAMES
            </Link>
          </div>
          <div className={classes.menu_icon}>
          <MenuIcon fontSize="large" onClick={()=>{setOpen(true)}}/>
          </div>
          <SideBar open={open} close={()=>setOpen(false)}/>
    </div>
  )
}

export default Header
