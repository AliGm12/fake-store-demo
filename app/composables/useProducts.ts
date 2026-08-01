export const useProducts = () => {
  const {
    data: products,
    pending: loading,
    error,
  } = useFetch<Product[]>("https://fakestoreapi.com/products/");

  return {
    products,
    loading,
    error,
  };
};
