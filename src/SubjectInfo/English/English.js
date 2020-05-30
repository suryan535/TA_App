import React, { Component } from 'react';
import classes from '../Chemistry/Chemistry.module.css';
import Individual from '../Individual/Individual';
import PopUp from '../../components/PopUp/PopUp';

class English extends Component {

    state = {
        students: {
            student1: ['Ajay Dev', '19EC20017'],
            student2: ['Vishal Malik', '17HS30021'],
            student3: ['Ramdev Das', '18MA30012'],
            student4: ['Guru Singh Gura', '16AR10056'],
            student5: ['Kshitij Anand', '19CS10045'],
            student6: ['Ashish Pratap', '18EX20012'],
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
                <div className="heading">ENGLISH</div>
                <div className={classes.Table}>
                    <div className={classes.TableContent}>
                        {printOut}
                    </div>
                </div>
                <div className={classes.AddHolder}>
                    <button className={classes.Add} onCLick={this.visiblePopup}>ADD STUDENTS</button>
                </div>

            </>
        );
    }
}

export default English;