import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

const LoginPage = () => {
  const [form, setForm] = useState({
    email: 'jonh@doe.test',
    password: '123456',
    rememberme: true,
  });

  const { login } = useContext(AuthContext);

  const { email, password, rememberme } = form;

  useEffect(() => {
    const email = localStorage.getItem('email');
    email && setForm({ ...form, email, rememberme: true });
  }, []);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const toogleCheck = () => {
    setForm({ ...form, rememberme: !rememberme });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    rememberme ? localStorage.setItem('email', email) : localStorage.removeItem('email');

    login(email, password);
  };

  return (
    <form className="login100-form validate-form flex-sb flex-w" onSubmit={handleSubmit}>
      <span className="login100-form-title mb-3"> Chat - Ingreso </span>

      <div className="wrap-input100 validate-input mb-3">
        <input
          //
          className="input100"
          onChange={handleChange}
          value={email}
          type="email"
          name="email"
          placeholder="Email"
        />

        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 validate-input mb-3">
        <input
          //
          className="input100"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          placeholder="Password"
        />
        <span className="focus-input100"></span>
      </div>

      <div className="row mb-3">
        <div className="col" onClick={toogleCheck}>
          <input
            //
            className="input-checkbox100"
            id="ckb1"
            type="checkbox"
            name="rememberme"
            readOnly
            checked={rememberme}
          />
          <label className="label-checkbox100"> Recordarme </label>
        </div>

        <div className="col text-right">
          <Link to="/auth/register" className="txt1">
            Nueva cuenta?
          </Link>
        </div>
      </div>

      <div className="container-login100-form-btn m-t-17">
        <button className="login100-form-btn">Ingresar</button>
      </div>
    </form>
  );
};

export default LoginPage;
