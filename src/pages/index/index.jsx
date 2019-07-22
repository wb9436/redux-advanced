import Taro, {Component} from '@tarojs/taro'
import {View, Button, Text} from '@tarojs/components'
import {connect} from '@tarojs/redux'

import {add, minus, asyncAdd} from '../../reducers/counter/action'

import './index.scss'

// @connect(({counter}) => ({
//   counter
// }), (dispatch) => ({
//   onAdd() {
//     dispatch(add.apply(this, arguments))
//   }
// }))
@connect(({counter}) => ({
  counter
}))
class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  onAdd(num) {
    // this.props.onAdd(num)
    this.props.dispatch({
      type: 'ADD',
      num: num
    })
  }

  onTestPromise() {
    this.onPromiseClick().then(data => {
      console.log('已接收promise 执行结果', data, Date.now())
    })
  }

  onPromiseClick() {
    console.log('promise 开始执行', Date.now())
    return new Promise(((resolve, reject) => { //reject就是失败的时候的回调
      try {
        setTimeout(() => {
          console.log('promise 执行完毕', Date.now())
          resolve('promise已经执行完毕')
        }, 2000)
      } catch (e) {
      }
    }))
  }

  render() {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.onAdd.bind(this, 2)}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <Button className='dec_btn' onClick={this.onTestPromise.bind(this)}>Test Promise</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
      </View>
    )
  }
}

export default Index
