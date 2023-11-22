import './App.css';
import { Button, Col, Form, InputGroup, Nav, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sv from './comp/Sv';
import Partie2 from './comp/Partie2';

function App() {
  return (
    <div className="App">
      <div className="main-container">
      <div class="row">
<div class="col-md-8"> <Sv/></div>
<div class="col-6 col-md-4"> <Partie2/> </div>
</div>
      </div>
    </div>
  );
}

export default App;
