import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";

const Register = () => {
 const handleRegister = e =>{
    e.preventDefault ();
    const email = e.target.email.value;
    const password = e.target.password.value;
   //create user
   createUserWithEmailAndPassword(auth,email,password)
   .then(result => {
    console.log(result.user);
   })
   .catch(error => {
    console.error(error);
   })
 }

  return (
    <div>
      <div className="bg-slate-400 mt-12">
        <h2 className="text-2xl mb-5 text-white">Register</h2>
        <form onSubmit={handleRegister}>
          <input
            className="w-3/4 mb-5 py-2 px-4"
            type="email"
            name="email"
            placeholder="Email Address"
            id="email"
          />
          <br />
          <input
            className="w-3/4 mb-5 py-2 px-4"
            type="password"
            name="password"
            placeholder="Password"
            id="password"
          />
          <br />
          <input className="w-3/4 mb-5 btn btn-primary" type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
};

export default Register;
