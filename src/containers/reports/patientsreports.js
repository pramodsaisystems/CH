import React, { useEffect } from "react";
import { Table, Tag, Card } from "antd";
import { getTimezoneDateTime, getTimezoneDate } from "../../utils/helper";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getPatientsReport } from "./actions";

const PatientReports = () => {
  const dispatch = useDispatch();
  const patientsReport = useSelector(
    (state) => state.reportReducer.patientsReport
  );
  const loading = useSelector((state) => state.reportReducer.loading);

  useEffect(() => {
    //Invoke action to call API for saga
    // dispatch(getReport());
  }, [dispatch]);
  const getDateTime = function (date) {
    return getTimezoneDateTime(
      moment(date).format("YYYY-MM-DD HH:MM:SS"),
      "MM/DD/YYYY hh:mm a"
    );
  };

  const getDate = function (date) {
    return getTimezoneDate(moment(date).format("YYYY-MM-DD"), "MM/DD/YYYY");
  };

  const columns = [
    {
      title: "ID and Name",
      dataIndex: "PateintId",
      key: "PateintId",
      render: (text, rec) => (
        <div>
          {rec?.PateintId ? rec?.PateintId : ""}{" "}
          {rec?.PatientName ? `- ${rec?.PatientName}` : ""}
        </div>
      ),
    },

    {
      title: "No Of Claims",
      dataIndex: "NoOfClaims",
      key: "NoOfClaims",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "No Of Lines",
      dataIndex: "NoOfLines",
      key: "NoOfLines",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "Total Charge Amt",
      dataIndex: "TotalChargeAmt",
      key: "TotalChargeAmt",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "Avg Charge Amt",
      dataIndex: "AverageChargeAmt",
      key: "AverageChargeAmt",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "Max Charge Amt",
      dataIndex: "MaxChargeAmt",
      key: "MaxChargeAmt",
      render: (text) => <div>{text}</div>,
    },
  ];

  return (
    <div className="patient-cont">
      <Card>
        <h2 style={{ textAlign: "left" }}>Patient Reports</h2>{" "}
        <Table
          columns={columns}
          dataSource={patientsReport}
          pagination={{ defaultPageSize: "5" }}
          loading={loading}
        />
      </Card>
    </div>
  );
};

export default PatientReports;
