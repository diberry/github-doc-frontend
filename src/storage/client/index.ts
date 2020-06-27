import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import gitHubNotesApp from './reducers'
// store
// https://stackoverflow.com/questions/52800877/has-anyone-came-across-this-error-in-ts-with-redux-dev-tools-property-redux
const rootReducer = gitHubNotesApp
const initialState = {}
const enhancers = []
const middleware = [
    thunk
]
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__() || compose;
  if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension)
  }
}
const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);


//@ts-ignore
const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers)



const printStore = (storeState:any ) =>console.log(`store = ${JSON.stringify(storeState)}`)
console.log(`initial store = ${JSON.stringify(store.getState())}`)
const unsubscribe = store.subscribe(() => printStore(store.getState()))

export default store