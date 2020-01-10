import {connect} from "react-redux";
import Counter from "./Counter";

//Зіставлення стану Redux з властивостями компоненту
function mapStateToProps(state) {
  return {
    countValue: state.count,
  };
}

// Дія
var increaseAction = {type: "increase"};
var decreaseAction = {type: "decrease"};

//Зіставлення дій Redux з властивостями компоненту
function mapDispatchToProps(dispatch) {
  return {
    increaseCount: function() {
      return dispatch(increaseAction);
    },
    decreaseCount: function() {
      return dispatch(decreaseAction);
    }
  };
}

// HOC-компонент
var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
) (Counter);

export default connectedComponent;