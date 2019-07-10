import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

import { LOG_IN_REQUEST } from '../reducers/user';

export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e) => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};


const LoginForm2 = () => {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const dispatch = useDispatch();

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        userId: id,
        password
      }
    })
  }, [id, password]);


  return (
    <form onSubmit={onSubmitForm}>
      <div>
        <label>아이디</label>
        <input name="usre-id" value={id} onChange={onChangeId} />
      </div>
      <div>
        <label>비밀번호</label>
        <input name="user-password" value={password} onChange={onChangePassword} type="password"/>
      </div>
      <div>
        <button type="submit">로그인</button>
      </div>
      <br/>
      <br/>
      <br/>
      <div>
      <Link href="/signup"><a>회원가입</a></Link>
      </div>
    </form>
  )
}

export default LoginForm2;