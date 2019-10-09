const reducer = (state = [], action = {}) => {
    switch (action.type) {
        case 'SET_RIGHT_ANSWER':
            return [{rightAnswer: action.payload}]
        // case 'SET_OPTION':
            // return []
      default: 
        return state
    }
  }
  
  export default reducer