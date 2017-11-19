import React, { Component } from "react";

import ContentTable from "./ContentTable";
import AddForm from "./AddForm";

class Content extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    const auth = localStorage.getItem("auth");

    if (auth) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(itemsAsync => {
          return this.setState({ items: itemsAsync });
        });
    } else {
      this.props.history.push("/login");
    }
  }

  submitHandler(event){
    event.preventDefault();
    var items = this.state.items;
    var item = {};
    item.id = items.length+1;
    item.name = event.target.name.value;
    item.email = event.target.email.value;
    item.phone = event.target.phone.value;

    event.target.name.value = "";
    event.target.email.value = "";
    event.target.phone.value = "";

    items.push(item);
    this.setState({ items: items });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <ContentTable items={this.state.items} />
          </div>
          <div className="col-xs-12" />
        </div>
        <AddForm submitForm={this.submitHandler.bind(this)}/>
      </div>
    );
  }
}

export default Content;
