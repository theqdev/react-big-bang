import React, { Component } from 'react'
import { connect } from 'react-redux'
import ExampleActions from '../Redux/Example'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom';

class Example extends Component {

  componentDidMount(){

    // alert(1);
    console.log(this.props);
    console.log(this.state);

    this.props.getAPIData();

  }


  componentDidUpdate(){

    // alert(1);
    console.log(this.props);
    console.log(this.state);
    // this.props.getAPIData();

  }

  render(){
    return(
      <div>
        <h1>xxxxxxxxxshot</h1>

        <h2>Get Started</h2>
        <ol>
          <li>Review the <Link to="/fuel-savings">demo app</Link></li>
          <li>Remove the demo and start coding: npm run remove-demo</li>
        </ol>
      </div>
    )
  }


}


Example.propTypes = {
  getAPIData : PropTypes.function,
};


const mapStateToProps = (state) => {
  return {
    data: state.example,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAPIData: (data) => dispatch(ExampleActions.exampleSet(data)),
    // updateUserSettings: (data) => dispatch(UserActions.userSuccess(data)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Example)
