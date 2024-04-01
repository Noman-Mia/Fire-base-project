import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HeroRegister = () => {
  const [heroRegister, setHeroRegister] = useState("");
  const [succes, setSucces] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const trams = e.target.trams.checked;
    console.log(email, password,trams);
    //reset eror or succes
    setHeroRegister("");
    setSucces("");

    if (password.length < 6) {
      setHeroRegister("password should be 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setHeroRegister("one charecter should be uppercase");
      return;
    } else if(!trams){
        setHeroRegister('please accept trams and condition')
    }

    //create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSucces("succesfully");
      })
      .catch((error) => {
        console.error(error);
        setHeroRegister("already in user");
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered"
                    required
                    name="password"
                  />
                  <span className="absolute top-4 right-8" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  </span>
                </div>
                <div>
                    <input type="checkbox" name="trams" id="trams" />
                    <label htmlFor="trams">Accept your <a href="">terms and condition</a></label>
                </div>
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register Now!</button>
              </div>
            </form>
            {heroRegister && (
              <p className="text-3xl text-red-500">{heroRegister}</p>
            )}
            {succes && <p className="text-3xl text-green-500">{succes}</p>}
            <p>Already have an acount? please <Link to="/login">login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRegister;
