import React, { useState, useCallback } from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';

const Signup = () => {
  const [id, setId] = useState('');
  const [nick, setNick] = useState('');
  const [password, setPassword] = useState('');
  const [passwordcheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false); 
  const [termError, setTermError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if(password !== passwordcheck){
      return setPasswordError(true);
    } 
    if(!term) {
      return setTermError(true);
    }
    console.log({
      id,
      nick,
      password,
      passwordcheck,
      term
    });
  };

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNick(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangePasswordcheck = (e) => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  };
  const onChangeTerm = (e) => {
    setTernError(false);
    setTerm(e.target.checked);
  };
/*custom hooks

  const useInput = (initValue = null) => {
    const [value, setter] = useState(initValue);
    const handler = (e) => {
      setter(e.target.value)
    };
    return [value, handler];
  };
  const [id, onChangeId] = useInput('');
*/


  return (
    <> 
      <Head>
        <title>NodeBird</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.css"/>
      </Head>

      <AppLayout>
        <Form onSubmit={onSubmit} style={{ padding: 10 }}>
          <div>
            <label htmlFor="user-id">ID</label>
            <br/>
            <Input name="user-id" value={id} required onChange={onChangeId}/>
          </div>
          <div>
            <label htmlFor="user-nickname">NickName</label>
            <br/>
            <Input name="user-nickname" value={nick} required onChange={onChangeNickname}/>
          </div>
          <div>
          <label htmlFor="user-password">PassWord</label>
            <br/>
            <Input name="user-password" value={password} required onChange={onChangePassword}/>
          </div>
          <div>
          <label htmlFor="user-password-check">PassWordCheck</label>
            <br/>
            <Input name="user-password-check" value={passwordcheck} required onChange={onChangePasswordcheck}/>
            {passwordError && <div style={{ color: 'red' }}>wrong password</div>}
          </div>
          <div>
            <Checkbox name="user-term" value={term} onChange={onChangeTerm}>are u agree?</Checkbox>
            {termError && <div style={{ color: 'red'}}>cleck checkbox</div>}
          </div>
          <div>
            <Button type="primary" htmlType="submit">Signup</Button>
          </div>

        </Form>
      </AppLayout>
    </>
  );
};

export default Signup
