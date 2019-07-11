import react, { useCallback, useState, useEffect } from 'react';
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
        <div>가입</div>
        <div>
          <label>아이디</label>
          <input name="user-id" value={id} onChange={onChangeId} />
        </div>
        <div>
          <label>패스워드</label>
          <input name="user-password" type="password" value={password} onChange={onChangePassword} />
        </div>
        <div>
          <button type="submit">가입하기</button>
        </div>
      </form>
    </>
  )
}

export default Signup;