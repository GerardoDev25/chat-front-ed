import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../auth/AuthContext';

import Swal from 'sweetalert2';

const RegisterPage = () => {
  const [form, setForm] = useState({
    email: 'test@test.test',
    password: '123456',
    name: 'jonh',
  });

  const { name, email, password } = form;

  const { register } = useContext(AuthContext);

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ok = await register(name, email, password);
    if (!ok) {
      Swal.fire('Error', 'error al crear el ususario', 'error');
    }
  };

  const todoOk = () => {
    return email && password && name;
  };

  return (
    <form className="login100-form validate-form flex-sb flex-w" onSubmit={handleSubmit}>
      <span className="login100-form-title mb-3"> Chat - Registro </span>

      <div className="wrap-input100 validate-input mb-3">
        <input value={name} onChange={handleChange} className="input100" type="text" name="name" placeholder="Nombre" />
        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 validate-input mb-3">
        <input value={email} onChange={handleChange} className="input100" type="email" name="email" placeholder="Email" />
        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 validate-input mb-3">
        <input
          value={password}
          onChange={handleChange}
          className="input100"
          type="password"
          name="password"
          placeholder="Password"
        />
        <span className="focus-input100"></span>
      </div>

      <div className="row mb-3">
        <div className="col text-right">
          <Link to="/auth/login" className="txt1">
            Ya tienes cuenta?
          </Link>
        </div>
      </div>

      <div className="container-login100-form-btn m-t-17">
        <button type="submit" disabled={!todoOk()} className="login100-form-btn">
          Crear cuenta
        </button>
      </div>
    </form>
  );
};

export default RegisterPage;
