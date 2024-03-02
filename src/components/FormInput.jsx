const FormInput = ({ name, type, icon }) => {
  return (
    <div className='form-control'>
      {icon && (
        <div className='icon-label'>
          <span className='icon'>{icon}</span>
        </div>
      )}

      <input type={type} className='input' name={name} />
    </div>
  )
}
export default FormInput
