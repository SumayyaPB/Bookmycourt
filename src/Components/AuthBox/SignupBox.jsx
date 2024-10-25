import "./LogSign.css";

// eslint-disable-next-line react/prop-types
const SignupBox = ({setBoxType}) => {
  return (
    <div>
      <div className='AuthBox'>
        <input type="text" placeholder="First Name" className="input-field" />
        <input type="text" placeholder="Last Name" className="input-field" />
        <input type="email" placeholder="Email" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <input type="button" value="Sign Up" className="submit-btn" />
        <p>Already have an account <i onClick={()=>setBoxType('login')}>login here</i></p>
        
      </div>
    </div>
  );
};

export default SignupBox;
