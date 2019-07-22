import Taro, {Component} from '@tarojs/taro'
import {View, Button} from '@tarojs/components'

import {createStore, combineReducers} from '../../demo/seven/index'
import counterReducer from '../../demo/seven/reducers/counter'
import infoReducer from '../../demo/seven/reducers/info'

import loggerMiddleware from '../../demo/seven/middlewares/loggerMiddleware'
import exceptionMiddleware from '../../demo/seven/middlewares/exceptionMiddleware'
import timeMiddleware from '../../demo/seven/middlewares/timeMiddleware'

const reducer = combineReducers({
  counter: counterReducer,
  info: infoReducer
})

let store = createStore(reducer)
const next = store.dispatch

store.subscribe(() => {
  let state = store.getState();
  console.log(state.counter.count, state.info.name, state.info.desc)
})

const logger = loggerMiddleware(store)
const exception = exceptionMiddleware(store)
const time = timeMiddleware(store)

store.dispatch = exception(time(logger(next)))

class DemoOne extends Component {
  config = {
    navigationBarTitleText: '多中间件合作-middleware'
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
