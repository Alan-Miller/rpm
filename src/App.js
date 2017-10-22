import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getTeachers, addTeacher, fireTeacher, inputT, inputS } from './redux/reducer';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.getTeachers();
  }

  render() {
    const { teachers, newTeacher, newSubject, fireTeacher, addTeacher, inputT, inputS } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to PMW</h1>
        </header>
        
        <div className="main">
          <form className="teacherForm" onSubmit={_ => addTeacher(newTeacher, newSubject)}>
            <span>Hire new teacher:</span>
            <input 
              type="text" 
              value={newTeacher}
              placeholder="add teacher" 
              onChange={e => inputT(e.target.value)} />
            <input 
              type="text" 
              value={newSubject}
              placeholder="add subject" 
              onChange={e => inputS(e.target.value)} />
            <input type="submit" />
          </form>

          <div className="teacherList">
            { teachers.map((teacher, i) => {
              return (
                <div 
                  key={i} 
                  className="teacher" 
                  onClick={_ => fireTeacher(teacher.id)}>
                  Professor { teacher.name } teaches { teacher.subject } class
                </div>
              )
            }) }
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  if (!state) return {};
  return state;
}

const mapDispatchToProps = { 
  getTeachers, 
  addTeacher, 
  fireTeacher, 
  inputT, 
  inputS 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);