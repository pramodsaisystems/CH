import React, { useEffect } from "react";
import { Tabs, Card } from "antd";
import RFile837 from "./RFile837";
import RFile835 from "./RFile835";
import ACKFile from "./ACKFile";
import { useDispatch, useSelector } from "react-redux";
import { getF837, getF835, getAck } from "./actions";
import "./RFiles.css";

const { TabPane } = Tabs;

const RFiles = () => {
  const dispatch = useDispatch();
  const f837 = useSelector((state) => state.filesReducer.f837);
  const f835 = useSelector((state) => state.filesReducer.f835);
  const ack = useSelector((state) => state.filesReducer.ack);
  const loading = useSelector((state) => state.filesReducer.loading);
  useEffect(() => {
    //Invoke action to call API for saga
    dispatch(getF837());
  }, [dispatch]);

  const onTabChange = (e) => {
    if (e === "1") {
      dispatch(getF837());
    } else if (e === "2") {
      dispatch(getF835());
    } else if (e === "3") {
      dispatch(getAck());
    }
  };
  return (
    <div className="files-cont">
      <Card>
        <h2 style={{ textAlign: "left" }}>Files</h2>{" "}
        <Tabs defaultActiveKey="1" onChange={(e) => onTabChange(e)}>
          <TabPane tab={<div className="tab-title">837</div>} key="1">
            <RFile837 f837={f837} loading={loading} />
          </TabPane>
          <TabPane tab={<div className="tab-title">835</div>} key="2">
            <RFile835 f835={f835} loading={loading} />
          </TabPane>
          <TabPane tab={<div className="tab-title">Ack</div>} key="3">
            <ACKFile ack={ack} loading={loading} />
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default RFiles;
