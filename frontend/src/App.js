import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import UploadItem from './screens/UploadItem'
import UploadAndDisplayImage from './screens/UploadAndDisplayImage'
import ProductDetailScreen from './screens/ProductDetailScreen'
import EditItemScreen from './screens/EditItemScreen'
import VirtualLookScreen from './screens/VirtualLookScreen'
import SetDetailScreen from './screens/SetDetailScreen'
import Login from './screens/Login'
import Register from './screens/Register'
import ClothesObject from './screens/ClothesObject'
import Shoes from './screens/Shoes'
import No3DObjectFound from './screens/No3DObjectFound'
import VirtualRecommendScreen from './screens/VirtualRecommendScreen'
import ProductSystemScreen from './screens/ProductSystemScreen'

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={HomeScreen} exact></Route>
        <Route exact path="/login" component={Login} ></Route>
        <Route path= "/sign-up" component={Register}></Route>
        <Route path="/look" component={VirtualLookScreen}></Route>
        <Route path="/recommend/:search_id?" component={VirtualRecommendScreen}></Route>
         
        <Route path="/upload" component={UploadItem}></Route>
        <Route path="/object" component={ClothesObject}></Route>
       
        <Route path="/profile/:account_id" component={ProfileScreen}></Route>
        <Route path="/product/:id" component={ProductDetailScreen}></Route>
        <Route path="/product/:product_id" component={ProductDetailScreen}></Route>
        <Route path="/editpost/:product_id" component={EditItemScreen}></Route>
        <Route path="/set/:id" component={SetDetailScreen}></Route>
        <Route path="/shoes" component={Shoes}></Route>
        <Route path="/notfound" component={No3DObjectFound}></Route>
        <Route path="/productServer/:category/:id" component={ProductSystemScreen}></Route>
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