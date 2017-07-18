import React, {Component} from 'react'

class ProfileEditor extends Component {

   constructor() {
      super()
      this.state = {
         image: "",
         name: "",
         status: "",
         birthdate: ""
      }
      this.updateName = this.updateProperty.bind(this, "name")
      this.updateImage = this.updateProperty.bind(this, "image")
      this.updateStatus = this.updateProperty.bind(this, "status")
      this.updateBirthdate = this.updateProperty.bind(this, "birthdate")
      this.updateProfile = this.updateProfile.bind(this)
   }
   updateProperty(property, e) {
      console.log(e.target.value)
      this.setState({[property]: e.target.value})
   }
   updateProfile(e) {
      console.log("Update Profile in child", this.state)
      e.preventDefault()
      const newState = Object.assign({}, this.state)
      this.props.updateProfile(newState)
   }

   render() {
      return (
         <form className="profile-editor" 
            onSubmit={this.updateProfile}
         >
            <input type="text" className="profile-editor-input"
               placeholder="Enter new name"
               value={this.state.name}
               onChange={this.updateName}
            />
            <input type="text" className="profile-editor-input"
               placeholder="Enter new image"
               value={this.state.image}
               onChange={this.updateImage}

            />
            <input type="text" className="profile-editor-input"
               placeholder="Enter new birthdate"
               value={this.state.birthdate}
               onChange={this.updateBirthdate}
            />
            <input type="text" className="profile-editor-input"
               placeholder="Enter new status"
               value={this.state.status}
               onChange={this.updateStatus}
            />
            <input className="profile-editor-submit" 
               type="submit" 
               value="Update Profile"
            />

         </form>

      )
   }

}

export default ProfileEditor