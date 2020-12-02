import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Globalstyle } from './style';
import { IconfontStyle } from './statics/iconfont/iconfont'

const entry = (
  <Fragment>
    <IconfontStyle />
    <Globalstyle />
    <App />
  </Fragment>
)

ReactDOM.render(
  entry,
  document.getElementById('root')
);
