import React from 'react';
import { Route } from 'react-router-dom';
import LoginForm from './login/LoginForm';
import SignupForm from './components/SignupForm';

const App = () => { 
 return(
    <div>
      <div>Hello World</div>
      <LoginForm/>
      <p>No account? <a href="/signup">Signup here.</a> There should be a link to the left...</p>
      <Route path="/signup" component={SignupForm} />
    </div>
  );
};
export default App;
