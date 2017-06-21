import React from 'react' ;
import { connect } from 'react-redux' ;
import { changeInput } from '../actions' ;

const UserInput = ({ onInputChange }) => {
  const style = { 'width' : '500px' , 'marginRight' : '10px' } ;
  const placeholderText = 'Input question Amount or the answer order you need.' ;
  return (
    <input 
      style={style} 
      placeholder={placeholderText}
      onChange={(evt) => onInputChange(evt.target.value)}
    /> 
  )
}

const mapStateToProps = (state) => {
  return {
    userConfig : state.userConfig 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange : (value) => {
      dispatch(changeInput(value))
    }
  }
}

const UserConfig = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInput)

export default UserConfig ;