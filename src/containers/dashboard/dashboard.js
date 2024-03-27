import React, { useEffect } from "react";
import { Column, DualAxes, Pie } from "@ant-design/plots";
import { Row, Col, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  // data1,
  data2,
  uvBillData,
  uvBillData1,
  transformData,
  transformData1,
} from "./data";
import { getData } from "./actions";
import "./dashboard.css";

const Dashboard = () => {
  // user to invoke redux actions
  const dispatch = useDispatch();
  //get data from redux store
  const data1 = useSelector((state) => state.dashboardReducer.data);
  // const dashboardData = useSelector(
  //   (state) => state.dashboardReducer.dashboardData
  // );

  const dashboardData = {
    startDate: "2024-03-21",
    endDate: "2024-03-24",
    totalCharges: 5500,
    averageAmount: 392.85714285714283,
    ServiceLines: 10,
    numberOfClaims: 14,
    paidAmount: 5500,
    averagePaidAmount: 392.85714285714283,
    noOfPayments: 13,
    paymentRange: "2024-03-21 2024-03-24",
  };

  useEffect(() => {
    //Invoke action to call API for saga
    dispatch(getData());
  }, [dispatch]);

  // const config = {
  //   data: data1,
  //   xField: "type",
  //   yField: "claim",
  //   // shapeField: "column25D",
  //   style: {
  //     fill: "#22CBCC",
  //   },
  //   // fill: () => {
  //   //   return "#22CBCC";
  //   // },
  //   label: {
  //     text: (originData) => {
  //       const val = parseFloat(originData.claim);
  //       if (val < 0.05) {
  //         return (val * 100).toFixed(1) + "%";
  //       }
  //       return "";
  //     },
  //     offset: 10,
  //   },

  //   legend: false,
  // };

  // const config1 = {
  //   data: data2,
  //   xField: "type",
  //   yField: "patients",
  //   style: {
  //     fill: "#FFA500",
  //   },
  //   label: {
  //     text: (originData) => {
  //       const val = parseFloat(originData.patients);
  //       if (val < 0.05) {
  //         return (val * 100).toFixed(1) + "%";
  //       }
  //       return "";
  //     },
  //     offset: 10,
  //   },

  //   legend: false,
  // };

  const config2 = {
    xField: "time",
    legend: {
      color: {
        position: "bottom",
        layout: { justifyContent: "center" },
        itemMarker: "round",
        // itemMarkerSize: 14,
      },
    },
    children: [
      {
        data: uvBillData,
        type: "interval",
        yField: "value",
        stack: true,
        colorField: "type",
        style: { maxWidth: 80 },
        label: { position: "inside" },
        scale: { y: { domainMax: 1200 } },
        interaction: {
          elementHighlight: true,
          elementHighlightByColor: { background: true },
        },
      },
      {
        data: transformData,
        type: "line",
        yField: "Count",
        colorField: () => "Count",
        style: { lineWidth: 2 },
        axis: { y: { position: "right" } },
        interaction: {
          tooltip: {
            crosshairs: false,
            marker: false,
          },
        },
      },
    ],
    theme: {
      category10: ["#01A0B9", "#01AEC7", "#00BFDD", "#806600"],
    },
    geometryOptions: [{ geometry: "line" }, { geometry: "line" }],
  };

  const config3 = {
    xField: "time",
    legend: {
      color: {
        position: "bottom",
        layout: { justifyContent: "center" },
        itemMarker: "round",
        // itemMarkerSize: 14,
      },
    },
    children: [
      {
        data: uvBillData1,
        type: "interval",
        yField: "value",
        stack: true,
        colorField: "type",
        style: { maxWidth: 80 },
        label: { position: "inside" },
        scale: { y: { domainMax: 1200 } },
        interaction: {
          elementHighlight: true,
          elementHighlightByColor: { background: true },
        },
      },
      {
        data: transformData1,
        type: "line",
        yField: "Count",
        colorField: () => "Count",
        style: { lineWidth: 2 },
        axis: { y: { position: "right" } },
        interaction: {
          tooltip: {
            crosshairs: false,
            marker: false,
          },
        },
      },
    ],
    theme: {
      category10: ["#1169AF", "#4E92D1", "#8BBCF3", "#FFCC33"],
    },
  };

  // const config4 = {
  //   data: [
  //     { patients: "Accepted", percentage: 0.6 },
  //     { patients: "Rejected", percentage: 0.4 },
  //   ],
  //   angleField: "percentage",
  //   colorField: "patients",
  //   legend: false,
  //   label: {
  //     text: ({ patients, percentage }) => {
  //       return `${patients}: ${parseInt(percentage * 100)}%`;
  //     },
  //     fill: "#fff",
  //     fontSize: 12,
  //   },
  //   style: {
  //     padding: 10,
  //     fill: ({ patients }) => {
  //       if (patients === "Accepted") {
  //         return "p(a)https://gw.alipayobjects.com/zos/antfincdn/FioHMFgIld/pie-wenli1.png";
  //       }
  //       return "p(a)https://gw.alipayobjects.com/zos/antfincdn/Ye2DqRx%2627/pie-wenli2.png";
  //     },
  //   },
  // };

  return (
    <div className="dash-cont">
      <h2 className="dash-title">Dashboard</h2>

      <Row gutter={[8, 8]}>
        <Col span={12}>
          <div className="claim-stats-title">
            Key Claim Stats{" "}
            <span className="claim-stats-range">
              (Date Range:
              {dashboardData?.startDate && dashboardData?.endDate
                ? `${dashboardData?.startDate} - ${dashboardData?.endDate}`
                : 0}
              )
            </span>
          </div>

          <Row>
            <Col span={12}>
              <Card className="no-padding">
                <Row>
                  <Col span={24} className="card-title-claims">
                    {dashboardData?.totalCharges
                      ? "$" + dashboardData?.totalCharges
                      : "$0"}
                  </Col>
                  <Col span={24} className="card-footer">
                    Charge amount
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col span={12}>
              <Card className="no-padding">
                <Row>
                  <Col span={24} className="card-title-claims">
                    {dashboardData?.averageAmount
                      ? "$" + Math.round(dashboardData?.averageAmount)
                      : "$0"}
                  </Col>
                  <Col span={24} className="card-footer">
                    Average charge amount
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>

          <Row className="dash-card-align-vert">
            <Col span={12}>
              <Card className="no-padding">
                <Row>
                  <Col span={24} className="card-title-claims">
                    {dashboardData?.numberOfClaims
                      ? dashboardData?.numberOfClaims
                      : 0}
                  </Col>
                  <Col span={24} className="card-footer">
                    Claims
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={12}>
              <Card className="no-padding">
                <Row>
                  <Col span={24} className="card-title-claims">
                    {dashboardData?.ServiceLines
                      ? dashboardData?.ServiceLines
                      : 0}
                  </Col>
                  <Col span={24} className="card-footer">
                    Service lines
                  </Col>
                </Row>
              </Card>
            </Col>

            {/* <Col span={8}>
              <Card className="no-padding">
                <Row>
                  <Col
                    span={24}
                    className="card-title-claims"
                    style={{ fontSize: "20px" }}
                  >
                    {dashboardData?.startDate && dashboardData?.endDate
                      ? `${dashboardData?.startDate} - ${dashboardData?.endDate}`
                      : 0}
                  </Col>
                  <Col span={24} className="card-footer">
                    Service dates range
                  </Col>
                </Row>
              </Card>
            </Col> */}
          </Row>
        </Col>

        <Col span={12}>
          <div className="claim-stats-title">
            Key Payment Stats{" "}
            <span className="payment-stats-range">
              (Date Range:
              {dashboardData?.paymentRange ? dashboardData?.paymentRange : ""})
            </span>
          </div>

          <Row>
            <Col span={12}>
              <Card className="no-padding">
                <Row>
                  <Col span={24} className="card-title-payments">
                    {dashboardData?.paidAmount
                      ? "$" + dashboardData?.paidAmount
                      : ""}
                  </Col>
                  <Col span={24} className="card-footer-payment">
                    Paid amount
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={12}>
              <Card className="no-padding">
                <Row>
                  <Col span={24} className="card-title-payments">
                    {dashboardData?.averagePaidAmount
                      ? "$" + Math.round(dashboardData?.averagePaidAmount)
                      : ""}
                  </Col>
                  <Col span={24} className="card-footer-payment">
                    Average paid amount
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>

          <Row className="dash-card-align-vert">
            <Col span={12}>
              <Card className="no-padding">
                <Row>
                  <Col span={24} className="card-title-payments">
                    {dashboardData?.noOfPayments
                      ? dashboardData?.noOfPayments
                      : ""}
                  </Col>
                  <Col span={24} className="card-footer-payment">
                    Payments
                  </Col>
                </Row>
              </Card>
            </Col>
            {/* <Col span={8}>
              <Card className="no-padding">
                <Row>
                  <Col
                    span={24}
                    className="card-title-payments"
                    style={{ fontSize: "20px" }}
                  >
                    {dashboardData?.paymentRange
                      ? dashboardData?.paymentRange
                      : ""}
                  </Col>
                  <Col span={24} className="card-footer-payment">
                    Payments dates range
                  </Col>
                </Row>
              </Card>
            </Col> */}
          </Row>
        </Col>
      </Row>
      {/* <Col span={8}>
          <Card hoverable>
            <h2>No. of Claims</h2>
            <Column height={200} width={300} {...config}></Column>
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable>
            <h2>No. of Patients</h2>
            <Column height={200} width={300} {...config1}></Column>
          </Card>
        </Col> */}

      {/* <Col span={8}>
          <Card hoverable>
            <h2 style={{ visibility: "hidden" }}> Patients</h2>
            <Pie height={267} width={300} {...config4}></Pie>
          </Card>
        </Col> */}

      <Row>
        <Col span={12}>
          <Card hoverable className="provider-claims-card">
            <div className="provider-claims-title">Claims by Provider</div>
            <DualAxes height={250} width={550} {...config2} />
          </Card>
        </Col>
        <Col span={12}>
          <Card
            hoverable
            className="provider-claims-card"
            style={{ marginRight: "none" }}
          >
            <div className="provider-claims-title">Claims by Payer</div>
            <DualAxes height={250} width={550} {...config3} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
