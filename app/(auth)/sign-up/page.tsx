import AuthForm from '@/components/ui/AuthForm'
import React from 'react'

const SignIn = () => {
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthForm type="sign-up"/>
    </section> 
  )
}

export default SignIn