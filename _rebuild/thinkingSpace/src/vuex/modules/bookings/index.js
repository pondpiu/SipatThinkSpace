// src/vuex/modules/bookings/index.js
import * as actions from './actions';
import * as getters from './getters';
import ajaxHandler from '../../../../helper_scripts/rajax.js'

import {
  CREATE_BOOKING,
  FETCH_BOOKINGS
} from './mutation-types'

// initial state
const initialState = {
  all: [
    {
      title:'hello',
      from:'11:11',
      to:'12:22'
    },
    {
      title:'you\'re welcome',
      from:'12:23',
      to:'14:22'
    }
  ]
}

// mutations
const mutations = {

  [CREATE_BOOKING] (state,booking){
   state.all.push(booking);
 },
  [FETCH_BOOKINGS] (state,bookings){
    state.all = bookings
    console.log(state.all);
  }

}

export default {
  state: { ...initialState },
  actions,
  getters,
  mutations
}
