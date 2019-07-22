import Taro, {Component} from '@tarojs/taro'
import {View, Button} from '@tarojs/components'

import {createStore, combineReducers, applyMiddleware} from '../../demo/eight/index'
import counterReducer from '../../demo/eight/reducers/counter'
import infoReducer from '../../demo/eight/reducers/info'

import loggerMiddleware from '../../demo/eight/middlewares/loggerMiddleware'
import exceptionMiddleware from '../../demo/eight/middlewares/exceptionMiddleware'
import timeMiddleware from '../../demo/eight/middlewares/timeMiddleware'

import {increment, decrement} from '../../demo/eight/actions/counter'
import {setName, setDesc} from '../../demo/eight/actions/info'

import bindActionCreator from '../../demo/eight/bindActionCreator'

const reducer = combineReducers({
  counter: counterReducer,
  info: infoReducer
})

/*接收旧的 createStore，返回新的 createStore*/
const rewriteCreateStoreFunction = applyMiddleware(loggerMiddleware, exceptionMiddleware, timeMiddleware)
/*返回了一个 dispatch 被重写过的 store*/
const store = createStore(reducer, rewriteCreateStoreFunction)

store.subscribe(() => {
  let state = store.getState();
  console.log(state.counter.count, state.info.name, state.info.desc)
})

// const actions = {
//   increment: function () {
//     return store.dispatch(increment.apply(this, arguments))
//   },
//   decrement: function () {
//     return store.dispatch(decrement.apply(this, arguments))
//   },
//   setName: function () {
//     return store.dispatch(setName.apply(this, arguments))
//   },
//   setDesc: function () {
//     return store.dispatch(setDesc.apply(this, arguments))
//   }
// }

const actions = bindActionCreator({increment, decrement, setName, setDesc}, store.dispatch)

class DemoOne extends Component {
  config = {
    navigationBarTitleText: 'bindActionCreators'
  }

  onAdd() {
    // store.dispatch(increment())
    actions.increment()
  }

  onDec() {
    // store.dispatch(decrement())
    actions.decrement()
  }

  onUpdateName() {
    // store.dispatch(setName('天龙九部'))
    actions.setName('天龙九部')
  }

  onUpdateDesc() {
    // store.dispatch(setDesc('金庸的天龙八部'))
    actions.setDesc('金庸的天龙八部')
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
