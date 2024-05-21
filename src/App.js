import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navebar from './Navebar';
import Home from './Components/Home';
import AdminDashboard from './Components/Admin/AdminDashboard';
import StudentLogin from './Components/Student/StudentLogin';
import StudentDashboard from './Components/Student/StudentDashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navebar />}>
            <Route index element={<Home />} />

            {/* admin routes */}
              <Route path='/admin/dashboard' element={<AdminDashboard />} />

            {/* student routes */}
              <Route path='/login' element={<StudentLogin />} />
              <Route path='/dashboard' element={<StudentDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
