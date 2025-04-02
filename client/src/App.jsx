import SignUp from './Pages/SignUp/SignUp'
import SignIn from './Pages/SignIn/SignIn'
import EmailVerification from './Pages/EmailVerification/EmailVerification'
import LandingPage from './Pages/LandingPage/LandingPage';
import Feed from './Pages/Feed/Feed';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>

<Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/feed" element = {<Feed/>}/>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/email-verification" element={<EmailVerification />} />

        </Routes>
         
    </>
  )
}

export default App
