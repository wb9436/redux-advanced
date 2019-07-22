import Taro, {Component} from '@tarojs/taro'
import {View, Button} from '@tarojs/components'

import createStore from '../../demo/three/createStore'
import reducer from '../../demo/three/reducer'

let initialState = {
  count: 1
}
let store = createStore(initialState, reducer)

store.subscribe(() => {
  console.log('state变更', store.getState())
})

class DemoOne extends Component {
  config = {
    navigationBarTitleText: '有计划的状态管理'
  }

  onAdd() {
    store.changeState({type: 'INCREMENT'})
  }

  onDec() {
    store.changeState({type: 'DECREMENT'})
  }

  onUpdate() {
    store.changeState({type: 'DEC'})
  }

  render() {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.onAdd.bind(this)}>+</Button>
        <Button className='add_btn' onClick={this.onDec.bind(this)}>-</Button>
        <Button className='add_btn' onClick={this.onUpdate.bind(this)}>非指定修改</Button>
      </View>
    )
  }
}

export default DemoOne
