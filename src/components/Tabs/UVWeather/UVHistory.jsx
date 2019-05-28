import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Dot
} from 'recharts';

const getColor = (index) => {
  if (index < 3) return 'green';
  else if (index < 6) return 'yellow';
  else if (index < 8) return 'orange';
  else if (index < 11) return 'red';
  else return 'purple';
}
const CustomizedDot = (props) => {
  const {
    cx, cy, value,
  } = props;
  return <Dot cx={cx} cy={cy} r={5} fill={getColor(value)} />
};

class CustomizedAxisTick extends PureComponent {
  render() {
    const {
      x, y, payload,
    } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">{payload.value}</text>
      </g>
    );
  }
}

export default class UVHistory extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    console.log(this.props.uv_history);
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart
            width={500}
            height={300}
            data={this.props.uv_history.map((x) => ({ 'date': x.date_iso.slice(5, 10).split('-').join('/'), 'uv': x.value, 'stroke': 'red' }))}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" height={60} tick={<CustomizedAxisTick />} />
            <YAxis />
            <Tooltip />
            <Line type='monotone' dataKey='uv' stroke='blue' dot={<CustomizedDot />} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
