
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

const makeResultList = (questionList,amount) => {

  let resultList = [] ;

  const isNeedQuestionList = questionList.filter((question) => {
    return question.isNeed === true ;
  })

  const remainQuestionList = questionList.filter((question) => {
    return question.isNeed !== true ;
  })

  const remainAmount = amount-isNeedQuestionList.length > 0 ? amount-isNeedQuestionList.length : 0 ;

  const shuffledRemainQuestionList = shuffleArray(remainQuestionList);

  resultList = shuffledRemainQuestionList.slice(0,remainAmount).concat(isNeedQuestionList).sort(() => .5 - Math.random()) ;

  return resultList ;

}

const makeOptionView = (option,questionOptionsView) => {
  const optionView = document.createElement('li') ;
  optionView.textContent = option ;
  questionOptionsView.appendChild(optionView) ;
}

const makeOptionsView = (options,questionView) => {
  const questionOptionsView = document.createElement('ol');
  questionOptionsView.type = 'A' ;
  options.forEach(( option ) => {
    makeOptionView(option,questionOptionsView);
  })
  questionView.appendChild(questionOptionsView);
}

const makeTitleView = (title,questionView) => {
  const questionTitleView = document.createElement('pre');
  questionTitleView.innerText = title ;
  questionView.appendChild(questionTitleView) ;
}

const makeQuestionView = (question,questionListView) => {
  const questionView = document.createElement('li');

  makeTitleView(question.title,questionView);
  questionView.innerHTML += '<br>' ;
  makeOptionsView(question.options,questionView);

  questionView.innerHTML += '<br>' ;
  questionListView.appendChild(questionView) ;
}

const makeAnswerListView = (question,answerListView) => {
  answerListView.textContent += String.fromCharCode(65 + question.answer)  + ',' ;
}

const makeQuestion = ({ questionList , amount = 10 , questionListView , answerListView }) => {
  if ( isNaN(amount) ) amount = 10 ;

  questionListView.innerHTML = '' ;
  answerListView.innerHTML = 'Answer : ' ;

  const resultList = makeResultList(questionList, amount) ;

  resultList.forEach(( question ) => {
    makeQuestionView(question,questionListView) ;
    makeAnswerListView(question,answerListView) ;
  })

}

const questionListView = document.createElement('ol') ;

const amountInputView = document.createElement('input') ;
amountInputView.placeholder = 'Question Amount' ;
amountInputView.width = '200px' ;

const makeQuestionButton = document.createElement('button') ;
makeQuestionButton.textContent = ' Generate ' ;
makeQuestionButton.addEventListener('click',() => {
  makeQuestion({
    amount : parseInt(amountInputView.value) ,
    questionList : QuestionList ,
    questionListView ,
    answerListView
  })
});

const selectContentButton = document.createElement('button');
selectContentButton.textContent = ' Copy ' ;
selectContentButton.addEventListener('click',() => {
    var range = document.createRange();
    range.selectNode(questionListView);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    alert('Already Copy!');
})

const answerListView = document.createElement('h4') ;

const saveButton = document.createElement('button');
saveButton.textContent = 'Save' ;
saveButton.addEventListener('click',() => {
  let questionFile = htmlDocx.asBlob(questionListView.outerHTML);
  saveAs(questionFile, 'test.docx');
  let answerFile = htmlDocx.asBlob(answerListView.outerHTML);
  saveAs(answerFile, 'answer.docx');
})

document.body.appendChild(amountInputView);
document.body.appendChild(makeQuestionButton);
document.body.appendChild(selectContentButton);
document.body.appendChild(saveButton);
document.body.appendChild(answerListView);
document.body.appendChild(questionListView);
