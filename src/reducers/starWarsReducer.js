const initialState = {
list:[],
details:{}
}

const setDetails = (state, searchId) => {
  return state.list.find(person => person.id === parseInt(searchId) )
}

const starWarsReducer = (state = initialState, action) => {
  switch(action.type)
  {
    case 'GET_DATA':
      return {
        ...state, 
        list: action.data
      }
    case 'GET_PERSON_DETAILS':
      const person = setDetails(state, action.data);
      return {
        ...state, 
        details: person
      }
    default: 
    return state;
  }
}
 
export default starWarsReducer;