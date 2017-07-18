import React, {Component} from "react"

class ProfileContainer extends Component {

   render() {
      return (
         <div className="profile-container">
            <div className="profile-image">
               <img src="https://image.flaticon.com/icons/svg/16/16480.svg" alt=""/>
            </div>
            <div className="profile-info">
               <h2>{this.props.name}</h2>
               <h3 className="profile-info-status">{this.props.status}</h3>
               <h4 className="profile-info-birthdate">{this.props.birthdate}</h4>
            </div>
         </div>

      )
   }
 }

export default ProfileContainer