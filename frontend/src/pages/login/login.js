import './login.css';
import bitlogo from '../assets/img/bitlogo.png'




function Login() {




    return (
        <div className="login">
            <div className="loginbox">
                <div className="loginbox-head">
                    <h1>Login</h1>
                </div>
                <div className="loginbox-body">
                    <div className="bitimg">
                        <img src={bitlogo} alt="" />
                    </div>
                    <div className="logininput">
                        <div className="inputusername">
                            <p>Username</p>
                            <input type="text" name="username" id="username" placeholder='Username' />
                        </div>
                        <div className="inputpassword">
                            <p>Password</p>
                            <input type="password" name="password" id="password" placeholder='Password' />
                        </div>
                    </div>
                </div>
                <div className="loginbox-bottom">
                    <div className="loginbtn">
                        <p>LOGIN</p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Login;