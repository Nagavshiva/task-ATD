import  { useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const generateAccessToken = () => {
  // Generate a random access token (dummy implementation)
  const accessToken = Math.random().toString(36).substring(2);
  return accessToken;
};

const generateCompanyId = () => {
  // Generate a random company ID (dummy implementation)
  const companyId = Math.floor(Math.random() * 1000) + 1;
  return companyId;
};

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Simulate successful login
      console.log('Login successful');

      // Generate a dummy access token
      const dummyAccessToken = generateAccessToken();
      console.log('Access token:', dummyAccessToken);

      // Generate a dummy company ID
      const dummyCompanyId = generateCompanyId();
      console.log('Company ID:', dummyCompanyId);

      const response = await axios.post(
        'https://648d83852de8d0ea11e7ec7e.mockapi.io/users',
        {
          username,
          email,
          password,
          access_Token: dummyAccessToken,
          company_Id: dummyCompanyId,
        }
      );

      console.log('Login successful:', response.data);
      // Perform any additional actions upon successful login
      navigate ('/main')
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error
    }
  };

  return (

     <div className='login-container'>
     <h1 className='login-title'>Login Page</h1>
      <form onSubmit={handleLogin}>
        <label>userName:</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>email:</label>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>password:</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
     
      <button type="submit">Login</button>
      
      </form>
     </div>
   
  );
};

export default Login;

