export const useCategories = () => {
  const {
    data: categories,
    pending: loading,
    error,
  } = useFetch<string[]>("https://fakestoreapi.com/products/categories");

  return {
    categories,
    loading,
    error,
  };
};
