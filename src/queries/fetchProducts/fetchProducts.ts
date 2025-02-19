import useSWR from "swr";
import { fetcher } from "../helpers";
import { IFetchProductRequest, IProduct } from "./fetchProducts.types";

export function useFetchProducts({ limit = 10, sort }: IFetchProductRequest) {
  return useSWR(`products?limit=${limit}&sort=${sort}`, fetcher<IProduct[]>);
}
