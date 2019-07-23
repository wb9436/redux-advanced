export const GET_USER_INFO_REQUEST = "userInfo/GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "userInfo/GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAIL = "userInfo/GET_USER_INFO_FAIL";

function getUserInfoRequest() {
  return {
    type: GET_USER_INFO_REQUEST
  }
}

function getUserInfoSuccess(data) {
  return {
    type: GET_USER_INFO_SUCCESS,
    userInfo: data
  }
}

function getUserInfoFail() {
  return {
    type: GET_USER_INFO_FAIL
  }
}

export function onGetUserInfo(msg) {
  console.log('请求了', msg)
  return function (dispatch) {
    dispatch(getUserInfoRequest())

    setTimeout(() => {
      return fetch('http://localhost:9080/upload/api/user.json')
        .then((response => {
          return response.json()
        }))
        .then((json) => {
            dispatch(getUserInfoSuccess(json))
          }
        ).catch(
          (e) => {
            console.log(e)
            dispatch(getUserInfoFail());
          }
        )
    }, 2000)
  }
}

const initState = {
  isLoading: false,
  userInfo: {},
  errorMsg: ''
}

export default function userInfo(state = initState, action) {
  switch (action.type) {
    case GET_USER_INFO_REQUEST:
      return {
        ...state,
        isLoading: true,
        userInfo: {},
        errorMsg: ''
      }
    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userInfo: action.userInfo,
        errorMsg: ''
      }
    case GET_USER_INFO_FAIL:
      return {
        ...state,
        isLoading: false,
        userInfo: {},
        errorMsg: '请求错误'
      }
    default:
      return state
  }
}

