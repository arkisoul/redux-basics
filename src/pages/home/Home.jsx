import React from "react";
import { connect } from "react-redux";

import { addUser, removeUser, thunkFunctionCreator } from "../../store/actions/user";

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Home Page",
      heading: "Ideas to Implementation",
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <section>
          <h3>{this.state.heading}</h3>
          <button
            onClick={() => this.props.addAUser({ name: "John Doe", age: 30 })}
          >
            Add a user
          </button>
          <button onClick={() => this.props.removeAUser()}>Remove user</button>
          <button onClick={() => this.props.dispatchThunkFunction()}>
            Thunk
          </button>
          {this.props.user && (
            <p>
              User details{" "}
              <strong>
                {this.props.user.name} | {this.props.user.age}
              </strong>
            </p>
          )}
          <p>
            Is User logged in{" "}
            <strong>{this.props.isLoggedIn ? "Yes" : "No"}</strong>
          </p>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  isLoggedIn: state.user.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  addAUser: (user) => dispatch(addUser(user)),
  removeAUser: () => dispatch(removeUser()),
  dispatchThunkFunction: () => dispatch(thunkFunctionCreator()),
});

const connectedStore = connect(mapStateToProps, mapDispatchToProps);
const WrappedHomeComponent = connectedStore(HomeComponent);
// connect(mapStateToProps, mapActionToProps)(HomeComponent)
export default WrappedHomeComponent;
