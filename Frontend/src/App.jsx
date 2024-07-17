import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Layout from './components/Layout/Index'
import Home from './components/Home/Index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
           <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
