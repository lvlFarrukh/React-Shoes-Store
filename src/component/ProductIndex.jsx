import React, {useState, useContext} from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import Button from '@material-ui/core/Button';

import ShoeCard from "./ShoeCard"

import {GlobalState} from '../context/GlobalState'

const useStylesTypo = makeStyles({
    root: {
      width: '100%',
      maxWidth: 500,
    },
    widthColor: {
        fontWeight: "bolder",

    }
  });

const useStylesGrid = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    gridHeight: {
        height: "83.5vh",
        border: "2px solid lightgray",
        borderRadius: "2px"
    }
}));

const ProductIndex = (props) => {
    const classes1 = useStylesTypo();
    const classes2 = useStylesGrid();
    const { state } = useContext(GlobalState);
    const [productCat, setProductCat] = useState("formal")

    const setCatagory = cat=> {
        let catagory = cat.split(" ")[0].toLowerCase();
        cat && setProductCat(catagory)
    }

    // console.log(state[productCat])
    return (
        <div>
            <div className={classes2.root}>
                <Grid container >
                    <Grid item xs={12} >
                        <Paper className={classes2.paper} elevation={0} >
                            <Typography variant="h5" className={classes1.widthColor} gutterBottom>
                                Select Catagory
                            </Typography>
                        </Paper>
                        <Paper className={classes2.paper} elevation={0} >
        
                            <Autocomplete
                                onChange={(event, value)=> {setCatagory(value.title)}}
                                id="combo-box-demo"
                                options={top100Films}
                                getOptionLabel={(option) => option.title}
                                style={{ width: 300, margin: "0px auto" }}
                                renderInput={(params) => <TextField {...params} label="Catagory" variant="outlined" />}
                            />
                        
                        </Paper>
                        <br/>
                        <br/>
                    </Grid>

                    
                    {state[productCat].map((v,i)=> {
                        return <Grid key={i} item xs={4} style={{margin: "20px 0px"}}>
                                    <ShoeCard shoeData={v}/>
                                </Grid>
                    })}
                    
                </Grid>

                <br/>
                    <br/>
            </div>   
        </div>
    )
}

export default ProductIndex

const top100Films = [
    { title: 'Formal Shoes' },
    { title: 'Casual Shoes' },
    { title: 'Sport Shoes' },
];