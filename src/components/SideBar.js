import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import classes from './SideBar.module.css'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom/dist';

export default function SideBar({open,close}) {

  const params = useParams();


  const DrawerList = (
    <Box className={classes.box} role="presentation" >
      <List>
      <div className={classes.logo_div}>
            <img
              src="/assets/images/logo.png"
              alt="Game It"
              className={classes.logo}
            />
          </div>
      <div className={classes.menu_list}>
            <Link to="/account" className={classes.link}>
              MY ACCOUNT
            </Link>
            <Link to="/category/General" className={`${classes.link} ${ params.cat == "General" ? classes.active:""}`}>
              MOST PLAYED
            </Link>
            <Link to="/category/Funny" className={`${classes.link} ${ params.cat == "Funny" ? classes.active:""}`}>
              FUNNY GAMES
            </Link>
            <Link to="/category/Racing" className={`${classes.link} ${ params.cat == "Racing" ? classes.active:""}`}>
              RACING GAMES
            </Link>
            <Link to="/category/Sports" className={`${classes.link} ${ params.cat == "Sports" ? classes.active:""}`}>
              SPORTS GAMES
            </Link>
            <Link to="/category/Adventure" className={`${classes.link} ${ params.cat == "Adventure" ? classes.active:""}`}>
              ADVENTURE GAMES
            </Link>
            <Link to="/category/Action" className={`${classes.link} ${ params.cat == "Action" ? classes.active:""}`}>
              ACTION GAMES
            </Link>
          </div>

      </List>
      <Divider />
     
    </Box>
  );

  return (
    <div>
      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      <Drawer open={open} onClose={close} >
        {DrawerList}
      </Drawer>
    </div>
  );
}