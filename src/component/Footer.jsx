import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  backColor: {
    backgroundColor: "brown",
    fontWeight: "bolder",
    color: "white"
  },
  iconM: {
      fontSize: "2.5vw"
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.backColor}>
        <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <FacebookIcon className={classes.iconM}/>
            </IconButton> 

            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <GitHubIcon className={classes.iconM}/>
            </IconButton> 
  
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <LinkedInIcon className={classes.iconM}/>   
            </IconButton> 
            
                   
        </Toolbar>
      </AppBar>
    </div>
  );
}