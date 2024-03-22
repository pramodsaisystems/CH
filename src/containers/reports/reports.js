import React, { useEffect } from "react";
import { Table, Tag, Space, Button, Card } from "antd";
import { getTimezoneDateTime } from "../../utils/helper";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getReport } from "./actions";

const Reports = () => {
  const dispatch = useDispatch();
  const reports = useSelector((state) => state.reportReducer.reports);
  const loading = useSelector((state) => state.reportReducer.loading);

  useEffect(() => {
    //Invoke action to call API for saga
    dispatch(getReport());
  }, [dispatch]);
  const getDate = function (row) {
    return getTimezoneDateTime(
      moment(row?.date).format("YYYY-MM-DD HH:MM:SS"),
      "MM/DD/YYYY" + " / " + "hh:mm"
    );
  };
  const columns = [
    {
      title: "Date / Time",
      dataIndex: "date",
      key: "date",
      render: (text, rec) => <div>{getDate(rec)}</div>,
    },

    {
      title: "FileName",
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
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {record?.Status?.toLowerCase() === "completed" ||
          record?.Status?.toLowerCase() === "processed" ? (
            <div>{getDate(record.lastUpdated)}</div>
          ) : (
            <Button type="primary">Push</Button>
          )}
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Card>
        <h2 style={{ textAlign: "left" }}>Reports</h2>{" "}
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

export default Reports;
