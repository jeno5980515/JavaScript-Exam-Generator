import React from 'react' ;

const Option = ({ option }) => (
  <li>{option}</li>
)

const Options = ({ options }) => {
  return (
    <ol type='A'>
      { options.map((option,index)=> (
        <Option 
          option={option}
          key={index}
        />
      ))}
    </ol>
  )
}

export default Options ;