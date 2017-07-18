import React, { Component } from 'react'

import Nav from './components/Nav/Nav'
import ProfileContainer from './components/ProfileContainer/ProfileContainer'
import ProfileEditor from './components/ProfileEditor/ProfileEditor'
import Child from './components/Child/Child'
import ChildTwo from './components/ChildTwo/ChildTwo'
import './App.css'

class App extends Component {
   // Create a constructor for me
   // Call super
   // Create a property called this.state
   // Set this.state = to an object
   constructor() {
      super()
      this.state = {
         image: "",
         name: "Brian",
         status: "",
         birthdate: "",
         viewChildOne: true
      }
      this.updateProfile = this.updateProfile.bind(this)
      this.changeView = this.changeView.bind(this)
   }
   updateProfile(newProfile) {
      console.log("Parent", newProfile)
      this.setState(newProfile)
   }
   changeView() {
      this.setState({viewChildOne: !this.state.viewChildOne})
   }
   render() {
      return (
         <div className="App">
             <Nav /> 
            <button onClick={this.changeView}>Change View</button>
            {
               this.state.viewChildOne
               ? <Child />
               : <ChildTwo />
            }
             <ProfileContainer 
               name={this.state.name}
               status={this.state.status}
               birthdate={this.state.birthdate}
             />
            <ProfileEditor
               updateProfile={this.updateProfile}
            />
         </div>
      );
   }
}

export default App;