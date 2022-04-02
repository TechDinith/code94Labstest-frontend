import { takeEvery, call } from "redux-saga/effects";

const deleteProduct = () => {};

function* productWorker(): any {
  try {
    yield call(deleteProduct);
  } catch (error) {
    console.log(`error`, error);
  }
}

function* watchData() {
  try {
    yield takeEvery("admin/deleteProductRed", productWorker);
  } catch (error) {
    console.log(`error`, error);
  }
}

export default watchData;
