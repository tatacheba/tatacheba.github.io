import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Home from './Home';
import Category from './Category';
import CategoryDescription from './CategoryDescription';
import Footer from './Footer';
import About from './About';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/header" element={< Header />}/>
                <Route exact path="/" element={< Home />}/>
                <Route path="/about" element={< About />}/>
                <Route exact path="/category" element={< Category />}/>
                <Route path="/categorydescription/:name" element={< CategoryDescription />}/>
                <Route path="/footer" element={< Footer />}/>
                {/* <Route path="*" element={< Error />}/> */}
            </Routes>
        </Router>
    );
}

export default App;
