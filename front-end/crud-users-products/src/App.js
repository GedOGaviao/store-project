import GlobalStyle from "./styles/global";
import Users from "./components/users/Users.js";
import Home from "./components/Home.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/users" element={<Users/>}/>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
    </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
