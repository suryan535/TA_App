import React from 'react';
import classes from './Home.module.css';
import HomeImage from '../../assets/HomeImage/HomeImage.jpg';

const home = () => {
    return (
        <>
            <div className={classes.Container}>
                <div class={classes.image}>
                    <img src={HomeImage}></img>
                </div>
            </div>
            <div className={classes.text}>
                <div class={classes.text1}>T-A</div>
                <div class={classes.text2}>APP</div>
            </div>
        </>

    );
}

export default home;

