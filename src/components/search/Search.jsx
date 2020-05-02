import React from "react";
import axios from "axios";
import ImageList from "../image-list/ImageList";

import {
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  TextField,
} from "@material-ui/core";

class Search extends React.Component {
  state = {
    searchInput: "",
    limit: 10,
    apiURL: "https://pixabay.com/api/",
    apiKEY: process.env.REACT_APP_API_KEY,
    images: [],
  };

  handleInputChange = (e) => {
    const input_value = e.target.value;
    this.setState(
      {
        searchInput: input_value,
      },
      () => {
        axios
          .get(
            `${this.state.apiURL}?key=${this.state.apiKEY}&q=${this.state.searchInput}&image_type=photo&per_page=${this.state.limit}`
          )
          .then((res) => {
            this.setState({
              images: res.data.hits,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    );
  };

  render() {
    return (
      <div>
        <TextField
          id="standard-search"
          label="Search Image"
          type="search"
          style={{ marginTop: "40px", width: "100%" }}
          onChange={this.handleInputChange}
        />
        <br />
        <FormControl style={{ minWidth: "140px" }}>
          <InputLabel>Limit per Page</InputLabel>
          <Select>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </FormControl>
        {this.state.images.length > 0 ? (
          <ImageList
            images={this.state.images}
            searchInput={this.state.searchInput}
            key={this.state.images.id}
          />
        ) : null}
      </div>
    );
  }
}

export default Search;
