import SignUp from './Pages/SignUp/SignUp'
import SignIn from './Pages/SignIn/SignIn'
import EmailVerification from './Pages/EmailVerification/EmailVerification'
import LandingPage from './Pages/LandingPage/LandingPage';
import Feed from './Pages/Feed/Feed';


import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Search from './Pages/Search/Search';
import PostRecipe from './Pages/PostRecipe/PostRecipe';
import ProfilePage from './Pages/Profile/ProfilePage';

function App() {
  return (
    <>

<Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/feed" element = {<Feed/>}/>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/email-verification" element={<EmailVerification />} />

          <Route path="/search" element={<Search/>}/>
          <Route path="/post" element={<PostRecipe/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>

        </Routes>
         
    </>
  )
}

export default App
