// src/vuex/modules/bookings/actions.js
import uuid from 'uuid';
import ajaxHandler from '../../../../helper_scripts/rajax.js';

import {
  FETCH_BOOKINGS,
  CREATE_BOOKINGS
} from './mutation-types';

export function createBooking ({ commit }, booking) {
  ajaxHandler.addBookings(booking,function(){
    
  });
  commit(CREATE_BOOKING, booking);
}

export function fetchBooking ({commit}){
  return ajaxHandler.getBookings(function(res){
    commit(FETCH_BOOKINGS,res)
  })
}
