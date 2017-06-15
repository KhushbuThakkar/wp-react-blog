import React        from 'react';
import DataStore    from './../stores/DataStore.js';
import { connect } from 'react-redux';

class Account extends React.Component {

    render() {
    	let {profile}=this.props;
        return (
            <div className="col-md-12 text-center">
                <img className="img img-circle	" src={(profile.avatar_urls)?Object.values(profile.avatar_urls)[2]:''}></img>
                <h1>{(profile.name)?profile.name:'loading..'}</h1>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
  console.log(state,'state profile')
  return {
    profile: state.login.profile
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
