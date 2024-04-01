
const Register = () => {
 const handleRegister = e =>{
    e.preventDefault ();
    console.log("from submited");
 }

  return (
    <div>
      <div className="bg-slate-400 mt-12">
        <h2 className="text-2xl mb-5 text-white">Register</h2>
        <form onSubmit={handleRegister}>
          <input
            className="w-3/4 mb-5 py-2 px-4"
            type="email"
            name="Email"
            placeholder="Email Address"
            id=""
          />
          <br />
          <input
            className="w-3/4 mb-5 py-2 px-4"
            type="password"
            name="Password"
            placeholder="Password"
            id=""
          />
          <br />
          <input className="w-3/4 mb-5 btn btn-primary" type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
};

export default Register;
