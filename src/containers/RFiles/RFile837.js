import React from "react";
import { Table, Tag, Space, Button } from "antd";
import { getTimezoneDateTime } from "../../utils/helper";
import moment from "moment";

const RFile837 = ({ f837 = [], loading = false, onPushClick }) => {
  const getDate = function (date) {
    return getTimezoneDateTime(
      moment(date).format("YYYY-MM-DD HH:MM:SS"),
      "MM/DD/YYYY, hh:mm a"
    );
  };
  const columns = [
    {
      title: "File Name",
      dataIndex: "FileName",
      key: "FileName",
    },
    {
      title: "File Type",
      dataIndex: "FileType",
      key: "FileType",
    },
    {
      title: "Last Modified",
      dataIndex: "lastUpdated",
      key: "lastUpdated",
      render: (text) => <div>{getDate(text)}</div>,
    },
    {
      title: "Loaded",
      dataIndex: "RecievedDate",
      key: "RecievedDate",
      render: (text) => <div>{getDate(text)}</div>,
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
            <Button type="primary" onClick={() => onPushClick(record.FileName)}>
              Push
            </Button>
          )}
        </Space>
      ),
    },
  ];

  return (
    <div>
      {" "}
      <Table
        columns={columns}
        dataSource={f837}
        pagination={{ defaultPageSize: "5" }}
        bordered
        loading={loading}
      />
    </div>
  );
};

export default RFile837;
