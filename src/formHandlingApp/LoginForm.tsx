import React, { useState } from 'react';

function LoginForm() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [data, setData] = useState<(string | undefined)[]>([]);
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const handleValidation = () => {
    const RegxName = /^[A-Za-z\s]{2,50}$/;
    const RegxEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const RegxPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const tempErrors: { name?: string; email?: string; password?: string } = {};

    if (!name) tempErrors.name = 'Name is required';
    else if (!RegxName.test(name)) tempErrors.name = 'Name should be 2-50 letters only';

    if (!email) tempErrors.email = 'Email is required';
    else if (!RegxEmail.test(email)) tempErrors.email = 'Invalid email format';

    if (!password) tempErrors.password = 'Password is required';
    else if (!RegxPassword.test(password)) tempErrors.password = 'Password must be 8+ chars with uppercase, lowercase, number & special char';

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (handleValidation()) {
      setData([...data, name, email, password]);
      setName('');
      setEmail('');
      setPassword('');
      setErrors({});
    }
    setIsLogin(true)
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '50px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div>
          <label>Name:</label>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name' />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        <div>
          <label>Password:</label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>

        <button onClick={handleSubmit}>{!isLogin ? 'Login' : 'Logout'}</button>
      </div>

      {data.length > 0 && (
        <ul>
          {data.map((item, id) => (
            <li key={id}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LoginForm;
