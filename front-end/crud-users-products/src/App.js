import GlobalStyle from "./styles/global";
import Users from "./pages/Users.js";
import Orders from "./pages/Orders.js";
import Home from "./pages/Home.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/users" element={<Users/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/orders/:id" element={<Orders/>} />
        </Routes>
    </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
