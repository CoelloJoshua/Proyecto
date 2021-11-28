import { useState } from 'react';
import axios from 'axios';

const Register = props => {
  // state
  const [user, setUser] = useState({
    username: '', password: '', firstName: '', lastName: ''
  });
  const { username, password, firstName, lastName } = user;
  // handlers
  const handleSubmit = e => {
    e.preventDefault();
    // API call
    axios.post('/api/users', user)
      .then(res => {
        // blank form
        setUser({
          username: '', password: '', firstName: '', lastName: ''
        });
      });
  };
  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  // render
  return (
    <div className="Register">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <label>password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <label>Name</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
        />
        <label>Lastname</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;