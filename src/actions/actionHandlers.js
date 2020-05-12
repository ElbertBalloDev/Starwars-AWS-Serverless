import { GET_DATA, GET_PERSON_DETAILS } from './actionTypes'; 
import axios from 'axios';


const getDataSuccess = data => {
  return {
      type: GET_DATA,
      data: data
  }
}

export const getData = (url) => {
  return (dispatch) => {
      axios.get(url)
      .then(response => {
          dispatch(getDataSuccess(response.data));
      })
      .catch(error => {
          console.log('getData on action Handler messed up')
      })
  }
}

export const getPersonDetails = data => {
    return {
      type: GET_PERSON_DETAILS,
      data: data
  }
}