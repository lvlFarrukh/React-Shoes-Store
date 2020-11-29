import React from 'react'
import Carousel from 'react-material-ui-carousel'
import {Paper,} from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function Slider(props)
{
    var items = [
        {
            imgUrl: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            imgUrl: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXN8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            imgUrl: "https://images.freeimages.com/images/large-previews/50f/shoe-1185255.jpg"
        }
    ]
 
    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    const classes = useStyles();
    return (
        <Grid container spacing={0}>
            <Grid item xs={4} sm={4}>
                <Paper className={classes.paper}>
                    <img src={props.item.imgUrl} alt="" style={{width: "100%"}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} sm={4}>
                <Paper className={classes.paper}>
                    <img src={props.item.imgUrl} alt="" style={{width: "100%"}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} sm={4}>
                <Paper className={classes.paper}>
                    <img src={props.item.imgUrl} alt="" style={{width: "100%"}}/>
                </Paper>
            </Grid>
        </Grid>
            
           
    )
}
// const Slider = () => {
//     return (
//         <div>
            
//         </div>
//     )
// }

export default Slider
