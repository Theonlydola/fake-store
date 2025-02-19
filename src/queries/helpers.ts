export async function fetcher<Type>(url: string) {
  const response = await fetch(`https://fakestoreapi.com/${url}`);
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.message = await response.text();
    throw error;
  }
  return response.json() as Type;
}
