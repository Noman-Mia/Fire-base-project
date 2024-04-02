import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [heroRegister, setHeroRegister] = useState("");
  const [succes, setSucces] = useState("");
  const emailRef = useRef();

  const handlelogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    //reset eror or succes
    setHeroRegister("");
    setSucces("");

    //add validation
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        if(result.user.emailVerified){
            setSucces("user log in seccesfully");
        }else{
            alert('please varify email')
        }
      })
      .catch((error) => {
        console.error(error);
        setHeroRegister(error.message);
      });
  };
   const handleForgetPassword = () =>{
    const email = emailRef.current.value;
    if(!email){
        console.log('please provide an email', emailRef.current.value);
        return;
    }else if(/^\+?[0-9]{1,3}?[- .]?\(?[0-9]{3}\)?[- .]?[0-9]{3}[- .]?[0-9]{4}$/.test(email)
    ){
        console.log("please write a valid email");
        return
    }
     //send validation email
     sendPasswordResetEmail(auth,email)
     .then(() => {
       alert("please check your email");
     })
     .catch(error =>{
        console.error(error);
     })
   }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handlelogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            {heroRegister && (
              <p className="text-3xl text-red-500">{heroRegister}</p>
            )}
            {succes && <p className="text-3xl text-green-500">{succes}</p>}
            <p>
              New to this website? please{" "}
              <Link to="/heroRegister">register</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
