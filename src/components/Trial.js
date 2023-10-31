import { View, Text, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './ReduxToolKitPractice/CounterSlice'

const Trial = () => {
    const count = useSelector((state) => state.counter.Amy)
    const dispatch = useDispatch()
  return (
    <View>
      <Text>Trial{count}</Text>
      <Button title="press" onPress={()=>dispatch(increment("mathew"))}/>
    </View>
  )
}

export default Trial