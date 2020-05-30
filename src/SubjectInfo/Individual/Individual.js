import React from 'react';
import classes from './Individual.module.css';
import Student from '../../assets/HomeImage/Student.svg';

const individual = (props) => {
    return (
        <div className={classes.Holder}>
            <div className={classes.Image1}><img src={Student} /></div>
            <div className={classes.Name}>{props.Name}</div>
            <div className={classes.RollNo}>{props.RollNo}</div>
            <button className={classes.Delete} onClick={props.click}>REMOVE</button>
        </div>

    );
}

export default individual;