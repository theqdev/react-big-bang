import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostsActions from '../Redux/Posts'
import PropTypes from 'prop-types'
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Jumbotron from "react-bootstrap/Jumbotron";


class GetExample extends Component {

  componentDidMount(){
    this.props.getAPIData();
  }

  componentDidUpdate(){
  }

  render(){
    return(

      <div>

        <Container className="paddedContainer">
        <h1>API Get Example</h1>
        <h3>Here is your data, served as props, after fetched from custom API endpoint.</h3>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows="3" value={typeof this.props.posts.data !== 'undefined' ? JSON.stringify(this.props.posts.data) : ''} autoHeight={true} />
          </Form.Group>
      </Container>

      </div>
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
