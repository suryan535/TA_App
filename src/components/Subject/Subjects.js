import React from 'react';
import { Link } from 'react-router-dom';
import SubjectIndi from './SubjectIndi/SubjectIndi';
import classes from './Subjects.module.css';
import Maths from '../../assets/SubjectImages/Maths.svg';
import English from '../../assets/SubjectImages/English.svg';
import Electronics from '../../assets/SubjectImages/Electronics.svg';
import Mechanics from '../../assets/SubjectImages/Mechanics.svg';
import Physics from '../../assets/SubjectImages/Physics.svg';
import Chemistry from '../../assets/SubjectImages/Chemistry.svg';

const subjects = () => {
    return (
        <>
            <div className={classes.OuterContainer}>
                <div className={classes.MainContainer}>
                    <Link className='rmUnderline' to='/math'><SubjectIndi Subject='MATHS' Semester='3rd' Credit='6' Image={Maths} /></Link>
                    <Link className='rmUnderline' to='/english'><SubjectIndi Subject='ENGLISH' Semester='2nd' Credit='7' Image={English} /></Link>
                    <Link className='rmUnderline' to='/chemistry'><SubjectIndi Subject='CHEMISTRY' Semester='1st' Credit='3' Image={Chemistry} /></Link>
                    <Link className='rmUnderline' to='/physics'><SubjectIndi Subject='PHYSICS' Semester='4th' Credit='5' Image={Physics} /></Link>
                    <Link className='rmUnderline' to='/mechanics'><SubjectIndi Subject='MECHANICS' Semester='2nd' Credit='8' Image={Mechanics} /></Link>
                    <Link className='rmUnderline' to='/electronics'><SubjectIndi Subject='ELECTRONICS' Semester='3rd' Credit='4' Image={Electronics} /></Link>
                </div>
            </div>
        </>
    );
}

export default subjects;