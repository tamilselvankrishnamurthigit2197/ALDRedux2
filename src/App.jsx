import React from "react"
import { store } from "./store/store"
import {Provider} from 'react-redux'
import AddCustomer from "../components/AddCustomer"
import ViewCustomer from "../components/ViewCustomer"
function App (){
  return(

    <Provider store={store}>
      <div>
      <h1>REact - REdux</h1>
      <AddCustomer />
      <ViewCustomer />
    </div>
    </Provider>
  )
}

export default App