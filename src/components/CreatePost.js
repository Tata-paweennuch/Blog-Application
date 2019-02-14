import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CreatePost extends Component {

    static propTypes = {
        addPost: PropTypes.func.isRequired
    };

    state={
        title: '',
        by: '',
        category: '',
        content: '',
        touched: {
            title: false,
            by: false,
            category: false,
            content: false
        }
    }

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        this.setState({ [name]: value, });
    };

    handleBlur = e => {
        let name= e.target.name;

        this.setState ({
          touched: {...this.state.touched, [name]: true},
        });
    }

    addPost = (e) => {
        e.preventDefault();

        let allTrue =   
            this.state.touched.title &&
            this.state.touched.by &&
            this.state.touched.category &&
            this.state.touched.content; 
         
        if(allTrue){
        this.props.addPost(this.state.category, this.state.title, this.state.content, this.state.by);

            alert('Your post is now online!')
            this.formatForm();
            this.props.history.push('/blog');
        } else {
            alert('Please fill all the fields before saving')
        }
    };

    formatForm = () => {
        this.setState({ 
            title: '',
            by: '',
            category: '',
            content: '',
            touched: {
                title: false,
                by: false,
                category: false,
                content: false
            }
        });
    }

    render() {
        return (
            <div className="new-post-container">
                <h1 className="main-topic">Create New Post</h1>
                <form onSubmit={ this.addPost }>
                    <div className="display-block">
                        <label htmlFor="title">Title : </label>
                        <input  
                          type="text" 
                          id="title" 
                          name="title" 
                          value={ this.state.title }
                          onChange={this.onChange}
                          onBlur={ this.handleBlur }
                        />
                    </div>
                    
                    <div className="display-block">
                        <label htmlFor="by">Created by : </label>
                        <input 
                          type="text" 
                          id="by" 
                          name="by" 
                          value={ this.state.by }
                          onChange={this.onChange}
                          onBlur={ this.handleBlur }
                        />
                    </div>
                    
                    <div className="display-block">
                        <label htmlFor="category">Category : </label>
                        <select 
                          id="category" 
                          name="category"
                          value={ this.state.category }
                          onChange={this.onChange}
                          onBlur={ this.handleBlur }
                        >
                            <option value="" disabled hidden>Select here</option>
                            <option value="work">Work</option>
                            <option value="travel">Travel</option>
                            <option value="sport">Sport</option>
                            <option value="food">Food</option>
                            <option value="lifestyle">Life Style</option>
                            <option value="others">Others</option>
                        </select>
                    </div>

                    <label htmlFor="content">Content : </label>
                    <textarea 
                      rows="10" 
                      cols="110" 
                      maxLength="700" 
                      id="content" 
                      name="content"
                      placeholder="We love to hear your story ♥"
                      onChange={this.onChange}
                      onBlur={ this.handleBlur }
                      value={ this.state.content } ></textarea>
                    
                    <button type="submit" className="save-btn" value="Save">Save</button>
                    <button type="button" className="cancel-btn" value="Cancel" onClick={() => this.formatForm()} >Cancel</button>
                </form>
            </div>
        );
    }
}