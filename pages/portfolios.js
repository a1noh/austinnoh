import React from "react";
import BaseLayout from "../components/layouts/BaseLayouts";
import axios from "axios";
class Portfolios extends React.Component {
  static async getInitialProps() {
    let posts = [];
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      posts = res.data;
    } catch (e) {
      console.error(e);
    }
    return { posts: posts.slice(0, 10) };
  }
  renderPosts(posts) {
    return posts.map((post) => <li key={post.id}>{post.id}</li>);
  }
  render() {
    const { posts } = this.props;
    return (
      <BaseLayout>
        <h1>I am port Port!</h1>
        <ul>{this.renderPosts(posts)}</ul>
      </BaseLayout>
    );
  }
}
export default Portfolios;
