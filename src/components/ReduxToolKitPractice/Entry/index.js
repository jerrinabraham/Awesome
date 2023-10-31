import { View, Text } from 'react-native'
import React from 'react'
import { Counter } from '../MainCode/index'
import { store } from '../Store/index'
import { Provider } from 'react-redux'
const Entry = () => {
  return (


    <Provider store={store}>
    <Counter />
  </Provider>

  )
}

export default Entry