import Taro, {Component} from '@tarojs/taro'
import {View, Button} from '@tarojs/components'

import createStore from '../../demo/one/createStore'

let initialState = {
  count: 1
}

let store = createStore(initialState)

store.subscribe(() => {
  console.log('state变更', store.getState())
})

class DemoOne extends Component {
  config = {
    navigationBarTitleText: '简单状态管理'
  }

  onAdd() {
    let state = store.getState()
    store.changeState({count: state.count + 1})
  }

  onDec() {
    let state = store.getState()
    store.changeState({count: state.count - 1})
  }

  render() {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.onAdd.bind(this)}>+</Button>
        <Button className='add_btn' onClick={this.onDec.bind(this)}>-</Button>
      </View>
    )
  }
}

export default DemoOne
