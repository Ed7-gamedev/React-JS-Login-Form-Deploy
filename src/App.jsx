import { useState } from 'react';
import './App.css'
import img1 from './assets/img.png'


function App () {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");


return (
  <>
  <div className="container">
    <div className="container-login">
      <div className="warper-login">
        <form  className="login-form">
          <span className="login-form-title">Bem Vindo</span>
          <span className="login-form-title">
            <img src={img1} alt="img" />
          </span>

          <div className="warp-input">
            <input className="input"  type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            />

            <span className="focus-input" data-placeholder= "Email">

            </span>
          </div>

          <div className="warp-input">
            <input className='input'
            type="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            
            
            
            />

            <span className="focus-input" data-placeholder= "Password">

            </span>
          </div>

          <div className="container-login-form-btn">
            <button className="login-form-btn">
              Login
            </button>
          </div>


          <div className="text-center">
            <span className="txt1">Não possui conta?</span>
            <a className='txt2' href = "#">Criar conta.</a>
          </div>




        </form>
      </div>
    </div>
  </div>

  </>

);

}

export default App
