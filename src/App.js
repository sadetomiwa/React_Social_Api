import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './views/Home';
import Register from './views/Register';
import Login from './views/Login';
import SinglePost from './views/SinglePost';
import CreatePost from './views/CreatePost';
import AlertMessage from './components/AlertMessage';



function App() {
    const now = new Date();

    const [loggedIn, setLoggedIn] = useState((localStorage.getItem('token') && new Date(localStorage.getItem('tokenExp')) > now) || false);
    const [message, setMessage] = useState(null);
    const [category, setCategory] = useState(null);

    function flashMessage(message, category){
        setMessage(message);
        setCategory(category);
    };

    function logUserOut(){
        setLoggedIn(false);
        localStorage.removeItem('token');
        localStorage.removeItem('tokenExp');
        flashMessage('You have logged out', 'primary')
    };


    return (
      <div className="App">
        <Navbar loggedIn={loggedIn} logUserOut={logUserOut}/>
        <div className="container">
        {message ? <AlertMessage message={message} category={category} flashMessage={flashMessage} /> : null}
        
            <Routes>

              <Route path="/" element={<Home/>} />
              <Route path="/register" element={<Register flashMessage={flashMessage} />} />
              <Route path='/login' element={<Login flashMessage={flashMessage} logUserIn={setLoggedIn} />} />
              <Route path='/create' element={<CreatePost flashMessage={flashMessage} loggedIn={loggedIn} />} />
              <Route path="/posts/:id" element={<SinglePost flashMessage={flashMessage} />} />

            </Routes>

        </div>
      </div>
    );
}

export default App;
