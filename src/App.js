import NavBar from './components/NavBar';
import IngredientPage from './IngredientPage'
import HomePage from './HomePage'

import {  BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="ingredients" element={<IngredientPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
