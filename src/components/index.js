import React from 'react' ;
import ReactDOM from 'react-dom' ;
import { connect } from 'react-redux' ; 
import UserConfig from '../containers/userConfig' ;
import MakeQuestion from '../containers/makeQuestion' ;
import Questions from '../containers/questions' ;
import Answers from '../containers/answers' ;
import CopyQuestion from '../components/copyQuestion' ;
import SaveFile from '../components/saveFile' ;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onCopyClick = this.onCopyClick.bind(this);
    this.onSaveClick = this.onSaveClick.bind(this);
    this.getQuestionsDOM = this.getQuestionsDOM.bind(this);
    this.getAnswersDOM = this.getAnswersDOM.bind(this);
  }
  
  getQuestionsDOM(){
    return ReactDOM.findDOMNode(this.questionsDOM) ;
  }

  getAnswersDOM(){
    return ReactDOM.findDOMNode(this.answersDOM) ;
  }

  onCopyClick(callback){
    callback(this.getQuestionsDOM());
  }

  onSaveClick(callback){
    callback(this.getQuestionsDOM(),this.getAnswersDOM());
  }

  render() {
    return (
      <div>
        <UserConfig />
        <MakeQuestion />
        <CopyQuestion onClick={this.onCopyClick}/>
        <SaveFile onClick={this.onSaveClick}/>
        <Answers ref={(DOM) => { this.answersDOM = DOM }}/>
        <Questions ref={(DOM) => { this.questionsDOM = DOM }}/>
      </div>
    );
  }
}

export default App ;


