import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";

class Portfolio extends React.Component {
  render() {
    return (
      <BaseLayout>
        <h1>I am Portfolio page</h1>
      </BaseLayout>
    );
  }
}

export default Portfolio; // we can extract the url id withRouter as this.props.router.query.id
