import React, { PureComponent } from "react";

import "../../styles/List.css";

export default class StarshipList extends PureComponent {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  //DefinecomponentDidment which is responisble for retrieving data.
  componentDidMount() {
    fetch("https://swapi.co/api/starships", {
      method: "GET",
      //THen convert the response to json.
    })
      .then((res) => res.json())
      //THen set the state of the data to the results.
      .then((resJson) => this.setState({ data: resJson.results }))
      //Then catch any errors when retrieving data from the starships api url.
      .catch((err) => console.log("Get Starships Error---------", err));
  }

  render() {
    return (
      <div className="container">
        <div className="route-title">
          <h3> Starships</h3>
        </div>
        <div>
          {/*Map over the data array if it has data, and if it contains data it will be truthy */}
          {this.state.data.length
            ? this.state.data.map((starship, i) => (
                <p key={i}>{starship.name}</p>
              ))
            : null}
        </div>
      </div>
    );
  }
}
