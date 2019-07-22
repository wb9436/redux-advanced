import Taro, {Component} from '@tarojs/taro'
import {View, Button} from '@tarojs/components'

import createStore from '../../demo/one/createStore'

let initialState = {
  counter: {
    count: 0
  },
  info: {
    name: '前端九部',
    description: '我们都是前端爱好者！'
  }
}

let store = createStore(initialState)

store.subscribe(() => {
  let state = store.getState()
  console.log(`${state.info.name}：${state.info.description}`)
})
store.subscribe(() => {
  let state = store.getState()
  console.log(state.counter.count)
})

class DemoOne extends Component {
  config = {
    navigationBarTitleText: '多状态管理'
  }

  onAdd() {
    let state = store.getState()
    store.changeState({
      ...state,
      counter: {
        count: state.counter.count + 1
      }
    })
  }

  onDec() {
    let state = store.getState()
    store.changeState({
      ...state,
      counter: {
        count: state.counter.count - 1
      }
    })
  }

  onUpdate() {
    store.changeState({
      ...store.getState(),
      info: {
        name: '前端八部',
        description: '我们都是前端爱好者！'
      }
    })
  }

  render() {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.onAdd.bind(this)}>+</Button>
        <Button className='add_btn' onClick={this.onDec.bind(this)}>-</Button>
        <Button className='add_btn' onClick={this.onUpdate.bind(this)}>更新name</Button>
      </View>
    )
  }
}

export default DemoOne
