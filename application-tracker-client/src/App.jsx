import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'startbootstrap-sb-admin-2/css/sb-admin-2.min.css'
import Navbar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import { getRequest } from './apiRequests';
import Applications from './components/Applications/Applications';

function App() {
  const [currentUser, setCurrentUser] = useState()
  useEffect(() => {
    getRequest('/current').then(({user}) => setCurrentUser(user))
  }, [])

  return (
    <div className="App">
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      {currentUser && <Applications currentUser={currentUser} setCurrentUser={setCurrentUser} /> }
    </div>
  );
}

export default App;
