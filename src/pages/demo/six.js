import Taro, {Component} from '@tarojs/taro'
import {View, Button} from '@tarojs/components'

import {createStore, combineReducers} from '../../demo/five/index'
import counterReducer from '../../demo/five/reducers/counter'
import infoReducer from '../../demo/five/reducers/info'

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

const loggerMiddleware = (action) => {
  console.log('this state', store.getState())
  console.log('action', action)
  next(action)
  console.log('next state', store.getState())
}

const exceptionMiddleware = (action) => {
  try {
    loggerMiddleware(action)
    // next(action);
  } catch (err) {
    console.error('错误报告: ', err)
  }
}

store.dispatch = exceptionMiddleware

class DemoOne extends Component {
  config = {
    navigationBarTitleText: '状态管理中间件-middleware'
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
