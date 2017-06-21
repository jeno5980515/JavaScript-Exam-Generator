
const shuffleArray = (array) => {
  const suffledArray = array.slice();
  for ( let i = 0 ; i < suffledArray.length ; i ++ ){
    let randomIndex = Math.floor(Math.random() * i);
    let temp = suffledArray[i];
    suffledArray[i] = suffledArray[randomIndex];
    suffledArray[randomIndex] = temp;
  }
  return suffledArray ;
}

/*
  Change the order of options in `ORDER` mode.

  questionList : origin question list 
  expectOrderList : the user input order
*/

const changeAnswerOrder = (questionList = [] , expectList = []) => {
  let newQuestionList = questionList.slice() ;
  const questionAmount = newQuestionList.length ;
  const expectAmount = expectList.length ;

  for ( let index = 0 ; index < questionAmount && index < expectAmount ; index ++ ){

    const question = newQuestionList[index] ;

    const originAnswer = parseInt(question.answer,10) ;
    // convert ascii code to integer value
    const expectAnswer = expectList[index].charCodeAt()-97 ;

    /*
      Swap option if the expect answer index is not same as origin. 
    */
    if ( originAnswer !== expectAnswer ){
      let options = question.options ;
      let tempOption = options[originAnswer] ;
      options[originAnswer] = options[expectAnswer] ;
      options[expectAnswer] = tempOption ;
      question.answer = expectAnswer ;
    }
  }

  return newQuestionList ;
}


/*
  return questions combined with marked as needed and others. 
*/
const makeNumberOfQuestions = (questionList,amount = 10) => {

  let resultList = [] ;

  const isNeedQuestionList = questionList.filter((question) => {
    return question.isNeed === true ;
  })

  const remainQuestionList = questionList.filter((question) => {
    return question.isNeed !== true ;
  })

  const remainAmount = amount-isNeedQuestionList.length > 0 ? amount-isNeedQuestionList.length : 0 ;

  /*
    shuffle remain question list and combine with needed question, and shuffle again
  */
  const shuffledRemainQuestionList = shuffleArray(remainQuestionList).slice(0,remainAmount);

  resultList = shuffleArray([...isNeedQuestionList,...shuffledRemainQuestionList]) ;

  return resultList ;
}

/* 
  Save the questions and answers to two docx files.
*/
const saveFile = (questionNode,answerNode) => {
  const htmlDocx = window.htmlDocx ;
  const JSZip = window.JSZip ;
  const saveAs = window.saveAs ;

  let questionFile = htmlDocx.asBlob(questionNode.outerHTML);
  let answerFile = htmlDocx.asBlob(answerNode.outerHTML);
  let zip = new JSZip();
  zip.file("question.docx", questionFile, {blob: true});
  zip.file("answer.docx", answerFile, {blob: true});
  zip.generateAsync({type:"blob"}).then(function(content) {
      saveAs(content, "Innova-Question.zip");
  });
}

/*
  Copy the questions node to clipboard.
*/
const copyQuestion = (node) => {
  let range = document.createRange();
  range.selectNode(node);
  window.getSelection().addRange(range);
  document.execCommand('copy');
  alert('Already Copy!');
}

export {
  changeAnswerOrder ,
  makeNumberOfQuestions ,
  saveFile ,
  copyQuestion
} ;
