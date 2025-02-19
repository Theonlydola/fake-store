import { Route, Routes, useNavigate } from "react-router-dom";
import { About, Contact, Home } from "./views";
import { Button, ConfigProvider, Flex, Layout, theme } from "antd";
import { CSSProperties, useEffect, useState } from "react";
import { NavBar } from "./components";
import {
  MoonOutlined,
  ShoppingCartOutlined,
  SunOutlined,
} from "@ant-design/icons";

const { darkAlgorithm, defaultAlgorithm } = theme;
const { Header, Content } = Layout;

const headerStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "#4096ff",
  justifyContent: "space-between",
};

const contentStyle: CSSProperties = {
  height: "100%",
  display: "flex",
  overflowY: "auto",
  justifyContent: "center",
};

const layoutStyle: CSSProperties = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
};

function App() {
  const navigate = useNavigate();

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setIsDarkMode(savedMode === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", String(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const currentTheme = isDarkMode ? darkAlgorithm : defaultAlgorithm;
  return (
    <ConfigProvider
      theme={{
        algorithm: currentTheme,
      }}
    >
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <Flex align="center" gap="12px">
            <Flex align="center">
              <ShoppingCartOutlined
                onClick={() => navigate("/")}
                style={{ fontSize: "36px" }}
              />
            </Flex>
            <NavBar />
          </Flex>
          <Button variant="outlined" onClick={toggleDarkMode}>
            {isDarkMode ? <SunOutlined /> : <MoonOutlined />}
          </Button>
        </Header>

        <Content style={contentStyle}>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
