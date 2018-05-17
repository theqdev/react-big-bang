import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostsActions from '../Redux/Posts'
import PropTypes from 'prop-types'
import { Form, TextArea } from 'semantic-ui-react'

class GetExample extends Component {

  componentDidMount(){
    console.log(this.props.posts.data);

    // Fetching the data into props from the API
    this.props.getAPIData();



  }


  componentDidUpdate(){
    console.log(this.props.posts.data);

    // Once API data is fetched, dispatching a post request
    if(typeof this.props.posts.data !== 'undefined'){
      // this.props.postAPIData('JWT Token');
    }

  }

  render(){
    return(
      <div>
        <h1>API Get Example</h1>
        <h3>Here is youd data, served as props, after fetched from custom API endpoint.</h3>
        <Form >
          <TextArea placeholder='Tell us more' value={typeof this.props.posts.data !== 'undefined' ? JSON.stringify(this.props.posts.data) : ''} autoHeight={true}/>
        </Form>
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
    getAPIData: (data) => dispatch(PostsActions.postsSet(data)),
    postAPIData: (data) => dispatch(PostsActions.postsSet(data)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GetExample)
