import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Create from './pages/Create';
import Home from './pages/Home';
import NotFound404 from './pages/NotFound404';
import Update from './pages/Update';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/create' element={<Create/>} />
            <Route path='/update/:id' element={<Update/>} />
            <Route path='/*' element={<NotFound404/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
