import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import EditProfile from './components/EditProfile/EditProfile';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import ProfileFeed from './pages/ProfileFeed/ProfileFeed';
import Register from './pages/Register/Register';
import Layout from './pages/Layout/Layout';
import Message from './pages/Message/Message';
import NoPage from './pages/NoPage/NoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='edit' element={<EditProfile />} />
          <Route path='feed' element={<ProfileFeed />} />
          <Route path='profile/' element={<Profile />} />
          <Route path='message' element={<Message />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
