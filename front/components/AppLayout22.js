import React, {useCallback} from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';
import { LOAD_USER_REQUEST } from '../reducers/user';
import LoginForm2 from '../containers/LoginForm2';
import Signup from '../pages/signup';
// import UserProfile from '../containers/UserProfile';

const AppLayout = ({ children }) => {
  // const { me } = useSelector(state => state.user);

  // const onSearch = (value) => {
  //   Router.push({ pathname: '/hashtag', query: { tag: value } }, `/hashtag/${value}`);
  // };

  const { test } = useSelector(state => state.user);

  const dispatch = useDispatch();

  const onToggleUser = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: LOAD_USER_REQUEST,
    });
  })

  return (
    <div>
      <ul>
        <li>
          <Link href="/"><a>home</a></Link>
        </li>
        <li>
          <Link href="/dashboard"><a>dashboard</a></Link>
        </li>
      </ul>
      <div>menu</div>
      <div>sss</div>
      <button onClick={onToggleUser}>click</button>
      <div>{ test.password ? test.password : null}</div>
      <br />
      <br />
      <br />
      <br />
      <LoginForm2 />
      <Signup />
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
