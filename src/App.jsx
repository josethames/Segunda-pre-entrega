import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route} from "react-router-dom";

import './App.css'
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer} from './components/ItemDetailContainer';
import { NavBar } from './components/NavBar';

function App() {
  return(
    
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/Segunda-pre-entrega/" element={<ItemListContainer />}></Route>
      <Route path="/category/:id" element={<ItemListContainer />}></Route>
      <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
    </Routes>
    
    </BrowserRouter>
    
  );
}

export default App
