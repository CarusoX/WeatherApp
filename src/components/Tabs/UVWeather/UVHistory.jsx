import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Dot
} from 'recharts';

const getColor = (index) => {
  if (index < 3) return 'green';
  else if (index < 6) return 'yellow';
  else if (index < 8) return 'orange';
  else if (index < 11) return 'red';
  else return 'purple';
}

const gradientOffset = (data) => {
  const dataMax = Math.max(...data.map(i => i.value));
  const dataMin = Math.min(...data.map(i => i.value));

  if (dataMax <= 6) {
    return 0;
  }
  if (dataMin >= 4) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};

const off = (data) => gradientOffset(data);

export default class UVHistory extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            width={500}
            height={400}
            data={this.props.uv_history.map((x) => ({ 'date': x.date_iso.slice(5, 10).split('-').join('/'), 'uv': x.value }))}
            margin={{
              top: 10, right: 30, left: 0, bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <defs>
              <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset={off(this.props.uv_history)} stopColor="green" stopOpacity={1} />
                <stop offset={off(this.props.uv_history)} stopColor="red" stopOpacity={1} />
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="uv" stroke="#000" fill="url(#splitColor)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
