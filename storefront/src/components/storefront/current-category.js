import React from 'react';
import {connect} from 'react-redux';

const CurrentCat = (props) =>{
    console.log(props);
    
        return (
            <>
            <h3>{props.activeCate.activeCat}</h3>
            <p>{props.activeCate.desc}</p>
            </>
            )
    
}

const mapStateToProps = state => ({
    activeCate : state.category,
})

export default connect (mapStateToProps)(CurrentCat);