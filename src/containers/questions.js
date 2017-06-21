import React from 'react' ;
import { connect } from 'react-redux' ;
import Options from '../components/options' ;

const Question = ({ question }) => {
  const titleReplaceLineBreakWithBR = question.title.replace(/(?:\r\n|\r|\n)/g, '<br />'); 
  return ( 
    <li>
      <pre dangerouslySetInnerHTML={{ __html : titleReplaceLineBreakWithBR }}></pre>
      <br/>
      <Options options={ question.options } />
      <br/>
    </li>
  )
}

const Questions = ({ questions , getQuestionDOM }) => (
  <ol>
    { questions.map((question,index) => (
      <Question 
        question={question}
        key={index}
      /> 
    )) } 
  </ol>
)

const mapStateToProps = (state) => {
  return {
    questions : state.questions 
  }
}

const QuestionsContainer = connect(
  mapStateToProps
)(Questions)

export default QuestionsContainer ;