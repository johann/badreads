import React, { Component } from "react";
import Cart from "./Cart";
import { Grid } from "semantic-ui-react";

const Home = props => {
  return (
    <div>
      <Grid>
        <Grid.Column width={2} />
        <Grid.Column width={4}>
          <Cart />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Home;
