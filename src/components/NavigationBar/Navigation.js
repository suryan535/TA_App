import React from 'react';
import classes from './NavigationBar.module.css';
import { Link } from 'react-router-dom';

const navigationBar = () => {


    return (
        <>
            <nav>
                <div className={classes.NavContainer}>
                    <Link className='rmUnderline' to='/'><div className={classes.item}>HOME</div></Link>
                    <Link className='rmUnderline' to='/subjects'><div className={classes.item}>SUBJECTS</div></Link>
                </div>
            </nav>
        </>
    );
}

export default navigationBar;