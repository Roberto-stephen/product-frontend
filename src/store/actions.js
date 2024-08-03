import axios from 'axios';

const API_URL = 'http://localhost:8000/api/products';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    try {
      const response = await axios.get(API_URL);
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_PRODUCTS_FAILURE, error: error.message });
    }
  };
};

// Tambahkan actions untuk CREATE, UPDATE, DELETE
