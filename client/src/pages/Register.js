import { useState,useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register, reset } from '../services/auth/authSlice'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'



const Register = () =>{
    
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: ''
      })
    
      const { fullname, email, password } = formData

      const navigate = useNavigate()
      const dispatch = useDispatch()
    
      const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
      )
    
      useEffect(() => {
        if (isError) {
          toast.error(message)
        }
    
        if (isSuccess || user) {
          navigate('/')
        }
    
        dispatch(reset())
      }, [user, isError, isSuccess, message, navigate, dispatch])

      const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }

      const onSubmit = (e) =>{
          e.preventDefault()
          if (password == '') {
            toast.error('Passwords is required')
          } else {
            const userData = {
              fullname,
              email,
              password,
            }
      
            dispatch(register(userData))
            navigate('/')
          }
      }
      if (isLoading) {
        return <Spinner />
      }
    

    return(
        <form onSubmit={onSubmit}>
           <div className="m-8 bg-gray"> 
        <div className="lg:flex flex-row-reverse">
            <div className="lg:w-1/2 xl:max-w-screen-sm">
                <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                    <h2 className="text-center text-4xl text-black font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold">Register</h2>
                    <div className="mt-12">
                        
                            <div>
                                <div className="text-sm font-bold text-gray-700 tracking-wide">Fullname</div>
                                <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text" placeholder="Adnane elgotabi" 
                                id='fullname'
                                name='fullname'
                                value={fullname}
                                onChange={onChange}
                                />
                               
                            </div>
                            <div className="mt-8">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">Email </div>
                                <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="email" placeholder="adnanelgotabi@gmail.com"  
                                 id='email'
                                 name='email'
                                 value={email}
                                 onChange={onChange}
                                />
                              
                            </div>
                            <div className="mt-8">
                                <div className="flex justify-between items-center">
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                                        password
                                    </div>
                                    
                                </div>
                                <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="password" placeholder="Enter your password"  
                                   id='password'
                                   name='password'
                                   value={password}
                                   onChange={onChange}
                                />
                               
                            </div>
                            <div className="mt-10">
                                <button className="bg-cyan-600 text-gray-100 p-4 w-full rounded tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-cyan-600
                                shadow-lg" type="submit">
                                    Register
                                </button>
                            </div>
                       
                        <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                            you have an account ?  <a className="cursor-pointer text-cyan-600 hover:text-indigo-800">Login</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen">
                <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
                    <img src="../assets/staticimg/20944201.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
   </form>
    )
}

export default Register;