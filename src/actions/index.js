const changeInput = (value) => {
  return {
    type: 'CHANGE_INPUT',
    value
  }
}

 const makeQuestion = (questionList,userConfig) => {
  return {
    type: 'MAKE_QUESTION' ,
    questionList ,
    userConfig
  }
}

const makeQuestionError = () => {
  return {
    type: 'MAKE_QUESTION_ERROR' 
  }
}

const changeOrder = (expectList) => {
  return {
    type: 'CHANGE_ORDER' ,
    expectList 
  }
}

export {
  changeInput ,
  makeQuestion ,
  changeOrder ,
  makeQuestionError 
}