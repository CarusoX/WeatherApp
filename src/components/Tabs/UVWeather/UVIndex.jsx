import React, { PureComponent } from 'react'
import { Container, Statistic, Grid, AccordionTitle } from 'semantic-ui-react'
import { ResponsiveContainer, PieChart, Cell, Pie, Sector } from 'recharts'

const data = [
  {
    "name": "Low",
    "value": 60,
    "description": "Wear sunglasses on bright hours!!",
    "color": "green"
  },
  {
    "name": "Moderate",
    "value": 60,
    "description": "Stay in shade near midday when the sun is strongest.",
    "color": "yellow"
  },
  {
    "name": "High",
    "value": 60,
    "description": "Protection against skin and eye damage is needed.",
    "color": "orange"
  },
  {
    "name": "Very High",
    "value": 60,
    "description": "Take extra precautions because unprotected skin and eyes will be damaged and can burn quickly.",
    "color": "brown"
  },
  {
    "name": "Extreme",
    "value": 60,
    "description": "Take all precautions because unprotected skin and eyes can burn in minutes.",
    "color": "purple"
  }
];

const renderActiveShape = (props) => {
  const {
    cx, cy, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload
  } = props;

  return (
    <g>
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
      <text x={cx} y={cy} dy={8} textAnchor="middle" style={{fontSize:20}} fill={fill}>{payload.name}</text>
    </g>
  );
};

export default class UVIIndex extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    }
  }

  static getDerivedStateFromProps(props) {
    let activeIndex;

    if(props.uvi_index < 3) activeIndex = 0;
    else if(props.uvi_index < 6) activeIndex = 1;
    else if(props.uvi_index < 8) activeIndex = 2;
    else if(props.uvi_index < 11) activeIndex = 3;
    else activeIndex = 4;

    return {activeIndex}
  }

  render() {
    console.log(this.props.uvi_index);
    return (
      <Container fluid>
        <Grid textAlign='center' verticalAlign='middle' container columns='equal' relaxed stretched divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic>
                <Statistic.Value>{this.props.uvi_index}</Statistic.Value>
                <Statistic.Label>Current UVI index</Statistic.Label>
              </Statistic>
            </Grid.Column>
            <Grid.Column style={{ width: '40%', height: 300 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={data}
                    activeIndex={this.state.activeIndex}
                    activeShape={renderActiveShape}
                    innerRadius={70}
                    outerRadius={100}
                    endAngle={300}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {
                      data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)
                    }
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </Grid.Column>
            <Grid.Column>
              <Statistic>
                <Statistic.Label>{data[this.state.activeIndex].description}</Statistic.Label>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}