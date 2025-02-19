import { Typography, Card, Flex } from "antd";
import { CSSProperties } from "react";

const { Title, Paragraph, Text } = Typography;

const containerStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  padding: "24px",
  justifyContent: "start",
};

export function Contact() {
  return (
    <Flex vertical gap={20} style={containerStyle}>
      <Card>
        <Title level={3}>Contact Us (Not Really)</Title>
        <Paragraph>
          <Text>Email: fake.store@example.com (Don't try this)</Text>
          <br />
          <Text>Phone: 555-123-4567 (Also fake)</Text>
          <br />
          <Text>Address: 123 Fake Street, Anytown, USA (You get the idea)</Text>
        </Paragraph>
      </Card>
    </Flex>
  );
}
