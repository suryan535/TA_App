import React, { Component } from 'react';
import classes from '../Chemistry/Chemistry.module.css';
import Individual from '../Individual/Individual';
import PopUp from '../../components/PopUp/PopUp';

class Electronics extends Component {

    state = {
        students: {
            student1: ['Rama Reddy', '19EC10007'],
            student2: ['Abhishek Kumar', '17HS30021'],
            student3: ['Badal Kumar', '18MA20043'],
            student4: ['Rishiguh Raj', '16EE10342'],
            student5: ['Sanket Kanta', '19CS10045'],
            student6: ['Sanket Sinha', '18EX20012'],
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
                <div className="heading">ELECTRONICS</div>
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

export default Electronics;