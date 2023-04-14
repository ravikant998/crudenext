
import validateInfo from '@/validation'
import UseForm from '@/Hooks/useForm'
const Registrationform = () => {
   
 const{handleSubmit,handleChange,inputBlurhandler,errors,inputData}=UseForm(validateInfo)

    return (
        <> 
            <form onSubmit={handleSubmit}>
                {/* <label>First Name</label> */}
                <input
                    type='text'
                    name='firstname'
                    value={inputData.firstname}
                    onChange={handleChange}
                    onBlur={inputBlurhandler}
                    placeholder='Enter your firstname' />
                {errors.firstname && <p style={{color:'red'}}>{errors.firstname}</p>}
                {/* <label>Last Name</label> */}
                <input
                    type='text'
                    name='lastname'
                    value={inputData.lastname}
                    onChange={handleChange}
                    placeholder='Enter your lastname' />
                       {errors.lastname && <p style={{color:'red'}}>{errors.lastname}</p>}
                {/* <label>Email</label> */}
                <input
                    type='text'
                    name='email'
                    value={inputData.email}
                    onChange={handleChange}
                    placeholder='Enter your email' />
                      {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
                {/* <label>Phone</label> */}
                <input
                    type='number'
                    name='phone'
                    value={inputData.phone}
                    onChange={handleChange}
                    placeholder='Enter your phone' />
                       {errors.phone && <p style={{color:'red'}}>{errors.phone}</p>}
                {/* <label>Password</label> */}
                <input
                    type='text'
                    name='password'
                    value={inputData.password}
                    onChange={handleChange}
                    placeholder='Enter your password' />
                       {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
                {/* <label>Confirm password</label>  */}
                <input
                    type='text'
                    name='confirmpassword'
                    value={inputData.confirmpassword}
                    onChange={handleChange}
                    placeholder='Enter your confirm password' />
                       {errors.confirmpassword && <p style={{color:'red'}}>{errors.confirmpassword}</p>}
                       
                <button>submit</button>
            </form>
        </>
    )
}

export default Registrationform