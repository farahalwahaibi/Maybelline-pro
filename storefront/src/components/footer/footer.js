import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: '#eee',
      padding: theme.spacing(4),
    },
  }));

  
const Footer = (props) =>{
    const classes = useStyles();
    return (
        <>
        <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
                &copy; 2021 Javascript 401
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" >        
                <p>React + Redux + Material UI</p>
        </Typography>
        </footer>
        </>
    )
}


export default Footer ;