import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostsActions from '../Redux/Posts'
import PropTypes from 'prop-types'
import {Container, Form, TextArea} from 'semantic-ui-react'

class GetExample extends Component {

  componentDidMount(){
    this.props.getAPIData();
  }

  componentDidUpdate(){
  }

  render(){
    return(
      <Container className="paddedContainer">
        <h1>API Get Example</h1>
        <h3>Here is youd data, served as props, after fetched from custom API endpoint.</h3>
        <Form >
          <TextArea placeholder='Tell us more' value={typeof this.props.posts.data !== 'undefined' ? JSON.stringify(this.props.posts.data) : ''} autoHeight={true}/>
        </Form>
      </Container>
    )
  }

}


GetExample.propTypes = {
  getAPIData : PropTypes.func,
  posts : PropTypes.object,
};


const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAPIData: (data) => dispatch(PostsActions.postsGet(data)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GetExample)
