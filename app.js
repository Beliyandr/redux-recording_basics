// import { actions as amountActions } from './store/amount.js';
// import { actions as goodsActions } from './store/goods.js';
// import { actions as positionActions } from './store/position.js';
// import { store } from './store/index.js';

// const { subscribe, getState, dispatch } = store;

// const state = getState();
// console.log(state);

// const unsubscribe = subscribe(() => {
//   const state = getState();
//   console.log(state.amount);
// });

// dispatch(positionActions.moveUp())
// dispatch(positionActions.moveUp())
// dispatch(positionActions.moveLeft())
// dispatch(amountActions.add(50));
// dispatch(amountActions.add(10));
// dispatch(goodsActions.add(10));
// dispatch(amountActions.take(10));
// dispatch(amountActions.take(40));
// dispatch(goodsActions.add(40));
// dispatch(amountActions.clear());

// unsubscribe();

import { actions as amountActions } from './store/amount.js';
import { actions as goodsActions } from './store/goods.js';
import { actions as positionActions } from './store/position.js';
import { store } from './store/index.js';

const { dispatch, subscribe, getState } = store


const state = getState();
console.log('Initial amount:', state);

const unsubscribe = subscribe(() => {
  const state = getState();
  console.log('Amount changed:', state);
});



dispatch(amountActions.add(50))
dispatch(amountActions.take(10))
dispatch(amountActions.take(10))
dispatch(goodsActions.take(10))
dispatch(amountActions.add(50))
dispatch(goodsActions.add(50))
dispatch(positionActions.moveUp())
dispatch(positionActions.moveUp())
dispatch(positionActions.moveUp())
dispatch(positionActions.moveUp())
dispatch(positionActions.moveUp())
dispatch(positionActions.moveDown())
dispatch(goodsActions.add(50))
dispatch(amountActions.clear())


unsubscribe()
