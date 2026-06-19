// 'use client'

import React from 'react'
import LoginBtn from '@/components/buttons/LoginBtn'


const metadata = {
  title: '|Login',
  description: 'Login here to continue and access your account'
}

function page() {
    function loginClicked (){
        return alert ("I logged In")
    }
    function signupClicked (){
        return alert(' i see my guyyyy')
    }
  return (
    <div>
        <LoginBtn onClickHandler={loginClicked} btnText="Login Here" bgColor={"bg-black"}/>
                <LoginBtn onClickHandler={signupClicked} btnText="Sign up alaye Here" bgColor={"bg-red-300"}/>

    </div>
  )
}

export default page