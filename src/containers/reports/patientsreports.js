import React, { useEffect } from "react";
import { Table, Tag, Card } from "antd";
import { getTimezoneDateTime, getTimezoneDate } from "../../utils/helper";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getReport } from "./actions";

const PatientReports = () => {
  const dispatch = useDispatch();
  const reports = useSelector((state) => state.reportReducer.reports);
  const loading = useSelector((state) => state.reportReducer.loading);

  useEffect(() => {
    //Invoke action to call API for saga
    dispatch(getReport());
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
      title: "Patient Name",
      dataIndex: "PatientFirstName",
      key: "PatientFirstName",
      render: (text, rec) => (
        <div>
          {rec.PatientFirstName} {rec.PatientLastName}
        </div>
      ),
    },
    {
      title: "Received Date",
      dataIndex: "RecievedDate",
      key: "RecievedDate",
      render: (text) => <div>{getDate(text)}</div>,
    },
    {
      title: "Provider Name",
      dataIndex: "ProviderName",
      key: "ProviderName",
    },
    {
      title: "Payer Name",
      dataIndex: "PayorName",
      key: "PayorName",
    },
    {
      title: "Date / Time",
      dataIndex: "date",
      key: "date",
      render: (text) => <div>{getDateTime(text)}</div>,
    },

    {
      title: "File Name",
      dataIndex: "FileName",
      key: "FileName",
    },

    {
      title: "Status",
      key: "Status",
      dataIndex: "Status",
      render: (_, { Status }) => (
        <>
          <Tag
            color={
              Status?.toLowerCase() === "completed" ||
              Status?.toLowerCase() === "processed"
                ? "green"
                : "yellow"
            }
            key={Status}
          >
            {Status.toUpperCase()}
          </Tag>
        </>
      ),
    },
    {
      title: "Last Updated",
      dataIndex: "lastUpdated",
      key: "lastUpdated",
      render: (text) => <div>{getDate(text)}</div>,
    },
  ];

  return (
    <div>
      <Card>
        <h2 style={{ textAlign: "left" }}>Patient Reports</h2>{" "}
        <Table
          columns={columns}
          dataSource={reports}
          pagination={{ defaultPageSize: "5" }}
          bordered
          loading={loading}
        />
      </Card>
    </div>
  );
};

export default PatientReports;
