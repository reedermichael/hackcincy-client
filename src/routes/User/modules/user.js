export const CREATE_EVENT = 'CREATE_EVENT'

export const createEvent = (name, qty, price) => {
  return (dispatch, getState) => {
    // TODO: Update this
    let contractInstance = getContractInstance(getState().events.abi.terrapin, getState().events.terrapinAddr);
    console.log('contractInstance: ', contractInstance);
    return contractInstance.methods.getEvents().call({from: '0x5d45ab7cc622298ef32de3cca7f8dc5a45c296d5'}, (err, data) => {
      console.log('calls getEvents');
      console.log(data);
    });
  }
}

export const actions = {
  createEvent
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CREATE_EVENT]  : (state, action) => {
    return {
      ...state
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    events: null,
    abi: null,
    terrapinAddr: null
}
export default function loginReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
