import React, { Component } from 'react';
import classes from './Chemistry.module.css';
import Individual from '../Individual/Individual';
import PopUp from '../../components/PopUp/PopUp';

class Chemistry extends Component {

    state = {
        students: {
            student1: ['Rahul Dev', '19EC20017'],
            student2: ['Arman Malik', '17HS30021'],
            student3: ['Ranjan Das', '18MA30012'],
            student4: ['Ramesh Gura', '16AR10056'],
            student5: ['Aniket Sahoo', '19CS10045'],
            student6: ['Narad Raj', '18EX20012'],
        },
        popUp: false,
    }

    visiblePopup = () => {
        let result = this.state.popUp;
        if (result) {
            this.setState({ popUp: false });
        }
        else {
            this.setState({ popUp: true });
        }
    }
    removeStudent = (index) => {
        let newStudent = { ...this.state.students };
        delete newStudent[index];
        this.setState({
            students: newStudent
        });
    }

    render() {

        let details = { ...this.state.students };
        let printOut = Object.keys(details).map((igKey) => {
            return <Individual Name={details[igKey][0]} RollNo={details[igKey][1]} key={igKey} click={() => this.removeStudent(igKey)} />
        })

        let result = this.state.popUp;
        let display = null;
        if (result) {
            display = <PopUp click={this.visiblePopup} student={this.state.students} />
        }

        return (
            <>
                {display}
                <div className="heading">CHEMISTRY</div>
                <div className={classes.Table}>
                    <div className={classes.TableContent}>
                        {printOut}
                    </div>
                </div>
                <div className={classes.AddHolder}>
                    <button className={classes.Add} onClick={this.visiblePopup}>ADD STUDENTS</button>
                </div>

            </>
        );
    }
}

export default Chemistry;