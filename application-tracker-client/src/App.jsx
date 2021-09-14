import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'startbootstrap-sb-admin-2/css/sb-admin-2.min.css'
import Navbar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import ApplicationsCreateButton from './components/Applications/ApplicationsCreateButton';
import { getRequest } from './apiRequests';

function App() {
  const [currentUser, setCurrentUser] = useState()
  useEffect(() => {
    getRequest('/current').then(({user}) => setCurrentUser(user))
  }, [])

  return (
    <div className="App">
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      {currentUser && <ApplicationsCreateButton currentUser={currentUser} setCurrentUser={setCurrentUser} /> }
    </div>
  );
}

export default App;
