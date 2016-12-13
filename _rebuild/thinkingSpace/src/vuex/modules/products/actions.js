// src/vuex/modules/products/actions.js
import uuid from 'uuid';

import {
  SEARCH_PRODUCT
} from './mutation-types';

export function searchProduct ({ commit }, productId) {
  commit(SEARCH_PRODUCT, productId)
}
