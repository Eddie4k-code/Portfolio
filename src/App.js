
import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Nav } from './components/Nav';
import { Homepage } from './pages/Homepage';
import { Projects } from './pages/Projects';

function App() {
    return (
        <BrowserRouter>

            <header>
                <Nav/>
            </header>

            


            <Routes>

                <Route path="/" element={<Homepage />} />
                <Route path="/projects" element={<Projects/>} />
            </Routes>


           
                
                    
                
           

        </BrowserRouter>
  );
}

export default App;
