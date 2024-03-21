import React, { useState } from "react";
import { Tag, Space, Tabs } from "antd";
import RFile837 from "./RFile837";
import RFile835 from "./RFile835";
import ACKFile from "./ACKFile";

const { TabPane } = Tabs;

const RFiles = () => {
  return (
    <div>
      {" "}
      <Tabs defaultActiveKey="1">
        <TabPane tab="837" key="1">
          <RFile837 />
        </TabPane>
        <TabPane tab="835" key="2">
          <RFile835 />
        </TabPane>
        <TabPane tab="ACK" key="3">
          <ACKFile />
        </TabPane>
      </Tabs>
      ,
    </div>
  );
};

export default RFiles;
