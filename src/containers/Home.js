import React, { Component } from 'react'

import {connect} from 'react-redux';
import {readNote, resetNoteData}  from '../actions/exampleActions';

class Home extends Component {

  componentDidMount(){
    // Reseting Redux's noteData UID so history navigation won't cause issues
    // this.props.resetNoteData();
    console.log(this.props);
    console.log(2121);
    this.openNote();
  }

  componentDidUpdate(){
    // this.redirectIfDelete();
    console.log(this.props);
  }

  openNote = () => {
    // this.setState({ noteOpened: true });
    this.props.readNote(12);
  };

  constructor(props){
    super(props)
  }



  componentWillReceiveProps(newProps){

  }

  render () {

    return (
<p>sdsd</p>
    )
  }
}

// export default Home;

const mapDispatchToProps = {
  readNote,resetNoteData
};

const mapStateToProps = (state) => ({
  data : state.note
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);


// const mapStateToProps = (state) => {
//   return {
//     user: state.app.user,
//     isFetching: state.app.fetching,
//   }
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     populateUserData: (data) => dispatch(UserActions.generalRequest(data)),
//   }
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(UserHome)
