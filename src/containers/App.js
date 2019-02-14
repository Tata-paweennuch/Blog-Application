// https://jsonplaceholder.typicode.com/   ---> for API extra feature, /pósts and /users

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';

// App components
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Blog from '../components/Blog';
import CreatePost from '../components/CreatePost';
import NotFound from '../components/NotFound';
import Footer from '../components/Footer';

// Redux Part
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PostActionCreators from '../redux/actions/post';


class App extends Component {

  static propTypes = {
    posts: PropTypes.array.isRequired
  };

  render() {

    const { dispatch, posts } = this.props;

    const addPost = bindActionCreators(PostActionCreators.addPost, dispatch);
    const removePost = bindActionCreators(PostActionCreators.removePost, dispatch);
    
    return (
      <div>
        <NavBar />
        <div className="body-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog" render={(routerProps) => <Blog data={ posts } removePost={ removePost } {...routerProps} />} />
            <Route exact path="/createpost" render={ (props) => <CreatePost addPost={ addPost } {...props} /> } />
            <Route component={NotFound} /> 
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    posts: state.AllPosts
  }
);

export default withRouter(
  connect(
    mapStateToProps
  )(App)
);
