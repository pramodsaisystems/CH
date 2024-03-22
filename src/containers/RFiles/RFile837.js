import React from "react";
import { Table, Tag, Space, Button } from "antd";
import { getTimezoneDateTime } from "../../utils/helper";
import moment from "moment";

const RFile837 = ({ f837 = [], loading = false }) => {
  const getDate = function (row) {
    return getTimezoneDateTime(
      moment(row?.date).format("YYYY-MM-DD HH:MM:SS"),
      "MM/DD/YYYY hh:mm a"
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
