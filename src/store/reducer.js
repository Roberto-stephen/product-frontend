const initialState = {
    products: [],
    loading: false,
    error: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_PRODUCTS_SUCCESS':
        return { ...state, loading: false, products: action.payload };
      case 'FETCH_PRODUCTS_FAILURE':
        return { ...state, loading: false, error: action.error };
      // Tambahkan case untuk CREATE, UPDATE, DELETE
      default:
        return state;
    }
  };
  
  export default reducer;
  