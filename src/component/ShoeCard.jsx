import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useNavigate } from 'react-router';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    textAlign: "center",
    margin: "0px auto"
  },
  media: {
    height: 140,
  },
});

export default function ShoeCard(props) {
  const classes = useStyles();
  const navigate = useNavigate();

  // console.log(props.shoeData.title)

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.shoeData.imgUrl}
          title={props.shoeData.id}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.shoeData.title.slice(0,20)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.shoeData.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={()=> {navigate(`/product/${props.shoeData.catagory}-${props.shoeData.id}`)}} size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}