import { Typography, List, Flex, Card } from "antd";

const { Title, Paragraph } = Typography;

export function About() {
  return (
    <Flex vertical gap={20} style={{ padding: "24px" }}>
      <Card>
        <Title level={3}>About Our Fake Store</Title>
        <Paragraph>
          Welcome to our delightful fake store! We're dedicated to providing you
          with an unparalleled (and entirely simulated) shopping experience. We
          believe that everyone deserves access to high-quality (imaginary)
          products at incredibly reasonable (nonexistent) prices.
        </Paragraph>
        <Paragraph>
          Our mission is to create a fun and engaging platform where you can
          explore a wide variety of (fictional) items, from trendy (pretend)
          clothing and stylish (made-up) accessories to cutting-edge (simulated)
          electronics and innovative (non-existent) gadgets.
        </Paragraph>
        <Paragraph>
          We're passionate about (pretending to be) passionate about customer
          satisfaction. Our team of highly trained (imaginary) customer service
          representatives is always ready to assist you with any (hypothetical)
          questions or concerns you may have.
        </Paragraph>
      </Card>
      <Card>
        <Title level={3}>Our Story (The Fake Version)</Title>
        <Paragraph>
          Founded in 2023 by a group of visionary (and slightly bored)
          developers, our fake store was born out of a desire to create a space
          where people could experience the joy of online shopping without the
          hassle of actually spending money. We believe that browsing through
          (imaginary) products can be just as fun as buying them (sometimes even
          more so!).
        </Paragraph>
      </Card>
      <Card>
        <Title level={3}>Why Choose Us (If We Were Real)?</Title>
        <List
          dataSource={[
            {
              title: "Wide Selection",
              description:
                "We offer a vast collection of (entirely made-up) products to cater to every taste and style.",
            },
            {
              title: "Competitive Prices",
              description:
                "Our prices are so low, they're (completely fictional)!",
            },
            {
              title: "Exceptional Customer Service",
              description:
                "Our (imaginary) customer service team is always happy to help.",
            },
            {
              title: "Secure Shopping",
              description: "Your (pretend) data is safe with us!",
            },
            {
              title: "Fast Shipping",
              description:
                "We offer lightning-fast (simulated) shipping on all orders.",
            },
          ]}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
        <Paragraph>
          Thank you for visiting our fake store! We hope you enjoy your
          (entirely simulated) shopping experience.
        </Paragraph>
      </Card>
      <br />
    </Flex>
  );
}
