import './App.css';
import { Button} from 'reactstrap';
import { ToastContainer,toast } from 'react-toastify';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import Home from './components/certRequestForm/Home'
import Menu from './components/certRequestForm/Menu';
import Doc from './components/certRequestForm/Doc';
import Contacts from './components/certRequestForm/contacts';
import Settings from './components/certRequestForm/Settings';
import More from './components/certRequestForm/more';
import button from './components/certRequestForm/button/button';
// import Header from './components/certRequestForm/Header';

function App() {
  const btnHandle=()=>{
     toast("Sorry!,This page is under maintenance.");
  };

  return (
    <div style={{color: 'White'}}>
      {/* <Header/> */}
      <Router>
      <table>
        <tr>
          <td>
            <Menu/>
          </td>
          <td width={1200}>
            <div className="App">
              <ToastContainer/>
                <img src="/main-logo.jpg" alt="" width={165} height={100}/>
              <h1>Navi-Pin</h1>
                <Button color="primary" outline onClick={btnHandle}>About Us</Button>
              <p>
                <Home/>
                <button label="click me please"></button>
              </p>
            </div>
          </td>
        </tr>
      </table>
     </Router>
     <div>
      <Router>
        <Routes>
              <Route path="/" Component={Home} exact />
              <Route path="/get-doc" Component={Doc} exact />
              <Route path="/get-contacts" Component={Contacts} exact />
              <Route path="/get-settings" Component={Settings} exact />
              <Route path="/get-more" Component={More} exact />
        </Routes>
      </Router>
     </div>
    </div>
  );
}

export default App;
