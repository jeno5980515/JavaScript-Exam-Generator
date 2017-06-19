
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

const changeAnswerOrder = ({ resultList = [] , value = '' }) => {
  let newResultList = [...resultList] ;
  const resultAmount = newResultList.length ;

  for ( let index = 0 ; index < resultAmount ; index ++ ){

    let nowOrderAnswer = value[index] ;
    if ( nowOrderAnswer === undefined ) break ;
    nowOrderAnswer = nowOrderAnswer.charCodeAt()-97 ;

    const result = newResultList[index] ;
    const nowRealAnswer = parseInt(result.answer,10) ;

    if ( nowRealAnswer !== nowOrderAnswer ){
      let options = result.options ;
      let tempAnswerOption = options[nowRealAnswer] ;
      options[nowRealAnswer] = options[nowOrderAnswer] ;
      options[nowOrderAnswer] = tempAnswerOption ;
      result.answer = nowOrderAnswer ;
    }
  }

  return newResultList ;
}

const makeResultList = ({ questionList , value = 10 , mode }) => {

  let amount = value ;
  if ( mode === 'order' ) amount = value.length ;

  let resultList = [] ;

  const isNeedQuestionList = questionList.filter((question) => {
    return question.isNeed === true ;
  })

  const remainQuestionList = questionList.filter((question) => {
    return question.isNeed !== true ;
  })

  const remainAmount = amount-isNeedQuestionList.length > 0 ? amount-isNeedQuestionList.length : 0 ;

  const shuffledRemainQuestionList = shuffleArray(remainQuestionList).slice(0,remainAmount);

  resultList = shuffleArray([...isNeedQuestionList,...shuffledRemainQuestionList]) ;

  if ( mode === 'order' ){
    resultList = changeAnswerOrder({ resultList , value });
  }

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

const makeQuestion = ({ questionList , mode = 'amount' , value = 10 , questionListView , answerListView }) => {
  
  if ( mode === 'amount' && value === '' ) value = 10 ;

  questionListView.innerHTML = '' ;

  const resultList = makeResultList({ questionList, value , mode }) ;
  resultList.forEach(( question ) => {
    makeQuestionView(question,questionListView) ;
  })

  const answers = resultList.map(question => String.fromCharCode(65 + question.answer));
  answerListView.textContent = 'Answer : ' + answers.join(', ');

}

const questionListView = document.createElement('ol') ;

const amountInputView = document.createElement('input') ;
amountInputView.placeholder = 'Input question Amount or the answer order you need.' ;

const makeQuestionButton = document.createElement('button') ;
makeQuestionButton.textContent = ' Generate ' ;

const checkMode = (value) => {
  if ( /^[a-d]+$/.test(value) ){
    return 'order' ;
  } else if ( /^[0-9]+$/.test(value) || value === '' ){
    return 'amount' ;
  } else {
    return 'error' ;
  }
}

const makeQuestionEvent = (value) => {
  value = value.replace(/\s/g,'').toLowerCase() ; 
  let mode = checkMode(value); 
  if ( mode === 'error' ) {
    alert('Input format error !') ;
  } else {
    let questionConfig = {
      mode ,
      value ,
      questionList : QuestionList ,
      questionListView ,
      answerListView
    }
    makeQuestion(questionConfig) ;
  } 
}

makeQuestionButton.addEventListener('click', ()=> {
  makeQuestionEvent(amountInputView.value);
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

const saveFile = () => {
  let questionFile = htmlDocx.asBlob(questionListView.outerHTML);
  let answerFile = htmlDocx.asBlob(answerListView.outerHTML);
  let zip = new JSZip();
  let folder = zip.folder("Innova-Question");
  folder.file("question.docx", questionFile, {blob: true});
  folder.file("answer.docx", answerFile, {blob: true});
  zip.generateAsync({type:"blob"}).then(function(content) {
      saveAs(content, "Innova-Question.zip");
  });
}

saveButton.addEventListener('click', saveFile ) ;

document.body.appendChild(amountInputView);
document.body.appendChild(makeQuestionButton);
document.body.appendChild(selectContentButton);
document.body.appendChild(saveButton);
document.body.appendChild(answerListView);
document.body.appendChild(questionListView);
