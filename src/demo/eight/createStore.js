const createStore = (reducer, initialState, rewriteCreateStoreFunc) => {
  let state = initialState
  let listeners = []

  if (typeof initialState === 'function'){
    rewriteCreateStoreFunc = initialState;
    initialState = undefined;
  }

  /*如果有rewriteCreateStoreFunc，那就才用新的createStore*/
  if (rewriteCreateStoreFunc) {
    const newCreateStore = rewriteCreateStoreFunc(createStore)
    return newCreateStore(reducer, initialState)
  }
  /*否则按照正常的流程走*/

  /*发布订阅*/
  function subscribe(listener) {
    listeners.push(listener)
    return function unsubscribe() {
      const index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }

  /*改变状态*/
  function dispatch(action) {
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

  function replaceReducer(nextReducer) {
    reducer = nextReducer
    /*刷新一遍 state 的值，新来的 reducer 把自己的默认状态放到 state 树上去*/
    dispatch({ type: Symbol() });
  }

  dispatch({type: Symbol()})

  return {
    subscribe,
    dispatch,
    getState,
    replaceReducer
  }
}

export default createStore
