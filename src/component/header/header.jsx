import "./header.css";
import { Link } from "react-router-dom";
import React from "react";
import SearchBar from "../pages/SearchResult/SearchBar";
import GSLogo from "./GSLogo.png";
import { UserProfileData } from "./UserProfileData";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.SearchBarRef = React.createRef();
  }


  render() {
    return (
      <header ref={this.SearchBarRef} className={"header"}>
        <div>
          <Link to="/">
            <a>
              <img src={GSLogo} alt="GSLogo" className={"gs-logo"} />
            </a>
          </Link>
        </div>
        <SearchBar className={"search-bar"} />
        <div>
          {UserProfileData.map((UserData) => (
            <div className={"profile"}>
              <div className={"username"}>
                <div>{UserData.userName} </div>
                <div> {UserData.division} </div>
              </div>
              <div>
                <img
                  src={UserData.profilePictureUrl}
                  alt="UserProfilePic"
                  className={"user-profile-pic"}
                ></img>
              </div>
            </div>
          ))}
        </div>
      </header>
    );
  }
}

export default Header
