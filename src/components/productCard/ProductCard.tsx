import { Card, Flex, Image, Rate, Typography } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { CSSProperties } from "react";
import { IProductCardProps } from "./ProductCard.types";

const cardStyle: CSSProperties = {
  padding: "4px 8px",
  borderRadius: "15px",
  justifyContent: "start",
  textAlign: "start",
};

const { Text } = Typography;

export function ProductCard({ product }: IProductCardProps) {
  const breakpoints = useBreakpoint();
  const isMobile = breakpoints.xs;

  return (
    <Card>
      <Flex vertical gap="12px" style={cardStyle}>
        <Flex
          gap="4px"
          justify="space-between"
          align={isMobile ? "start" : "center"}
        >
          <Rate allowHalf defaultValue={product.rating.rate} disabled />
          <Text strong>${product.price.toFixed(2)}</Text>
        </Flex>
        <Text strong>{product.title}</Text>
        <Flex style={{ textAlign: "start" }} gap={12} vertical={isMobile}>
          <Image
            alt={product.description}
            width={isMobile ? "100%" : 200}
            height={200}
            style={{ objectFit: "cover" }}
            src={product.image}
          />

          <Flex vertical gap={8} style={{ width: isMobile ? "100%" : "80%" }}>
            <Text strong>Description</Text>
            <Text>{product.description}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
