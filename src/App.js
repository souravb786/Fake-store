import './styles/App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect} from "react-router-dom";
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import Checkout from './Pages/Checkout';
import Header from './components/Header';
import Product from './Pages/Product';
import { useSelector } from "react-redux";
import { selectedItem} from './slices/productSlice';
function App() {
  const item = useSelector(selectedItem);
  return (
    <Router>
      <Switch> 
        <Route exact path="/" component={Home}/>
        <Route exact path="/Home/:productId">
          <Product id={item.id}></Product>
        </Route>
        <Route exact path="/404" component={ErrorPage}/>
        <Route exact path="/checkout" component={Checkout} />
        <Redirect to="/404"/>
      </Switch>
    </Router>
    // <div className="app">
    //   <Home />
    // </div>
  );
}

export default App;
