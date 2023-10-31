import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../CounterSlice/index'
import { Button, Text, View } from 'react-native'
import Trial from '../../Trial'

export function Counter() {
  const count = useSelector((state) => state.counter.jerrins)
  const dispatch = useDispatch()

  return (
    <View>
      <Text>{count}</Text>
      <Button onPress={()=>{dispatch(increment("jerrin abraham"))}}title="increment"></Button>
      <Button onPress={()=>{dispatch(decrement())}}title="decrements"></Button>
      <Trial x/>
    </View>
  )
}

