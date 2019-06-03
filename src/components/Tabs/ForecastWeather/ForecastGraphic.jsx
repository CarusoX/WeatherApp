import PropTypes from "prop-types";
import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  LineChart,
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
        dy={2}
        textAnchor="end"
        fill="#666"
        transform="rotate(-35)"
      >
        {payload.value}
      </text>
    </g>
  );
};

export default class ForecastGraphic extends React.Component {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";

  render() {
    console.log(this.props)
    const { days } = this.props;

    const data = days.map(x => ({
      date: x.dt_txt.slice(11, 19),
      maxTemp: x.maxTemp,
      minTemp: x.minTemp
    }));

    return (
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart
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
            <XAxis dataKey="date"
                   height={60}
                   tick={<CustomizedAxisTick />}
            />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="maxTemp"
              activeDot={false}
              stackId="1"
              stroke="red"
              fill="red"
            />
            <Line
              type="monotone"
              dataKey="minTemp"
              activeDot={false}
              stackId="1"
              stroke="blue"
              fill="blue"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

ForecastGraphic.propTypes = {
  days: PropTypes.arrayOf(PropTypes.shape).isRequired
};

CustomizedAxisTick.defaultProps = {
  x: 0,
  y: 0,
  payload: { value: "" }
};

CustomizedAxisTick.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  payload: PropTypes.shape({
    value: PropTypes.string
  })
};
