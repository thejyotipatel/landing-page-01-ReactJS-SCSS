import FormInput from './FormInput'

const EmailSignupContainer = () => {
  return (
    <>
      <section className='container'>
        <div className='email-center'>
          <h1>Sign up and get exclusive special deals</h1>
          <div className='input-control'>
            <FormInput type='email' name='email' />
            <button className='btn'>Sign Up</button>
          </div>
        </div>
      </section>
    </>
  )
}
export default EmailSignupContainer
