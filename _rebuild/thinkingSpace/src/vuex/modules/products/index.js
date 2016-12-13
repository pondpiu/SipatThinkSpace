// src/vuex/modules/products/index.js
import * as getters from './getters';

// initial state
const initialState = {
  all: [
    {
      title : "Solgaleo",
      description : "Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
      price : "31415.92"
    },
    {
      title : "Andre",
      description : "Pikachu ja nai, andre dayo",
      price : "33333.33"
    }
  ]
}

// mutations
const mutations = {
}

export default {
  state: { ...initialState },
  getters,
  mutations
}
