export const useProducts = () => {
  const {
    data: products,
    pending: loading,
    error,
    refresh,
  } = useFetch<Product[]>("https://fakestoreapi.com/products/");

  return {
    products,
    loading,
    error,
    refresh,
  };
};
