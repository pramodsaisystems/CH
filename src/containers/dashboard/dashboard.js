import React, { useEffect } from "react";
import { Column, DualAxes, Pie } from "@ant-design/plots";
import { Row, Col, Card, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  // data1,
  data2,
  uvBillData,
  uvBillData1,
  transformData,
  transformData1,
} from "./data";
import { getData, getNoOfClaims } from "./actions";

const Dashboard = () => {
  // user to invoke redux actions
  const dispatch = useDispatch();
  //get data from redux store
  const data1 = useSelector((state) => state.dashboardReducer.data);
  useEffect(() => {
    debugger;
    //Invoke action to call API for saga
    dispatch(getNoOfClaims());
  }, [dispatch]);
  const config = {
    data: data1,
    xField: "type",
    yField: "claim",
    // shapeField: "column25D",
    style: {
      fill: "#22CBCC",
    },
    // fill: () => {
    //   return "#22CBCC";
    // },
    label: {
      text: (originData) => {
        const val = parseFloat(originData.claim);
        if (val < 0.05) {
          return (val * 100).toFixed(1) + "%";
        }
        return "";
      },
      offset: 10,
    },

    legend: false,
  };

  const config1 = {
    data: data2,
    xField: "type",
    yField: "patients",
    style: {
      fill: "#FFA500",
    },
    label: {
      text: (originData) => {
        const val = parseFloat(originData.patients);
        if (val < 0.05) {
          return (val * 100).toFixed(1) + "%";
        }
        return "";
      },
      offset: 10,
    },

    legend: false,
  };

  const config2 = {
    xField: "time",
    legend: {
      color: {
        itemMarker: "round",
        itemMarkerSize: 14,
        position: "right",
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
        yField: "count",
        colorField: () => "count",
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
      category10: [
        "#F4A49E",
        "#FACDAA",
        "#EE7B91",
        "#E85285",
        "#BE408C",
        "#BE408C",
      ],
    },
  };

  const config3 = {
    xField: "time",
    legend: {
      color: {
        itemMarker: "round",
        itemMarkerSize: 14,
        position: "right",
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
        yField: "count",
        colorField: () => "count",
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
      category10: [
        "#F4A49E",
        "#FACDAA",
        "#EE7B91",
        "#E85285",
        "#BE408C",
        "#BE408C",
      ],
    },
  };

  const config4 = {
    data: [
      { patients: "Accepted", percentage: 0.6 },
      { patients: "Rejected", percentage: 0.4 },
    ],
    angleField: "percentage",
    colorField: "patients",
    legend: false,
    label: {
      text: ({ patients, percentage }) => {
        return `${patients}: ${parseInt(percentage * 100)}%`;
      },
      fill: "#fff",
      fontSize: 12,
    },
    style: {
      padding: 10,
      fill: ({ patients }) => {
        if (patients === "Accepted") {
          return "p(a)https://gw.alipayobjects.com/zos/antfincdn/FioHMFgIld/pie-wenli1.png";
        }
        return "p(a)https://gw.alipayobjects.com/zos/antfincdn/Ye2DqRx%2627/pie-wenli2.png";
      },
    },
  };

  return (
    <div>
      <h2 style={{ textAlign: "left" }}>Dashboard</h2>

      <Row gutter={[8, 8]}>
        <Col span={8}>
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
        </Col>

        <Col span={8}>
          <Card hoverable>
            {/* <h2 style={{ visibility: "hidden" }}> Patients</h2> */}
            <Pie height={267} width={300} {...config4}></Pie>
          </Card>
        </Col>

        <Col span={12}>
          <Card hoverable>
            <h2>No. of Claims by Provider</h2>
            <DualAxes height={250} width={550} {...config2} />
          </Card>
        </Col>
        <Col span={12}>
          <Card hoverable>
            <h2>No. of Claims by Payer</h2>
            <DualAxes height={250} width={550} {...config3} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
