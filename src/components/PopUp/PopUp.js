import React from 'react';
import classes from './PopUp.module.css';

const popUp = (props) => {

    let printOut = Object.keys(props.student).map(igKey => {
        return <li>{props.student[igKey][0]}  {props.student[igKey][1]}</li>
    })

    return (
        <div className={classes.Backdrop} onClick={props.click}>
            <div className={classes.Inner}>

                <ul>
                    <div className={classes.Final}>STUDENTS ADDED</div>
                    {printOut}
                </ul>
            </div>

        </div>
    );
}

export default popUp;