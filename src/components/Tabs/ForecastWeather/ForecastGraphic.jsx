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

export default class ForecastGraphic extends React.Component {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";
  
  render() {
    {console.log(this.props)}
    const { date, data, max, min } = this.props;

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
            />
            <YAxis 
              domain={ [min, max] }
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="data"
              activeDot={false}
              stackId="1"
              stroke="red"
              fill="red"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }
}


ForecastGraphic.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape).isRequired
};
