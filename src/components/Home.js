import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {

    render() {
//    	let allData = DataStore.getAll();

        return (
            <div>		
            	<h2>{this.props.user}</h2>
                <h1>Hello s World</h1>
            </div>
        );
    }

}
const mapStateToProps = (state) => {
  return {
    //user: state.userData.login,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    //login: (email, password) => dispatch(login(email, password))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
