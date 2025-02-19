import { CSSProperties } from "react";
import {
  ErrorBoundary as ErrorBoundaryBase,
  FallbackProps,
} from "react-error-boundary";
import { ErrorBoundaryProps } from "./ErrorBoundary.types";
import { Button, Flex, Typography } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const ContainerStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  gap: "8px",
};

function FallbackComponent({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <Flex vertical style={ContainerStyle} justify="center" align="center">
      <ExclamationCircleOutlined
        style={{ fontSize: "90px", color: "red" }}
        color="#fcfcfc"
      />
      <Title level={3}>Something went Wrong</Title>
      <Text>{error.message}</Text>
      <Button onClick={resetErrorBoundary}>retry</Button>
    </Flex>
  );
}

export function ErrorBoundary({ children }: ErrorBoundaryProps) {
  return (
    <ErrorBoundaryBase
      FallbackComponent={FallbackComponent}
      onReset={() => location.reload()}
    >
      {children}
    </ErrorBoundaryBase>
  );
}
