import { ADD, MINUS } from './constant'

export const add = (num) => {
  return {
    type: ADD,
    num: num
  }
}
export const minus = () => {
  return {
    type: MINUS
  }
}

// 异步的action
export function asyncAdd() {
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}
