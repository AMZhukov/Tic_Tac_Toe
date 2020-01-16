import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Square(props) {
  const classes = useStyles();
/* 
    switch(props.value){
        case X:
            break;
        case O:
            break;
        default:
    }
         */

  
  return (
    <div className={classes.root}> 
      <Button className="game-button" style={{margin: 0}} variant="outlined" onClick = {props.onClick} >
            {props.value ? props.value : <span dangerouslySetInnerHTML={{__html: '&nbsp'}}></span>} 
      </Button>
{/*       <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
 */}
     </div> 
  );
}


/* import React from 'react'

function Square(props) {
    return (
            <button className="square" onClick = {props.onClick}>
                {props.value}
            </button>
    );
}

export default Square; */