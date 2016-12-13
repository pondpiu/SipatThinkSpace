// src/vuex/modules/bookings/actions.js
import uuid from 'uuid';

import {
  CREATE_BOOKINGS
} from './mutation-types';

export function createBooking ({ commit }, booking) {
  commit(CREATE_BOOKING, booking)
}
