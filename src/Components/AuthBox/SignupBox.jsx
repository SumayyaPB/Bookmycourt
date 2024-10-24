import "./LogSign.css";

// eslint-disable-next-line react/prop-types
const SignupBox = ({setBoxType}) => {
  return (
    <div>
      <div>
        <input type="text" placeholder="First Name" className="input-field" />
        <input type="text" placeholder="Last Name" className="input-field" />
        <input type="email" placeholder="Email" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <input type="button" value="Log In" className="submit-btn" />
        <p>Dont have an account <i onClick={()=>setBoxType('signup')}>sign up here</i></p>
      </div>
    </div>
  );
};

export default SignupBox;
