import { CSSProperties, useEffect, useState } from "react";
import { ErrorBoundary } from "../components";
import { useFetchProducts } from "../queries/fetchProducts/fetchProducts";
import { Button, Flex, Spin } from "antd";
import { ProductCard } from "../components/card";
import { IProduct } from "../queries/fetchProducts/fetchProducts.types";

const Locale = {
  asc: "Ascending",
  desc: "Descending",
};

const containerStyle: CSSProperties = {
  gap: "8px",
  width: "90%",
  padding: "24px 8px",
  justifyContent: "center",
};

function LoadingState() {
  return (
    <Flex style={{ height: "100%" }} align="center">
      <Spin size="large" />
    </Flex>
  );
}

function HomeData() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [sort, setSort] = useState<"asc" | "desc">("asc");
  const [limit, setLimit] = useState<number>(5);

  const { data, isLoading } = useFetchProducts({
    limit,
    sort,
  });

  useEffect(() => {
    if (data) setProducts(data);
  }, [data]);

  function onChangeSort() {
    if (sort === "asc") {
      setSort("desc");
    } else {
      setSort("asc");
    }
  }

  function onSeeMore() {
    setLimit(limit + 5);
  }

  const shouldRenderSeeMoreButton = !isLoading && limit < 20;

  // Loading state for the whole page
  if (isLoading && !products.length) return <LoadingState />;

  return (
    <Flex vertical justify="start" align="center">
      <Flex vertical style={containerStyle}>
        <Flex justify="end">
          <Button onClick={onChangeSort}>{Locale[sort]}</Button>
        </Flex>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {shouldRenderSeeMoreButton && (
          <Flex justify="center" style={{ marginBottom: "8px" }}>
            <Button type="link" onClick={onSeeMore}>
              See More
            </Button>
          </Flex>
        )}
      </Flex>
      {/* Loading state for the see more button */}
      {isLoading && !!products.length && <LoadingState />}
    </Flex>
  );
}

export function Home() {
  return (
    <ErrorBoundary>
      <HomeData />
    </ErrorBoundary>
  );
}
