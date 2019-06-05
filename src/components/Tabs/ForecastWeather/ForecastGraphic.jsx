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

export default class ForecastGraphic extends React.Component {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";
  
  render() {
    const { info, date, values, max, min } = this.props;
    const data = date.map((x, i) => ({
      dates : date[i],
      value : values[i],
    }))

    return (
      <div style={{ width: "100%", height: 300 }}>
        <h2> {info} </h2>
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
            <XAxis dataKey="dates" height={60} />
            <YAxis 
              domain={ [min, max] }
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              activeDot={false}
              stackId="1"
              stroke="blue"
              fill="blue"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  }
}


ForecastGraphic.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape).isRequired
};
