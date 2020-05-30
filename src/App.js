import React from 'react';
import Home from './components/Home/Home';
import Subjects from './components/Subject/Subjects';
import Chemistry from './SubjectInfo/Chemistry/Chemistry';
import NavigationBar from './components/NavigationBar/Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Maths from './SubjectInfo/Maths/Maths';
import English from './SubjectInfo/English/English';
import Mechanics from './SubjectInfo/Mechanics/Mechanics';
import Electronics from './SubjectInfo/Electronics/Electronics';
import Physics from './SubjectInfo/Physics/Physics';

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/subjects' component={Subjects} />
          <Route path='/chemistry' component={Chemistry} />
          <Route path='/math' component={Maths} />
          <Route path='/physics' component={Physics} />
          <Route path='/mechanics' component={Mechanics} />
          <Route path='/electronics' component={Electronics} />
          <Route path='/english' component={English} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
