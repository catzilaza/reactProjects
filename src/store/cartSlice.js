import { createSlice, configureStore } from "@reduxjs/toolkit";

//export const initialStateValue = 0;
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    productID: "001",
    name: "ขนมคุ๊กกี้งาดำ",
    price: "60",
    quantity: "100",
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
    printed: (state, action) => {
      state.productID = action.payload.productID;//,productID,name,price
      state.name = action.payload.name;
      state.price = action.payload.price;
      console.log(`CounterSlice 
            productID : ${state.productID}
            name : ${state.name} 
            price : ${state.price}
            quantity: ${state.quantity}
            order value: ${state.value}`);
      alert("Hello CounterSlice");
    },
  },
});

export const { incremented, decremented, printed } = counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer,
});

/*
  // Can still subscribe to the store
  store.subscribe(() => console.log(store.getState()))
  
  // Still pass action objects to `dispatch`, but they're created for us
  store.dispatch(incremented())
  // {value: 1}
  store.dispatch(incremented())
  // {value: 2}
  store.dispatch(decremented())
  // {value: 1}

*/
