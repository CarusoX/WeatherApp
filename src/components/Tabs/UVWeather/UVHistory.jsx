import PropTypes from "prop-types";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default class UVHistory extends React.Component {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";

  render() {
    const { UVHistoryData } = this.props;

    const data = UVHistoryData.map(x => ({
      date: x.date_iso
        .slice(5, 10)
        .split("-")
        .join("/"),
      uv1: Math.min(x.value, 3),
      uv2: Math.min(Math.max(0, x.value - 3), 3),
      uv3: Math.min(Math.max(0, x.value - 6), 2),
      uv4: Math.min(Math.max(0, x.value - 8), 3),
      uv5: Math.max(0, x.value - 11)
    }));

    return (
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv1"
              activeDot={false}
              stackId="1"
              stroke="green"
              fill="green"
            />
            <Area
              type="monotone"
              dataKey="uv2"
              activeDot={false}
              stackId="1"
              stroke="yellow"
              fill="yellow"
            />
            <Area
              type="monotone"
              dataKey="uv3"
              activeDot={false}
              stackId="1"
              stroke="orange"
              fill="orange"
            />
            <Area
              type="monotone"
              dataKey="uv4"
              activeDot={false}
              stackId="1"
              stroke="red"
              fill="red"
            />
            <Area
              type="monotone"
              dataKey="uv5"
              stackId="1"
              stroke="violet"
              fill="violet"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

UVHistory.propTypes = {
  UVHistoryData: PropTypes.arrayOf(PropTypes.shape).isRequired
};
