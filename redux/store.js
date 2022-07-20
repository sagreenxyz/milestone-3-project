import { configureStore } from '@reduxjs/toolkit'
import { shopReducer } from './shop.slice'

const reducer = {
    shop: shopReducer
}

const store = configureStore({
    reducer
})

export default store