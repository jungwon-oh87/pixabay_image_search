import React, { Component } from "react";
import { GridList, GridListTile, ListSubheader } from "@material-ui/core";

class ImageList extends Component {
  container = {
    marginTop: "20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "rgba(18,18,18,0.8)",
  };

  gridListStyle = {
    textAlign: "center",
    backgroundSize: "cover",
    justifyContent: "center",
  };

  tileStyle = {
    width: "175px",
    height: "100px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };

  render() {
    const { images, searchInput } = this.props;
    {
      console.log(images);
    }
    return (
      <div style={this.container}>
        <GridList cellHeight="auto" cols={3} style={this.gridListStyle}>
          <GridListTile key="Subheader" cols={3} style={{ height: "auto" }}>
            <ListSubheader component="div" style={{ color: "#fff" }}>
              Results for {searchInput.toUpperCase()}:
            </ListSubheader>
          </GridListTile>
          {images.map((i) => {
            return (
              <GridListTile key={i.id} style={this.tileStyle}>
                <img
                  src={i.largeImageURL}
                  alt={i.tag}
                  style={{
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                  }}
                />
              </GridListTile>
            );
          })}
        </GridList>
      </div>
    );
  }
}

export default ImageList;
