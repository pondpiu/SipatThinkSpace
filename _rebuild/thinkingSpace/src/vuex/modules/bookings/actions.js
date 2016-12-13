// src/vuex/modules/bookings/actions.js
import uuid from 'uuid';
import ajaxHandler from '../../../../helper_scripts/rajax.js';

import {
  FETCH_BOOKINGS,
  CREATE_BOOKING
} from './mutation-types';

export function fetchBooking ({commit}){
  console.log('fetching');
  return ajaxHandler.getBookings(function(res){
    commit(FETCH_BOOKINGS,res)
  })
}

export function createBooking ({ commit }, booking) {
  ajaxHandler.addBookings(booking,function(){
  });
  return commit(CREATE_BOOKING, booking);
}
