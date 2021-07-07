import React from 'react';
import {connect} from 'react-redux';
import {Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    catName: {
      textTransform: 'uppercase',
      padding: theme.spacing(2)
    }
  }));
const CurrentCat = (props) =>{
    const classes = useStyles();
    console.log(props, 'current');
    
        return (
            <>
            <section>
            <Typography  variant="h2"  className={classes.catName} align="center">{props.activeCate.activeCat}</Typography>
            <Typography variant="h5" align="center" color="textSecondary">{props.activeCate.desc}</Typography>
            </section>
            </>
            )   
}

const mapStateToProps = state => ({
    activeCate : state.category,
})

export default connect (mapStateToProps)(CurrentCat);