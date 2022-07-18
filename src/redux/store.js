import { configureStore } from '@reduxjs/toolkit'
import filterSlice from 'redux/selectSlice'

export default configureStore({
  reducer: {
    filter: filterSlice,
  },
})
