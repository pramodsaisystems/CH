import React from "react";
import { Table } from "antd";
import { getTimezoneDateTime } from "../../utils/helper";
import moment from "moment";

const RFile835 = ({ f835 = [], loading = false }) => {
  const getDate = function (row) {
    return getTimezoneDateTime(
      moment(row?.date).format("YYYY-MM-DD HH:MM:SS"),
      "MM/DD/YYYY hh:mm a"
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
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={f835}
        pagination={{ defaultPageSize: "5" }}
        // bordered
        loading={loading}
      />
    </div>
  );
};

export default RFile835;
