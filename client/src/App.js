import Home from "./pages/Home";
import Login from "./pages/Login";
import Connect from "./pages/Connect-wallet" ;
import About from "./pages/About" ;
import Fun from "./pages/Fun" ;
import Part from "./pages/Partner-home" ;
import User from "./pages/User-dashboard" ;
import Catalog from "./pages/Catalog" ;
import Register from "./pages/Register" ;
import {Routes,Route} from  'react-router-dom' ;

function App() {
  return (
    <div className="App">
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/connect" element={<Connect/>} />
  <Route path="/about" element={<About/>} />
<Route path="/user" element={<User/>} /> 
<Route path="/catalog" element={<Catalog/>} /> 
<Route path="/register" element={<Register/>} />
<Route path="/user" element={<User/>} />
</Routes>
  </div>
    
  );
}

export default App;
