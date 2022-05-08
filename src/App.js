import './App.css';
import { useContext } from 'react';
import SignIn from "./components/SignIn";
import {AuthContext} from "./authContext"
import Home from "./routes/Home";
import LandingPage from "./components/LandingPage";

function App() {
  const {currentUser} = useContext(AuthContext);
 return(
   <div>
     {!currentUser? (
     <div>
        <LandingPage />
     </div>
   ):(<div><Home /></div>)}
   </div>
 )
}

export default App;
