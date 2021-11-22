// import logo from './logo.svg';
// import './App.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import UploadItem from './screens/UploadItem'

function App() {
  return (
    <>
    <Routes>
        <Route path="/" component = {<HomeScreen/>} exact></Route>
        <Route path="/upload" component={<UploadItem/>}></Route>
        <Route path="/profile" component={<ProfileScreen/>}></Route>
</Routes>
      <>
      <NavBar />
      <Footer />
    </>
    </>
     

  );
}

export default App;
