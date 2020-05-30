import React from 'react';
import classes from './SubjectIndi.module.css';

const subjectIndi = (props) => {
    return (
        <>
            <div className={classes.card}>
                <div className={classes.Image}><img src={props.Image} alt={props.Subject} /></div>
                <div className={classes.SubjectName}>{props.Subject}</div>
                <div className={classes.Semester}>SEMESTER: {props.Semester}</div>
                <div className={classes.Credit}>CREDITS: {props.Credit}</div>
            </div>
        </>
    );
}
export default subjectIndi;