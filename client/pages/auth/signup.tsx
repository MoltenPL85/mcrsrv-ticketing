import { FormEvent, useState } from 'react';
import useRequest from '../../hooks/use-request';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: {
      email,
      password,
    },
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    doRequest();
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <div className="mb-3">
        <label htmlFor="email">Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          className="form-control"
          id="email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
          id="password"
        />
      </div>
      {errors}
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
};

export default Signup;
