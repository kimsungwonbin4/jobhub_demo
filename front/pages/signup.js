import react, { useCallback, useState, useEffect } from 'react';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { SIGN_UP_REQUEST } from '../reducers/user';


export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e) => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};


const Signup = () => {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const dispatch = useDispatch();

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    alert('会員加入完了!');
    Router.push('/');
    return dispatch({
      type: SIGN_UP_REQUEST,
      data: {
        userId: id,
        password
      },
    });
  }, [id, password]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>会員加入
        </div>
        <div>
          <label>メールアドレス</label>
          <input name="user-id" value={id} onChange={onChangeId} />
        </div>
        <div>
          <label>パスワード</label>
          <input name="user-password" type="password" value={password} onChange={onChangePassword} />
        </div>
        <div>
          <button type="submit">加入する</button>
        </div>
      </form>
    </>
  )
}

export default Signup;