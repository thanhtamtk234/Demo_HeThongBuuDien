import React, { Component } from 'react';
import Css from './Css';
import Footer from './Footer';
var DefaultLayout = require('./default');
class Login extends Component {
    // constructor(props) {
    //     super(props);
    //     this.signIn = this.signIn.bind(this);
    //     this.handleUserChange = this.handleUserChange.bind(this);
    //     this.handlePasswordChange = this.handlePasswordChange.bind(this);
    //     this.state = {
    //       User:'',
    //       password:''
    //     };
    //   }
    //   signIn(){
    //     router.post('/signin', {
    //       User: this.state.User,
    //       password: this.state.password
    //     })
    //     .then(function (response) {
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    //   }
    //   handleUserChange(e){
    //     this.setState({User:e.target.value})
    //   }
    //   handlePasswordChange(e){
    //     this.setState({password:e.target.value})
    //   }
    render() {
        return (

            <DefaultLayout title="Trang Đăng nhập">
                <Css />
                <form action="/login" method="POST">
                    <div className="from-login">
                        <div className="imgcontainer">
                            <img src="data:image/png;base64,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" alt="Avatar" className="avatar" />
                        </div>
                        <div className="container login">

                            <label htmlFor="name"><b>Username</b></label>
                            <input
                                type="text"
                                placeholder="Enter Username"
                                name="username" required />
                            <label htmlFor="psw"><b>Password</b></label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                name="password" required /><br />

                            <div>
                                <div className="row group-btn">
                                    <button className="btn btn-success" type="submit">Login</button>
                                    <button className="btn btn-danger "><a href="/">Cancel</a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
                <Footer />
            </DefaultLayout>



        );
    }
}

// ReactDOM.render(
//     <Router history={hashHistory}>
//         <Route component={Signin} path="/"></Route>
//         </Router>,)
export default Login;