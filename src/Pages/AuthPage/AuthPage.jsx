// LoginPage.js
import { useState } from 'react';
import './AuthPage.css';
import LoginBox from '../../Components/AuthBox/LoginBox';
import SignupBox from '../../Components/AuthBox/SignupBox';

const AuthPage = () => {
    const [boxType , setBoxType] = useState('login')
  return (
    <div className="login-page-container">
      <div className="row">
        <div className="col left-img">
          <img
            src="https://img.freepik.com/free-photo/view-soccer-ball-field-grass_23-2150887568.jpg?ga=GA1.1.1950060310.1720193730&semt=ais_hybrid"
            alt="Football"
          />
        </div>
        <div className="col right-content">
          <h2>{boxType==='login'? 'LOGIN PAGE' : 'SIGNUP PAGE'}</h2>
          {boxType==='login'?<LoginBox setBoxType={setBoxType}/>:<SignupBox setBoxType={setBoxType}/>}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
