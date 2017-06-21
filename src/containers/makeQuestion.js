import React from 'react' ;
import { connect } from 'react-redux' ;
import { makeQuestion , changeOrder , makeQuestionError } from '../actions' ;
import QuestionList from '../questions' ;

const MakeButton = ({ onClick , userConfig }) => {
  return (
    <button
      onClick={ () => { onClick(userConfig) }}
    >
      Make
    </button>
  )
}

const mapStateToProps = (state) => {
  return {
    userConfig : state.userConfig ,
    questions : state.questions 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick : (userConfig) => {
      if ( userConfig.mode === 'ERROR' ){
        dispatch(makeQuestionError()) ;
      } else {
        dispatch(makeQuestion(QuestionList,userConfig)) ;
        if ( userConfig.mode === 'ORDER' ){
          dispatch(changeOrder(userConfig.expectList)) ;
        }
      }
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MakeButton)
