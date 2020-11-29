import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {GlobalState} from '../context/GlobalState'

import ShoeCard from './ShoeCard'


const useStylesGrid = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
    paperImg: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,    
        textAlignLast: "right",
        margin: "30px 10px 30px 0px" 
    }
  }));

  const useStylesCard = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 30,
    },
    pos: {
      marginBottom: 12,
      fontSize: 25
    },
    mg: {
        margin: "130px 0px"
    }
  });
  

const ProductDetail = () => {
    const classes = useStylesGrid();
    const classes1 = useStylesCard();

    const shoesData = useContext(GlobalState);
    // console.log(shoesData)

    const {productId} = useParams();
    const [pCatagory, pId] = productId.split("-");

    const [product, setProduct] = useState()
    const [Relatedproduct, setRelatedProduct] = useState()

    useEffect(()=> {
      setProduct(shoesData[pCatagory][pId]);
      let rProd = shoesData[pCatagory].filter((v)=>{
        return parseInt(v.id) !== pId
      })

      setRelatedProduct(rProd)

    }, [pCatagory, pId, shoesData]);

    product && console.log(product)

    return (
        <div className={classes.root}>

            {/* Picture section */}
            <Grid container>
                <Grid item xs={7}>
                    <Paper className={classes.paperImg} elevation={0}>
                        <img width={550} style={{borderRadius: "10px"}} src={product ? product.imgUrl : "" } alt=""/>
                    </Paper>
                </Grid>

                {/* Detail Section */}
                <Grid item xs={5}>
                    <CardContent className={classes1.mg}>
                        <Typography className={classes1.title} color="textSecondary" gutterBottom>
                            { product && product.title }
                        </Typography>

                        <Typography variant="body2" component="p">
                            { product && product.description }
                        <br />
                        </Typography>
                        <br/>
                        <br/>
                        <Typography className={classes1.pos} color="textSecondary">
                            Rs: { product && product.price }
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item xs={12}>
                  <br/>
                  <Paper elevation={0} className={classes.paper} style={{textAlign: "Center", margin: "20px", color: "black"}}>
                      <Typography className={classes.fontTheme} variant="h2" component="h2">
                          Related Items
                      </Typography>
                  </Paper>
                </Grid>

                {Relatedproduct && Relatedproduct.map((v, i)=> {
                  return  <Grid key={i} item xs={4} className={classes.alignCard}> 
                              <Paper elevation={0} className={classes.paper}>
                                  <ShoeCard shoeData={v} />
                              </Paper>
                          </Grid>
                      })
                  }

            </Grid>
        </div>

    )
}

export default ProductDetail
