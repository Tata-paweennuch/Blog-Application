import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, NavLink, Redirect, Switch } from "react-router-dom";
import PostsContainer from "./blog/PostsContainer";
import DetailPost from "./blog/DetailPost";
import NotFound from "./NotFound";

class Blog extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    removePost: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
  };

  createBlogForEachCategory = () => {
    let categories = [];
    this.props.data.forEach(post => {
      if (!categories.includes(post.category)) {
        categories.push(post.category);
      }
    });

    let routes = categories.map(category => {
      let result = this.props.data.filter(post => {
        return post.category === category;
      });

      return (
        <Route
          exact
          path={`${this.props.match.path}/${category}`}
          render={routerProps => (
            <PostsContainer
              data={result}
              removePost={this.props.removePost}
              {...routerProps}
              category={category}
            />
          )}
          key={category}
        />
      );
    });
    return routes;
  };

  render() {
    const { data, removePost, match } = this.props;

    return (
      <div className="blog-container">
        <div className="category-bar">
          <ul className="blog-nav">
            <li>
              <NavLink exact to={`${match.url}/all`}>
                All
              </NavLink>
            </li>
            <li>
              <NavLink to={`${match.url}/work`}>Work</NavLink>
            </li>
            <li>
              <NavLink to={`${match.url}/sport`}>Sport</NavLink>
            </li>
            <li>
              <NavLink to={`${match.url}/travel`}>Travel</NavLink>
            </li>
            <li>
              <NavLink to={`${match.url}/food`}>Food</NavLink>
            </li>
            <li>
              <NavLink to={`${match.url}/lifestyle`}>Life Style</NavLink>
            </li>
            <li>
              <NavLink to={`${match.url}/others`}>Others</NavLink>
            </li>
          </ul>
        </div>

        <Switch>
          <Route
            exact
            path={`${match.path}/all`}
            render={routerProps => (
              <PostsContainer
                data={data}
                removePost={removePost}
                {...routerProps}
                category={"all"}
              />
            )}
          />

          {this.createBlogForEachCategory()}

          <Route
            exact
            path={`${match.path}/:category/:id`}
            render={routerProps => (
              <DetailPost
                posts={data}
                removePost={removePost}
                {...routerProps}
              />
            )}
          />

          <Route
            exact
            path={`${match.path}`}
            render={() => <Redirect to={`${match.path}/all`} />}
          />

          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
