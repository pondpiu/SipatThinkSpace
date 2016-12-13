// src/vuex/modules/products/index.js
import * as actions from './actions';
import * as getters from './getters';
import ajaxHandler from  '../../../../helper_scripts/rajax';

import {
  SEARCH_PRODUCT
} from './mutation-types'

// initial state
const initialState = {
  all: [
    {
      title : "Solgaleo",
      description : "Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
      price : "31415.92",
      imgUrl : ""
    },
    {
      title : "Andre",
      description : "Pikachu ja nai, andre dayo",
      price : "33333.33",
      imgUrl : ""
    }
  ]
}

// mutations
const mutations = {

  [SEARCH_PRODUCT] (state,searchText){
    ajaxHandler.getProduct(searchText, function (res) {
      // push new data
      state.all = res.user;
    })
  }

}

export default {
  state: { ...initialState },
  actions,
  getters,
  mutations
}
