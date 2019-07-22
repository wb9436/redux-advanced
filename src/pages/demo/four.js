import Taro, {Component} from '@tarojs/taro'
import {View, Button} from '@tarojs/components'

// import createStore from '../../demo/four/createStore'
// import combineReducers from '../../demo/four/combineReducers'

import {createStore, combineReducers} from '../../demo/four/index'
import counterReducer from '../../demo/four/reducers/counter'
import infoReducer from '../../demo/four/reducers/info'

const reducer = combineReducers({
  counter: counterReducer,
  info: infoReducer
})

let initialState = {
  counter: {
    count: 0
  },
  info: {
    name: '天龙八部',
    desc: '金庸小说'
  }
}

let store = createStore(reducer, initialState)

store.subscribe(() => {
  let state = store.getState();
  console.log(state.counter.count, state.info.name, state.info.desc)
})

class DemoOne extends Component {
  config = {
    navigationBarTitleText: '多文协作状态管理'
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
