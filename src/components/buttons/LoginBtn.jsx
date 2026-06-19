import React from 'react'


const bgColors = {
    red: 'bg-red-500'
}
function LoginBtn(props) {
    const {btnText, onClickHandler, bgColor, textColor} = props
  return (
    <div>
        <button
        className={`${bgColor} px-10 py-5  cursor-pointer`}
        onClick={() => onClickHandler()}>
            {btnText}
            </button>
        </div>
  )
}

export default LoginBtn