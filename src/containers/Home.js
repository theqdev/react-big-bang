import React, { Component } from 'react'

class Home extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
    // // Checking if still logged in
    // storage.load({
    //   key: 'user',
    //   autoSync: true,
    //   syncInBackground: true,
    //   syncParams: {
    //     extraFetchOptions: {},
    //     someFlag: true,
    //   },
    // }).then(data => {
    //   // User logged in
    // }) .catch(err => {
    //   // User not logged in
    //   redirectLogin(this.props.navigation, null)
    // })

  }

  componentDidUpdate() {
  }

  componentWillReceiveProps(newProps){

  }

  render () {

    return (
<p>sdsd</p>
    )
  }
}

export default Home;

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
