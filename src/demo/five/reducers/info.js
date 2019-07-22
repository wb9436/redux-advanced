let initialState = {
  name: '天龙八部',
  desc: '金庸小说'
}

/*info 修改计划*/
export default function infoReducer(state, action) {
  if (!state) {
    state = initialState
  }

  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name
      }
    case 'SET_DESC':
      return {
        ...state,
        desc: action.desc
      }
    default:
      return state
  }
}
