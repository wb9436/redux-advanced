import Taro, {Component} from '@tarojs/taro'
import {View, Button} from '@tarojs/components'
import {connect} from '@tarojs/redux'

import {onGetUserInfo} from '../../reducers/userInfo/reducer'

@connect(({userInfo}) => ({
  userInfo
}), {onGetUserInfo})
class User extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  onGetUserInfo() {
    console.log(this.props)
    this.props.onGetUserInfo('哈哈哈')
  }

  render() {
    const {userInfo, isLoading, errorMsg} = this.props.userInfo

    return (
      <View className='index'>
        {isLoading ? '请求信息中......' :
          (
            errorMsg ? errorMsg :
              <View>
                <View>用户信息：</View>
                <View>用户名：{userInfo.name}</View>
                <View>介绍：{userInfo.desc}</View>
              </View>
          )
        }
        <Button onClick={this.onGetUserInfo.bind(this)}>请求用户信息</Button>
      </View>
    )
  }
}

export default User
