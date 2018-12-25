import { takeEvery } from 'redux-saga'

function* rootSaga() {
  yield takeEvery('Hello')
}

export default rootSaga