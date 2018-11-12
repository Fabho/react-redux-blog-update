import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  renderField (field) {
    return (
      <div className="form-group has-danger">
        <label>{field.label}</label>
        <input
          type="text"
          className="form-control"
          {...field.input}
        />
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render () {
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Tags"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.title || values.title.length < 3) {
    errors.title = 'Enter a title!';
  }

  if(!values.categories) {
    errors.categories = 'Enter categories!';
  }

  if(!values.content) {
    errors.content = 'Enter some content pls!';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
