import React, { useState } from "react";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import "./SearchBar.css";



class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.setResults)
    this.state = {value: '', data: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.url_test = 'https://reqres.in/api/posts'
    this.url_lambda = 'https://qv5krif365.execute-api.ap-southeast-1.amazonaws.com/dev/jy-test-neptune'
    this.navigate = props.navigate;
  }

  handleChange (event) {
    console.log(event.target.value)
    this.setState({value: event.target.value});
  }

  handleSubmit (event) {
    //event.preventDefault();

    console.log(this.state.value)
    // 👇️ redirect to /contacts
    fetch(this.url_lambda, {
      method: 'POST',
      body: JSON.stringify({ 'question': this.state.value})
    }).then(response => {
      console.log(response.status)
      if(response.ok){
        const data = response.json()
        // this.setState({data: data})
        return data
        // return response.json()
      }else{
        alert("something is wrong")
      }
    }).then(newResults => {
      console.log(newResults)
      this.setState({data: newResults})
    })
    this.navigate('/result');
  };

  render() {
    return (<form className="searchbox" onSubmit={() => {this.handleSubmit(); this.props.setResults(this.state.data);}}>
    <input
      type="text"
      id="question"
      placeholder="Search"
      name="s"
      className="searchTerm"
      value={this.state.value} 
      onChange={this.handleChange}
    />
    <button className="searchButton" type="submit"> &nbsp; </button>
  </form>
    )
  }
};

export default function(props) {
  const navigate = useNavigate();
  return <SearchBar {...props} navigate={navigate}></SearchBar>
};
