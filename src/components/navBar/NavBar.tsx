import { Button, Dropdown, Flex, Grid, MenuProps, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";

const flexStyle: CSSProperties = {
  justifyContent: "space-between",
  alignItems: "center",
  gap: "12px",
};

export function NavBar() {
  const navigate = useNavigate();
  const { useBreakpoint } = Grid;
  const breakpoints = useBreakpoint();

  const isMobile = breakpoints.xs;

  if (isMobile) {
    const items: MenuProps["items"] = [
      {
        key: "1",
        label: (
          <Button color="default" variant="link" onClick={() => navigate("/")}>
            Home
          </Button>
        ),
      },
      {
        key: "2",
        label: (
          <Button
            color="default"
            variant="link"
            onClick={() => navigate("/about")}
          >
            About
          </Button>
        ),
      },
      {
        key: "3",
        label: (
          <Button
            color="default"
            variant="link"
            onClick={() => navigate("/contact")}
          >
            Contact
          </Button>
        ),
      },
    ];

    return (
      <Dropdown menu={{ items }}>
        <Space>
          Menu
          <DownOutlined />
        </Space>
      </Dropdown>
    );
  }

  return (
    <Flex style={flexStyle}>
      <Button color="default" variant="link" onClick={() => navigate("/")}>
        Home
      </Button>
      <Button color="default" variant="link" onClick={() => navigate("/about")}>
        About
      </Button>
      <Button
        color="default"
        variant="link"
        onClick={() => navigate("/contact")}
      >
        Contact
      </Button>
    </Flex>
  );
}
