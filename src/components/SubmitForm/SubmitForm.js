import React from 'react'

const SubmitForm = () => {
    const Navigate = useNavigate()
    const [action,setAction] = useState("Login");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleApi =()=>{
    
        axios.post('https://reqres.in/api/login',{
            email:email,
            password: password
        }).then(result=>{
            console.log("hi")
            console.log(result.data)
            // const user = jwtDecode(result.data.token)
            // console.log("this is token")
            localStorage.setItem('token',result.data.token)
            // if(user == "organizer"){
              Navigate('/eventOrg')
            // }else{
            //   Navigate('/EventAtt')
            // }
           
        }).catch(error =>{

            alert('service error')
            console.log(error)
        })
      }
  return (
   <>
   <div className="logincontainer">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="signinputs">
        {action==="Login"?<div></div>:<div className="input">
          <img src={User_icon} alt="" />
          <input type="text" placeholder="Name" />
        </div>}
        <div className="input">
          <img src={User_icon} alt="" />
          <label for="usertype">Choose a User       : </label>
          <select id="usertype" name="usertype">
            <option value="organizer">organizer</option>
            <option value="Attendee">Attendee</option>
          </select>
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          {/* <input type="email" placeholder="Email" /> */}
          <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          {/* <input type="password" placeholder="Password" /> */}
          <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">
        Lost Password? <span>Click here</span>
      </div>}
      
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"}> Submit</div>
        <div className={action==="Sign Up"?"submit gray":"submit"}  onClick={handleApi}> Login</div>
      </div>
    </div>
   </>
  )
}

export default SubmitForm
