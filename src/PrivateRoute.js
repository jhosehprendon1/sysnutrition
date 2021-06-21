import React from "react";
import { connect } from "react-redux";
import {Route, Redirect} from "react-router-dom";

const PrivateRoute = ({isSignedIn, component: Component, ...rest}) => (
    <Route {...rest} component={(props) => (
      isSignedIn ? (
        <Component {...props}/>
      ) : (
        <Redirect to="/login"/>
      )
    )} />
)

const mapStateToProps = (state) => ({
  isSignedIn: state.auth.isSignedIn
})

export default connect(mapStateToProps)(PrivateRoute);
