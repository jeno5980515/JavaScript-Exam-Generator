import React from 'react' ;
import { connect } from 'react-redux' ;

const Answers = ({ questions }) => {
  const answers = questions.map((question) => question.answer ) ;
  if ( answers.length === 0 ) {
    return (
      <h4></h4>
    ) ;
  } else {
    return (
      <h4>
        Answer : { answers.map((answer)=> String.fromCharCode(65 + answer)).join(', ') }
      </h4>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    questions : state.questions 
  }
}

const AnswersContainer = connect(
  mapStateToProps
)(Answers)

export default AnswersContainer ;