import { Routes, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import Cuenta from './Components/Cuenta/Cuenta.jsx';
import Favorites from './Components/Favorite/Favorites.jsx'
import ShoppingCart from './Components/ShoppingCart/ShoppingCart.jsx'
import FormContact from "./Components/Form/FormContact";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/cuenta" element={<Cuenta/>}/>
      <Route exact path="/favorites" element={<Favorites/>}/>
      <Route exact path="/shoppingCart" element={<ShoppingCart/>}/>
      <Route exact path="/contact" element={<FormContact/>}/>

    </Routes>
  );
}

export default App;