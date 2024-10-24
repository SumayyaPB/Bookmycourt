import './LogSign.css'

// eslint-disable-next-line react/prop-types
const LoginBox = ({setBoxType}) => {
  return (
    <div>
      <div className='AuthBox'>
        <input type="email" placeholder="Email" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <input type="button" value="Log In" className="submit-btn" />
        <p>Already have an account <i onClick={()=>setBoxType('login')}>sign up here</i></p>
      </div>
    </div>
  );
};

export default LoginBox;
