// eslint-disable-next-line
import { Route, BrowserRouter as BrowserRouter } from "react-router-dom";
import Dashboard from './components/Dashboard/pages/Dashboard';

function Routes() {
  return (
    <BrowserRouter basename="/">
     
      <Route path="/" exact component={Dashboard}/>
      



 
    </BrowserRouter>
  );
}

export default Routes;
