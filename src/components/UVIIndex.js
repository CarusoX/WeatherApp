import React from 'react'
import { Grid } from 'semantic-ui-react'
import { PieChart, Cell, Pie, Sector } from 'recharts'

const data = [
  {
    "name": "TrancaPalanca",
    "value": 60,
    "description": "Se puede salir de joda hoy"
  },
  {
    "name": "Group B",
    "value": 60
  },
  {
    "name": "Group C",
    "value": 60
  },
  {
    "name": "Group D",
    "value": 60
  },
  {
    "name": "Super re contra mega peligroso",
    "value": 60,
    "description": "Mejor quedate en casa mirando Mr. Robot"
  }
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${payload.description}`}</text>
      {/* <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text> */}
    </g>
  );
};

const COLORS = ['green', 'yellow', 'orange', 'brown', 'purple'];

export default class UVIIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 4
    }
  }

  render() {
    return (
      <Grid stretched centered>
        <Grid.Row>
          Current UVI index
        </Grid.Row>
        <Grid.Row>
          9.1
        </Grid.Row>
        <Grid.Row>
          <PieChart width={800} height={350}>
            <Pie
              data={data}
              cx={400}
              cy={175}
              activeIndex={this.state.activeIndex}
              activeShape={renderActiveShape}
              innerRadius={60}
              outerRadius={80}
              endAngle={300}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
              }
            </Pie>
          </PieChart>
        </Grid.Row>

      </Grid>
    )
  }
}