import "./header.css";
import { Link } from "react-router-dom";
import React from "react";
import SearchBar from "../pages/SearchResult/SearchBar";
import GSLogo from "./GSLogo.png";
import { UserProfileData } from "./UserProfileData";

class Header extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props.setResults)
  }

  render() {
    return (
      <header className={"header"}>
        <div>
          <Link to="/">
            <a>
              <img src={GSLogo} alt="GSLogo" className={"gs-logo"} />
            </a>
          </Link>
        </div>
        <SearchBar
          setResultsOnHeader={this.props.setResultsOnPage}
          className={"search-bar"}
        />
        <div>
          {UserProfileData.map((UserData) => (
            <div className={"profile"}>
              <div className={"username"}>
                <div>{UserData.userName} </div>
                <div> [{UserData.division}] </div>
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

export default Header;
