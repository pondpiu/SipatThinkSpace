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
  all: []
}

// mutations
const mutations = {

  [CREATE_BOOKING] (state,booking){
   state.all.push(booking);
 },
  [FETCH_BOOKINGS] (state,bookings){
    state.all = bookings
  }

}

export default {
  state: { ...initialState },
  actions,
  getters,
  mutations
}
