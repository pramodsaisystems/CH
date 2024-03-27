import React, { useEffect } from "react";
import { Table, Tag, Card } from "antd";
import { getTimezoneDateTime, getTimezoneDate } from "../../utils/helper";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getReport, getPaymentsReport } from "./actions";

const PaymentReports = () => {
  const dispatch = useDispatch();
  const reports = useSelector((state) => state.reportReducer.reports);
  const loading = useSelector((state) => state.reportReducer.loading);
  const paymentsReport = useSelector(
    (state) => state.reportReducer.paymentsReport
  );

  useEffect(() => {
    //Invoke action to call API for saga
    dispatch(getReport());
    dispatch(getPaymentsReport());
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
      title: "Claim ID",
      dataIndex: "ClaimID",
      key: "ClaimID",
      render: (text, rec) => <div>{text}</div>,
    },
    {
      title: "Payer",
      dataIndex: "Payer",
      key: "Payer",
      render: (text, rec) => <div>{text}</div>,
    },
    {
      title: "Payee",
      dataIndex: "Payee",
      key: "Payee",
      render: (text, rec) => <div>{text}</div>,
    },
    {
      title: "Paid Date",
      dataIndex: "PaidDate",
      key: "PaidDate",
      render: (text, rec) => <div>{text}</div>,
    },

    {
      title: "Patient",
      dataIndex: "Patient",
      key: "Patient",
      render: (text) => <div>{text}</div>,
    },

    {
      title: "Service Date",
      dataIndex: "Service Date",
      key: "Service Date",
      render: (text) => <div>{text}</div>,
    },

    {
      title: "Charge Amount",
      dataIndex: "Charge Amount",
      key: "Charge Amount",
      render: (text) => <div>{text}</div>,
    },

    {
      title: "Paid Amount",
      dataIndex: "Paid Amount",
      key: "Paid Amount",
      render: (text) => <div>{text}</div>,
    },
  ];

  return (
    <div>
      <Card>
        <h2 style={{ textAlign: "left" }}>Payment Reports</h2>{" "}
        <Table
          columns={columns}
          dataSource={paymentsReport}
          pagination={{ defaultPageSize: "5" }}
          bordered
          loading={loading}
        />
      </Card>
    </div>
  );
};

export default PaymentReports;
