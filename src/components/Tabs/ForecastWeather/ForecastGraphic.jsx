import PropType from "prop-types";
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
import { getTemp } from "../../../helpers/index.ts";

export default class ForecastGraphic extends React.Component {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";

  render() {
    const { info, date, values, unit } = this.props;
    const data = date.map((x, i) => ({
      dates: date[i],
      Temp: getTemp(values[i], unit.slice(1, 2)).slice(0, 3),
      Humidity: values[i]
    }));
    return (
      <div style={{ width: "100%", height: 300 }}>
        <h2
          style={{
            fontSize: 35,
            fontWeight: "bold"
          }}
        >
          {info}
        </h2>
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
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey={info}
              unit={unit}
              activeDot={false}
              stackId="1"
              stroke="blue"
              fill="blue"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
ForecastGraphic.propTypes = {
  info: PropType.string.isRequired,
  date: PropType.arrayOf(PropType.shape()).isRequired,
  values: PropType.arrayOf(PropType.shape()).isRequired,
  unit: PropType.string.isRequired
};
