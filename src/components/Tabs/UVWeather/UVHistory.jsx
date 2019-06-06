import PropTypes from "prop-types";
import React from "react";
import { Message } from "semantic-ui-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const CustomizedAxisTick = props => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-35)"
      >
        {payload.value}
      </text>
    </g>
  );
};

const getColor = index => {
  if (index < 3) return "green";
  if (index < 6) return "yellow";
  if (index < 8) return "orange";
  if (index < 11) return "red";
  return "violet";
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    const index = payload.reduce((a, b) => a + b.value, 0);
    return (
      <Message color={getColor(index)}>
        <Message.Header>{label}</Message.Header>
        <Message.Content>{`UV: ${index}`}</Message.Content>
      </Message>
    );
  }

  return null;
};

export default class UVHistory extends React.Component {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";

  render() {
    const { history } = this.props;

    const data = history.map(x => ({
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
            <XAxis dataKey="date" height={60} tick={<CustomizedAxisTick />} />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
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
  history: PropTypes.arrayOf(PropTypes.shape).isRequired
};

CustomizedAxisTick.defaultProps = {
  x: 0,
  y: 0,
  payload: {}
};

CustomizedAxisTick.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  payload: PropTypes.shape({
    value: PropTypes.number
  })
};

CustomTooltip.defaultProps = {
  active: false,
  payload: {},
  label: ""
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.shape({
    value: PropTypes.number
  }),
  label: PropTypes.string
};
