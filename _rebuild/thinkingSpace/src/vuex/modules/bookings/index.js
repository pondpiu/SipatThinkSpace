// src/vuex/modules/bookings/index.js
import * as actions from './actions';
import * as getters from './getters';

import {
  CREATE_BOOKING
} from './mutation-types'

// initial state
const initialState = {
  all: [
    {
      title : "Solgaleo",
      from : "15:30",
      until : "16:30"
    },
    {
      title : "Andre",
      from : "17:00",
      until : "19:00"
    }
  ]
}

// mutations
const mutations = {

  [CREATE_BOOKING] (state,booking){
   State.all.push(booking);
  }

}

export default {
  state: { ...initialState },
  actions,
  getters,
  mutations
}
