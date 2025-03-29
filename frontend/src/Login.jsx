import { useState } from "react";

const Login = () => {
  const [emailid, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center my-10">
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email Id</legend>
              <input
                type="text"
                value={emailid}
                className="input"
                placeholder="xyz@mail.com"
                onChange={(e) => setEmailId(e.target.value)}
              />
              {/* <p className="fieldset-label">Optional</p> */}
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                value={password}
                className="input"
                placeholder="******"
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <p className="fieldset-label">Optional</p> */}
            </fieldset>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
