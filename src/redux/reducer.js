import axios from 'axios';

const GET_TEACHERS = 'GET_TEACHERS';
const ADD_TEACHER = 'ADD_TEACHER';
const FIRE_TEACHER = 'FIRE_TEACHER';
const SET_TEACHER = 'SET_TEACHER';
const SET_SUBJECT = 'SET_SUBJECT';

const initialState = {
  teachers: [],
  newTeacher: '',
  newSubject: '',
}

const port = 3010;

export function getTeachers() {
  return {
    type: GET_TEACHERS,
    payload: axios.get(`http://localhost:${port}/api/teachers`).then(response => response.data)
  }
}

export function addTeacher(newTeacher, newSubject) {
  return {
    type: ADD_TEACHER,
    payload: axios.post(`http://localhost:${port}/api/teachers`, {newTeacher, newSubject}).then(response => response.data)
  }
}

export function fireTeacher(id) {
  return {
    type: FIRE_TEACHER,
    payload: axios.delete(`http://localhost:${port}/api/teachers/${id}`).then(response => response.data)
  }
}

export function inputT(val) {
  return {
    type: SET_TEACHER,
    payload: val
  }
}

export function inputS(val) {
  return {
    type: SET_SUBJECT,
    payload: val
  }
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_TEACHERS + '_FULFILLED': 
      return Object.assign({}, state, {teachers: action.payload});
    case ADD_TEACHER + '_FULFILLED':
      return Object.assign({}, state, {teachers: action.payload});
    case SET_TEACHER:
      return Object.assign({}, state, {newTeacher: action.payload})
    case SET_SUBJECT:
      return Object.assign({}, state, {newSubject: action.payload})  
    case FIRE_TEACHER + '_FULFILLED':
      return Object.assign({}, state, {teachers: action.payload});
    default:
      return state;
  }
}