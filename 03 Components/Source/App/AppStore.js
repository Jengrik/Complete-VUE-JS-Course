//* Import Necessary Methods from Vuex
import { createStore } from 'vuex'

//* Store Instance Definition
const VueStore = createStore({
  state () {
    return {
    //* State
    //  It is a plain object to declare the state of the module,
    //  then that state object will be shared by reference and 
    //  cause cross store/module state pollution when it's mutated
    }
  },
  mutations: {
    //* Mutations
    //  The only way to actually change state in a Vuex store is by 
    //  committing a mutation. Vuex mutations are very similar to 
    //  events: each mutation has a string type and a handler. 
  },
  actions: {
    //* Actions:
    //  Actions are similar to mutations, the differences being that:
    //    1. Instead of mutating the state, actions commit mutations.
    //    2. Actions can contain arbitrary asynchronous operations.
  },
});

export default VueStore;