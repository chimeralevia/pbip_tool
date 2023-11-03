import React from "react";
import LoadModelButton from "../components/LoadModelButton";
import { Col, Divider, Row } from "antd";
import D3Graph from "../components/D3Graph";
import HighlightNodesTable from "../components/HighlightNodesTable";
import NetworkStatistics from "../components/NetworkStatistics";

export default function NetworkGraphView() {
  return (
    <Row gutter={[16, 8]}>
      <Col span={20}>
        <D3Graph />
      </Col>
      <Col span={4} >
        <LoadModelButton />
        <Divider/>
        <NetworkStatistics/>
      </Col>
      <Col span={24}>
        <HighlightNodesTable />
      </Col>
    </Row>
  );
}
