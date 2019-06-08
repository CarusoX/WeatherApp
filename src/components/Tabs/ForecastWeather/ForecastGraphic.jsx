import PropTypes from "prop-types";
import React, { Component } from "react";
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
import { getTemp } from "../../../helpers/index.ts";

const CustomTooltip = ({ active, payload, label, info, unit }) => {
  if (active) {
    return (
      <Message color={info === "Temperature" ? "blue" : "orange"}>
        <Message.Header>{label}</Message.Header>
        <Message.Content>
          {`${info}: ${payload[0].value} ${unit}`}
        </Message.Content>
      </Message>
    );
  }
  return null;
};

export default class ForecastGraphic extends Component {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";

  render() {
    const { info, date, values, unit } = this.props;
    const data = date.map((x, i) => ({
      dates: date[i],
      Temperature: getTemp(values[i], unit.slice(2, 3)).slice(0, -3),
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
            <Tooltip content={<CustomTooltip info={info} unit={unit} />} />
            <Area
              type="monotone"
              dataKey={info}
              activeDot={false}
              stackId="1"
              stroke={info === "Temperature" ? "blue" : "orange"}
              fill={info === "Temperature" ? "blue" : "orange"}
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
ForecastGraphic.propTypes = {
  info: PropTypes.string.isRequired,
  date: PropTypes.arrayOf(PropTypes.string).isRequired,
  values: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  unit: PropTypes.string.isRequired
};

CustomTooltip.defaultProps = {
  active: false,
  payload: {},
  label: ""
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string
    })
  ),
  label: PropTypes.string,
  unit: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired
};
