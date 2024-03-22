import React, { useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Dashboard from "./containers/dashboard/dashboard";
import NotFound from "./containers/notfound/notfound";
import RFiles from "./containers/RFiles/RFiles";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import Login from "./containers/login/login";
import "./App.css";
import ClaimReport from "./containers/reports/claimReport";
import PatientReport from "./containers/reports/patientReports";
import { useSelector } from "react-redux";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Login", "/", <PieChartOutlined />),
  getItem("Dashboard", "/dashboard", <PieChartOutlined />),
  getItem("RF", "RFDetails", <DesktopOutlined />),
  // getItem(
  //   "835",
  //   "sub1",
  //   <UserOutlined />
  //   //  [
  //   //   getItem("Tom", "3"),
  //   //   getItem("Bill", "4"),
  //   //   getItem("Alex", "5"),
  //   // ]
  // ),
  // getItem("Ack", "9", <FileOutlined />),
  getItem("Report", "sub2", <TeamOutlined />, [
    getItem("Claim", "reports/claim"),
    getItem("Patients", "reports/patients"),
  ]),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("/");
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const isLoggedIn = useSelector((state) => state.loginReducer?.loggedIn);
  console.log(isLoggedIn);
  const onMenuClick = (e) => {
    navigate(e?.key);
    setSelectedMenu(e?.key);
  };
  return (
    <>
      {!isLoggedIn ? (
        <div className="login-container">
          <Routes>
            <Route path="/" exact element={<Login />} />
          </Routes>
        </div>
      ) : (
        <div div className="App">
          <Layout
            style={{
              minHeight: "100vh",
            }}
          >
            <Sider
              collapsible
              collapsed={collapsed}
              onCollapse={(value) => setCollapsed(value)}
            >
              <div
                className="demo-logo-vertical"
                style={{ height: "64px" }}
              ></div>
              <Menu
                theme="dark"
                defaultSelectedKeys={[selectedMenu]}
                mode="inline"
                items={items}
                onClick={(e) => {
                  onMenuClick(e);
                }}
              />
            </Sider>
            <Layout>
              <Header
                style={{
                  padding: 0,
                  background: colorBgContainer,
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    fontWeight: "600",
                    fontSize: "24px",
                    paddingLeft: "12px",
                  }}
                >
                  Clearing House
                </div>
              </Header>
              <Content
                style={{
                  margin: "8px 16px",
                }}
              >
                <div
                  style={{
                    padding: 24,
                    maxHeight: "calc(100vh - 152px)",

                    overflow: "auto",
                    borderRadius: borderRadiusLG,
                  }}
                >
                  <Routes>
                    <Route path="/" exact element={<Dashboard />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/RFDetails" element={<RFiles />} />
                    <Route path="/reports/claim" element={<ClaimReport />} />
                    <Route
                      path="/reports/patients"
                      element={<PatientReport />}
                    />
                  </Routes>
                </div>
              </Content>
              <Footer
                style={{
                  textAlign: "center",
                }}
              >
                Clearing House ©{new Date().getFullYear()}
              </Footer>
            </Layout>
          </Layout>
        </div>
      )}
    </>
  );
};

export default App;
