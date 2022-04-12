import Home from './pages/home/Home/Home';
import NotFound from './pages/notFound/NotFound';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
