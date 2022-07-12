import React, { useState } from "react";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';




class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.url_test = 'https://reqres.in/api/posts'
    this.url_lambda = 'https://qv5krif365.execute-api.ap-southeast-1.amazonaws.com/dev/search-query-tagger-lambda'
    this.navigate = props.navigate;
  }

  handleChange (event) {
    this.setState({value: event.target.value});
  }

  handleSubmit (event) {
    event.preventDefault();

    // 👇️ redirect to /contacts
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React POST Request Example' })
    };
    fetch(this.url_test, requestOptions)
    .then(response => {
        alert(this.state.value)
        alert(response.text)
        return response.json()
    })
    this.navigate('/result');
  };

  render() {
    return (<form onSubmit={this.handleSubmit}>
      <input
        type="text"
        id="question"
        placeholder="search documentations here..."
        name="s"
        value={this.state.value} 
        onChange={this.handleChange}
      />
      <button type="submit">Search</button>
    </form>
    )
  }
};

export default function(props) {
  const navigate = useNavigate();
  return <SearchBar {...props} navigate={navigate}></SearchBar>
};
