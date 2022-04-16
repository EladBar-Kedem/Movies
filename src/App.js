import './App.css';
import { store } from './store'
import { Provider } from 'react-redux'
import {  BrowserRouter as Router,  Route, Routes} from "react-router-dom"; 
import Movies from './components/Movies';
import Header from './components/Header';
import MovieDesc from './components/MovieDesc'

function App() {
  return (
    <Provider store={store}>
      <Router>
      <Header/>
        <Routes>
          <Route exact path='/' element={<Movies/>}/>
          <Route exact path='/movie:id' element={<MovieDesc/>}/>
        </Routes>
      </Router>
    </Provider>
    
  );
}

export default App;
