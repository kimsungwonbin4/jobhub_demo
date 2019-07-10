import React from 'react';
import Helmet from 'react-helmet';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import App, { Container } from 'next/app';

import GlobalStyles from '../components/GlobalStyles';


import AppLayout from '../components/AppLayout';

import reducer from '../reducers';
import rootSaga from '../sagas';

const Jobhub = ({ Component, store, pageProps }) => {
  return (
    <Container>
      <Provider store={store}>
        <Helmet
          title="jobhub"
          htmlAttributes={{ lang: 'jp' }}
          meta={[{
            charset: 'UTF-8',
          }, {
            name: 'viewport',
            content: 'width=device-width,user-scalable=no,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0',
          }, {
            'http-equiv': 'X-UA-Compatible', content: 'IE=edge',
          }, {
            name: 'description', content: 'jobhub',
          }, {
            name: 'og:title', content: 'jobhub',
          }, {
            name: 'og:description', content: 'jobhub',
          }, {
            property: 'og:type', content: 'website',
          }]}
          link={[
            {
              rel: 'shortcut icon', href: '/favicon.ico',
            },
            {
              rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:700',
            },
          ]}
        />
        <GlobalStyles />
        
          <Component {...pageProps} />
        
      </Provider>
    </Container>
  );
};

Jobhub.getInitialProps = async (context) => {
  const { ctx, Component } = context;
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx) || {};
  }
  
  return { pageProps };
};

const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : compose(
      applyMiddleware(...middlewares),
      !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    );
  const store = createStore(reducer, initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export default withRedux(configureStore)(Jobhub);