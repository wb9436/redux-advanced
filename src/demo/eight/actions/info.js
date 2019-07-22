const setName = (name) => {
  return {
    type: 'SET_NAME',
    name: name
  }
}

const setDesc = (desc) => {
  return {
    type: 'SET_DESC',
    name: desc
  }
}

export {
  setName,
  setDesc
}
