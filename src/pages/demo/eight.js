import Taro, {Component} from '@tarojs/taro'
import {View, Button} from '@tarojs/components'

import {createStore, combineReducers, applyMiddleware} from '../../demo/eight/index'
import counterReducer from '../../demo/eight/reducers/counter'
import infoReducer from '../../demo/eight/reducers/info'

import loggerMiddleware from '../../demo/eight/middlewares/loggerMiddleware'
import exceptionMiddleware from '../../demo/eight/middlewares/exceptionMiddleware'
import timeMiddleware from '../../demo/eight/middlewares/timeMiddleware'

const reducer = combineReducers({
  counter: counterReducer
})

/*接收旧的 createStore，返回新的 createStore*/
const rewriteCreateStoreFunction = applyMiddleware(loggerMiddleware, exceptionMiddleware, timeMiddleware)
/*返回了一个 dispatch 被重写过的 store*/
const store = createStore(reducer, rewriteCreateStoreFunction)

const nextReducer = combineReducers({
  counter: counterReducer,
  info: infoReducer
})
/*replaceReducer*/
store.replaceReducer(nextReducer)

const unsubscribe = store.subscribe(() => {
  let state = store.getState();
  console.log(state.counter.count, state.info.name, state.info.desc)
})
/*退订*/
unsubscribe()

class DemoOne extends Component {
  config = {
    navigationBarTitleText: '多中间件合作-middleware(优化)'
  }

  onAdd() {
    store.dispatch({type: 'INCREMENT'})
  }

  onDec() {
    store.dispatch({type: 'DECREMENT'})
  }

  onUpdateName() {
    store.dispatch({type: 'SET_NAME', name: '天龙九部'})
  }

  onUpdateDesc() {
    store.dispatch({type: 'SET_DESC', desc: '金庸的天龙八部'})
  }

  render() {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.onAdd.bind(this)}>+</Button>
        <Button className='add_btn' onClick={this.onDec.bind(this)}>-</Button>
        <Button className='add_btn' onClick={this.onUpdateName.bind(this)}>修改Name</Button>
        <Button className='add_btn' onClick={this.onUpdateDesc.bind(this)}>修改Desc</Button>
      </View>
    )
  }
}

export default DemoOne
