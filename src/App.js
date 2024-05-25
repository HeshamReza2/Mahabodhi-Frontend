import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navebar from './Navebar';
import Home from './Components/Home';
import AdminDashboard from './Components/Admin/AdminDashboard';
import StudentLogin from './Components/Student/StudentLogin';
import StudentDashboard from './Components/Student/StudentDashboard';
import PersonalDetails from './Components/Student/Forms/PersonalDetails';
import ContactDetails from './Components/Student/Forms/ContactDetails';
import PreviousExamDetails from './Components/Student/Forms/PreviousExamDetails';
import CollegeAllottedDetails from './Components/Student/Forms/CollegeAllottedDetails';
import SubjectSelection from './Components/Student/Forms/SubjectSelection';
import Attachments from './Components/Student/Forms/Attachments';
import Preview from './Components/Student/Forms/Preview';
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
              <Route path='/application-form/personal-details' element={<PersonalDetails />} />
              <Route path='/application-form/contact-details' element={<ContactDetails />} />
              <Route path='/application-form/previous-exam-details' element={<PreviousExamDetails />} />
              <Route path='/application-form/college-allotted-details' element={<CollegeAllottedDetails />} />
              <Route path='/application-form/subject-selection' element={<SubjectSelection />} />
              <Route path='/application-form/attachments' element={<Attachments />} />
              <Route path='/application-form/preview' element={<Preview />} />
              <Route path='/dashboard' element={<StudentDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
