import { configureStore } from '@reduxjs/toolkit'
import pageCount from './redux/pageCount'

export const store = configureStore({
  reducer: {
      page : pageCount
    },
})