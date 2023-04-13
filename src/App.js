import './App.css';
import Profile from './Profile/Profile';
import img  from "./img.jpg";


function App() {
  return (
    <div className="App">
      <h1>My Profile</h1>
      <Profile fullName='Zahmouli nizar' bio ='test' profession='developper' children={img} />
      
    </div>
  );
}

export default App;

