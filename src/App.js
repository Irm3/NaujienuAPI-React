import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Person from './components/Person';
import Hello from './components/Hello';
import Weather from './components/Weather';
import Footer from './components/Footer';
import News from './components/News';
import 'bulma/css/bulma.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return ( 
        <Router>
            <NavBar />
            <Routes>
                <Route path='/News' exact element={<News />} />
                <Route path='/Weather' exact element={<Weather />} />
                <Route path='/Person' exact element={<Person />} />
                <Route path='/' exact element={<Hello />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;