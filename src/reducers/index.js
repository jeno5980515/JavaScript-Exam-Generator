import { combineReducers } from 'redux' ;
import { changeAnswerOrder , makeNumberOfQuestions } from '../multify' ;

const checkMode = (state,value) => {
  let newState = {} ;
  if ( /^[a-dA-D]+$/.test(value) ){      
    newState = { mode : 'ORDER' , amount : value.length , expectList : value.toLowerCase().split('') } ;
  } else if ( /^[0-9]+$/.test(value) ){
    newState = { mode : 'AMOUNT' , amount : parseInt(value,10) } ;
  } else if ( value === '' ){
    newState = { mode : 'AMOUNT' , amount : 10 } ;
  } else {
    newState = { mode : 'ERROR' } ;
  }
  return newState ;
}

const questions = (state = [] , action) => {
  switch ( action.type ){
    case 'MAKE_QUESTION':
      const { questionList , userConfig } = action ;
      const { amount } = userConfig ;
      state = makeNumberOfQuestions(questionList,amount) ;
      break ;
    case 'CHANGE_ORDER':
      const { expectList } = action ;
      state = changeAnswerOrder(state,expectList) ;
      break ;
    case 'MAKE_QUESTION_ERROR':
      alert('Input format Error !') ;
      break ;
    default :
      break ;
  }
  return state ;
}

const userConfig = (state = { mode : 'AMOUNT' , amount : 10 } , action) => {
  let newState = {...state} ;
  switch ( action.type ){
    case 'CHANGE_INPUT' :
      let valueWithOutSpace = action.value.replace(/\s/g, "");
      newState = checkMode(state,valueWithOutSpace) ;
      break ;
    default :
      break ;
  }
  return newState ;
}

const reducer = combineReducers({ questions , userConfig }) ;

export default reducer ;
