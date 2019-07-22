const createStore = (initialState) => {
  let state = initialState
  let listeners = []

  /*发布订阅*/
  function subscribe(listener) {
    listeners.push(listener)
  }

  /*改变状态*/
  function changeState(newState) {
    state = newState
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
