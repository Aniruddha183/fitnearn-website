import React from 'react'
import "./InputBox.css"
const InputBox = (props) => {
  return (
    <div className='input-component'>
        <span>{props.title}</span>
            <input type={props.type} name="" id="" placeholder={props.placeholder} value={props.value} onChange ={props.onChange}  />
    </div>
  )
}

export default InputBox