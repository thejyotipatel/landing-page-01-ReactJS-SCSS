const FormInput = ({ label, name, type, defaultValue, placeholder, icon }) => {
  return (
    <div className='form-control  '>
      {label && (
        <label htmlFor={name} className='label'>
          {label}
        </label>
      )}
      {icon && (
        <div className='icon-label'>
          <span className='icon'>{icon}</span>
        </div>
      )}

      <input
        type={type}
        placeholder={placeholder}
        className='input'
        name={name}
        defaultValue={defaultValue}
      />
    </div>
  )
}
export default FormInput
