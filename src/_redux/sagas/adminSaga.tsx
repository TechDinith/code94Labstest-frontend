import axios from "axios";
import { takeEvery, call } from "redux-saga/effects";
import store from "../store";

const deleteProduct = () => {
  const id = store.getState().adminSlice.key;
  axios.delete(`http://localhost:4000/products/${id}`).then((res) => res.data);
};

const favProduct = () => {
  const id = store.getState().adminSlice.key;
  axios.patch(`http://localhost:4000/products/${id}`).then((res) => res.data);
};

function* deleteWorker(): any {
  try {
    yield call(deleteProduct);
  } catch (error) {
    console.log(`error`, error);
  }
}

function* favWorker(): any {
  try {
    yield call(favProduct);
  } catch (error) {
    console.log(`error`, error);
  }
}

function* watchData() {
  try {
    yield takeEvery("admin/deleteProductRed", deleteWorker);
    yield takeEvery("admin/favoriteRed", favWorker);
  } catch (error) {
    console.log(`error`, error);
  }
}

export default watchData;
