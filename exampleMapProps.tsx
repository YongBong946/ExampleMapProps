import { connect } from "react-redux";
import { ExampleComponent } from "../exampleMapProps";
import { IStore } from "../store";

export const mapStatetoProps = (state: IStore) => {
  return {
    store: state,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    setExampleDispatchAction: (values) =>
      dispatch(SetExampleDispatchAction(values)),
  };
};

export const ConnectedExampleComponent = connect(
  mapStatetoProps,
  mapDispatchToProps
)(ExampleComponent);
