const addAction = (id) => {
  return (dispatch) => {
    return dispatch({
      type: "LIKE",
      payload: id,
    });
  };
};

const addCart = (id) => {
  return (dispatch) => {
    return dispatch({
      type: "CART",
      payload: id,
    });
  };
};

export { addAction, addCart };
