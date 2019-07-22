const createStore = (initialState, reducer) => {
  let state = initialState
  let listeners = []

  /*发布订阅*/
  function subscribe(listener) {
    listeners.push(listener)
  }

  /*改变状态*/
  function changeState(action) {
    state = reducer(state, action)
    for (let i = 0; i < listeners.length; i++) {
      /*通知*/
      let listener = listeners[i]
      listener()
    }
  }

  function getState() {
    return state
  }

  return {
    subscribe,
    changeState,
    getState
  }
}

export default createStore
