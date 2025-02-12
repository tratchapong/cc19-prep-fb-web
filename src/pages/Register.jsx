import axios from "axios";
import {useState} from "react";
import { toast } from "react-toastify"

export default function Register() {
  const [input, setInput] = useState({
		firstName: '',
		lastName: '',
		identity: '',
		password: '',
		confirmPassword: '',
	})

  const hdlChange = e => {
		setInput(prv => ({ ...prv, [e.target.name]: e.target.value }))
	}

  const hdlRegister = async e => {
		try{
			e.preventDefault()
			//validation
			const rs = await axios.post('http://localhost:8899/auth/register', input)
			console.log(rs.data)
			setInput({
				firstName: '',
				lastName: '',
				identity: '',
				password: '',
				confirmPassword: '',
			})
			e.target.closest('dialog').close()
			toast.success('Register ok')
		}catch(err){
			const errMsg = err.response?.data?.error || err.message
			console.log(errMsg)	
			toast.error(errMsg)	
		}
	}

  return (
    <>
    <div className="text-3xl text-center opacity-70">Create a new account</div>
    <div className="divider my-1 opacity-60"></div>
    <form onSubmit={hdlRegister} className="flex flex-col gap-5 p-4 pt-3" >
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="First name"
          className="input input-bordered w-full"
          name='firstName'
          value={input.firstName}
					onChange={hdlChange}
        />
        <input
          type="text"
          placeholder="Surname"
          className="input input-bordered w-full"
          name='lastName'
          value={input.lastName}
					onChange={hdlChange}
        />
      </div>
      <input
        type="text"
        placeholder="Email or phone number"
        className="input input-bordered w-full"
        name='identity'
				value={input.identity}
				onChange={hdlChange}
      />
      <input
        type="password"
        placeholder="New password"
        className="input input-bordered w-full"
				name='password'
				value={input.password}
				onChange={hdlChange}
      />
      <input
        type="password"
        placeholder="Confirm password"
        className="input input-bordered w-full"
				name='confirmPassword'
				value={input.confirmPassword}
				onChange={hdlChange}
      />
      <button className="btn btn-secondary text-xl text-white">Sign up</button>
    </form>
    </>
  );
}
