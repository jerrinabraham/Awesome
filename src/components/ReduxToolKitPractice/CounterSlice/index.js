import { View, Text } from 'react-native'
import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  
  jerrins:"jissu",
  Amy:"Alan"
}
export const counterSlice = createSlice({
  name:'counter',
  initialState,
  reducers: {
    increment: (state,action) => {
      
      state.Amy = action.payload
    },
    decrement: (state,action) => {
      state.value -= 1 
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  
  },
})


export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer



