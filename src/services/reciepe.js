import React, { Component } from "react";
import HomeTiles from "../components/HomeComponents/HomeTiles";
import Spinner from "../components/loader/Spinner";

class reciepeService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    const API_KEY = "ee27b4945bac5d6b09bb80d78d93c6a9";
    const URL = `https://www.food2fork.com/api/search?key=${API_KEY}`;
    fetch(URL)
      .then(res => res.json())
      .then(
        result => {
          //   this.setState({ items: result.recipes[0] });
          //   console.log(this.state.items);
          this.setState({
            isLoaded: true,
            items: result.recipes
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    console.log("data:" + items);
    if (error) {
      return <div>Error : {error.message} No data Populated!</div>;
    } else if (!isLoaded) {
      return (
        <div>
          <Spinner />
        </div>
      );
    } else {
      return <HomeTiles item={items} />;
    }
  }
}

export default reciepeService;
