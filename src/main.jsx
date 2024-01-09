import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <RouterProvider router={router}>
      </RouterProvider>
    </Provider>
)
