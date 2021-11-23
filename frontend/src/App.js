import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes, Switch} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import UploadItem from './screens/UploadItem'
import UploadAndDisplayImage  from './screens/UploadAndDisplayImage'

function App() {
  return (
    <>
    <Switch>
        <Route path="/" component = {HomeScreen} exact></Route>
        <Route path="/upload" component={UploadItem}></Route>
        <Route path="/profile" component={ProfileScreen}></Route>
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
// import axios from 'axios';

// import React,{Component} from 'react';

// class App extends Component {

// 	state = {selectedFile: null};

//   getBase64(e) {
//     var file = e.target.files[0]
//     let reader = new FileReader()
//     reader.readAsDataURL(file)
//     reader.onload = () => {
//       this.setState({
//         imgUpload: reader.result
//       })
//     };
//     reader.onerror = function (error) {
//       console.log('Error: ', error);
//     }
//   }
	
// 	// On file select (from the pop up)
// 	onFileChange = event => {
	
// 	// Update the state
// 	this.setState({ selectedFile: event.target.files[0] });
	
// 	};
	
// 	// On file upload (click the upload button)
// 	onFileUpload = () => {
	
// 	// Create an object of formData
// 	const formData = new FormData();
	
// 	// Update the formData object
// 	formData.append(
// 		"myFile",
// 		this.state.selectedFile,
// 		this.state.selectedFile.name
// 	);
	
// 	// Details of the uploaded file
// 	console.log(this.state.selectedFile);
	
// 	// Request made to the backend api
// 	// Send formData object
// 	axios.post("api/uploadfile", formData);
// 	};
	
// 	// File content to be displayed after
// 	// file upload is complete
// 	fileData = () => {
	
// 	if (this.state.selectedFile) {
		
// 		return (
// 		<div>
// 			<h2>File Details:</h2>
			
// <p>File Name: {this.state.selectedFile.name}</p>

			
// <p>File Type: {this.state.selectedFile.type}</p>
// <p>File Type: {this.state.selectedFile.getBase64}</p>

			
// <p>
// 			Last Modified:{" "}
// 			{this.state.selectedFile.lastModifiedDate.toDateString()}
// 			</p>
//       <img src="" alt="Test file"></img>
// 		</div>
// 		);
// 	} else {
// 		return (
// 		<div>
// 			<br />
// 			<h4>Choose before Pressing the Upload button</h4>
// 		</div>
// 		);
// 	}
// 	};
	
// 	render() {
	
// 	return (
// 		<div>
// 			<h1>
// 			GeeksforGeeks
// 			</h1>
// 			<h3>
// 			File Upload using React!
// 			</h3>
// 			<div>
// 				<input type="file" onChange={this.onFileChange} />
// 				<button onClick={this.onFileUpload}>
// 				Upload!
// 				</button>
// 			</div>
// 		{this.fileData()}
// 		</div>
// 	);
// 	}
// }

// export default App;

