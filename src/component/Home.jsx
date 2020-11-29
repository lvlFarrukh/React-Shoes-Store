import React, { useState, useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { GlobalProvider, GlobalState } from '../context/GlobalState'


import Header from './Header';
import Slider from './Slider';
import ShoeCard from './ShoeCard'
import Footer from './Footer'
import { useNavigate } from 'react-router';

const muGrid = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    fontTheme: {
        fontWeight: "bolder",
    },
    alignCard: {
        textAlign: "center"
    },
    buttonMore: {
        '& > *': {
          margin: theme.spacing(1),
        },
    },
    btnColor: {
        backgroundColor: "brown",
        color: "white"
    }  
  }));

const Home = () => {
    const classes = muGrid();
    const [slider, setSlider] = useState();
    const [formal, setFormal] = useState();
    const [casual, setcasual] = useState();
    const [sports, setsports] = useState();
    const shoesData = useContext(GlobalState);

    useEffect(() => {
        setSlider([
            [shoesData.formal[shoesData.formal.length - 1], shoesData.casual[shoesData.casual.length - 1], shoesData.sport[shoesData.sport.length - 1]],
            [shoesData.formal[shoesData.formal.length - 2], shoesData.casual[shoesData.casual.length - 2], shoesData.sport[shoesData.sport.length - 2]],
            [shoesData.formal[shoesData.formal.length - 3], shoesData.casual[shoesData.casual.length - 3], shoesData.sport[shoesData.sport.length - 3]],
        ])

        setFormal([
            [shoesData.formal[0], shoesData.formal[1], shoesData.formal[2]]
        ])

        setcasual([
            [shoesData.casual[0], shoesData.casual[1], shoesData.casual[2]]
        ])

        setsports([
            [shoesData.sport[0], shoesData.sport[1], shoesData.sport[2]]
        ])

    }, [shoesData])

    const navigate = useNavigate();

    return (
        <GlobalProvider>
            <div>
                <Header/>
                <Slider slides={slider}/>
                
                {/* formal shoes */}
                <br/>
                <br/>
                <div className={classes.root}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Paper elevation={0} className={classes.paper}>
                                <Typography className={classes.fontTheme} variant="h2" component="h2">
                                    Formal Shoes
                                </Typography>
                            </Paper>
                            <br/>

                        </Grid>
                        
                        {sports && sports[0].map((v, i)=> {
                                return  <Grid key={i} item xs={4} className={classes.alignCard}> 
                                            <Paper elevation={0} className={classes.paper}>
                                                <ShoeCard shoeData={v} />
                                            </Paper>
                                        </Grid>
                                    })
                                }

                       
                        <Grid item xs={12}>
                            <br/>
                            <br/>
                            <Paper elevation={0} className={classes.paper}>
                                <Button onClick={()=> {navigate('/product')}} variant="contained" className={classes.btnColor}>
                                    More
                                </Button>
                            </Paper>
                            <br/>

                        </Grid>
                    </Grid>
                </div>

                {/* Informal shoes */}
                <br/>
                <br/>
                <div className={classes.root}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Paper elevation={0} className={classes.paper}>
                                <Typography className={classes.fontTheme} variant="h2" component="h2">
                                    Informal Shoes
                                </Typography>
                            </Paper>
                            <br/>

                        </Grid>

                        {sports && formal[0].map((v, i)=> {
                                return  <Grid key={i} item xs={4} className={classes.alignCard}> 
                                            <Paper elevation={0} className={classes.paper}>
                                                <ShoeCard shoeData={v} />
                                            </Paper>
                                        </Grid>
                                    })
                                }


                        <Grid item xs={12}>
                            <br/>
                            <br/>
                            <Paper elevation={0} className={classes.paper}>
                                <Button onClick={()=> {navigate('/product')}} variant="contained" className={classes.btnColor}>
                                    More
                                </Button>
                            </Paper>
                            <br/>

                        </Grid>
                    </Grid>
                </div>

                {/* sports shoes */}
                <br/>
                <br/>
                <div className={classes.root}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Paper elevation={0} className={classes.paper}>
                                <Typography className={classes.fontTheme} variant="h2" component="h2">
                                    Sports Shoes
                                </Typography>
                            </Paper>
                            <br/>

                        </Grid>

                        {sports && casual[0].map((v, i)=> {
                                return  <Grid key={i} item xs={4} className={classes.alignCard}> 
                                            <Paper elevation={0} className={classes.paper}>
                                                <ShoeCard shoeData={v} />
                                            </Paper>
                                        </Grid>
                                    })
                                }

                        <Grid item xs={12}>
                            <br/>
                            <br/>
                            <Paper elevation={0} className={classes.paper}>
                                <Button onClick={()=> {navigate('/product')}} variant="contained" className={classes.btnColor}>
                                    More
                                </Button>
                            </Paper>
                            <br/>

                        </Grid>
                    </Grid>
                </div>


            <br/>
            <br/>
            <br/>
            <Footer/>
            </div>
        </GlobalProvider>
    )
}

export default Home
