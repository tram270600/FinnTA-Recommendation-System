import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes, Switch} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import UploadItem from './screens/UploadItem'
import UploadAndDisplayImage  from './screens/UploadAndDisplayImage'
import ProductDetailScreen  from './screens/ProductDetailScreen'

function App() {
  return (
    <>
    <Switch>
        <Route path="/" component = {HomeScreen} exact></Route>
        <Route path="/upload" component={UploadItem}></Route>
        <Route path="/profile" component={ProfileScreen}></Route>
        <Route path="/product" component={ProductDetailScreen}></Route>
    </Switch>
      <>
      {/* <NavBar /> */}
   
      {/* <UploadItem /> */}
      {/* <Footer /> */}
    </>
    </>
     

  );
}

export default App;

