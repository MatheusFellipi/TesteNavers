import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'

import {Home,Login,ToAdd} from './pages'

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login}/>
      <Route path="/home" exact component={Home}/>
      <Route path="/toadd" exact component={ToAdd}/>
      <Route path="/toedit" exact component={ToAdd}/>
    </BrowserRouter>
  );
}
  