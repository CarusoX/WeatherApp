import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import { Container, Statistic, Grid } from "semantic-ui-react";
import { ResponsiveContainer, PieChart, Cell, Pie, Sector } from "recharts";

const data = [
  {
    name: "Low",
    value: 60,
    description: "Wear sunglasses on bright hours!!",
    color: "green"
  },
  {
    name: "Moderate",
    value: 60,
    description: "Stay in shade near midday when the sun is strongest.",
    color: "yellow"
  },
  {
    name: "High",
    value: 60,
    description: "Protection against skin and eye damage is needed.",
    color: "orange"
  },
  {
    name: "Very High",
    value: 60,
    description:
      "Take extra precautions because unprotected skin and eyes" +
      "will be damaged and can burn quickly.",
    color: "brown"
  },
  {
    name: "Extreme",
    value: 60,
    description:
      "Take all precautions because unprotected skin and eyes" +
      "can burn in minutes.",
    color: "purple"
  }
];

const renderActiveShape = props => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload
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
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        style={{ fontSize: 20 }}
        fill={fill}
      >
        {payload.name}
      </text>
    </g>
  );
};

const getIndex = index => {
  if (index < 3) return 0;
  if (index < 6) return 1;
  if (index < 8) return 2;
  if (index < 11) return 3;
  return 4;
};

const UVIndex = props => {
  const { index } = props;
  const activeIndex = getIndex(index);
  return (
    <Container fluid>
      <Grid
        textAlign="center"
        verticalAlign="middle"
        container
        columns="equal"
        relaxed
        stretched
        divided
      >
        <Grid.Row>
          <Grid.Column>
            <Statistic>
              <Statistic.Value>{index}</Statistic.Value>
              <Statistic.Label>Current UV index</Statistic.Label>
            </Statistic>
          </Grid.Column>
          <Grid.Column style={{ width: "40%", height: 300 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data}
                  activeIndex={activeIndex}
                  activeShape={renderActiveShape}
                  innerRadius={70}
                  outerRadius={100}
                  endAngle={300}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map(entry => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Grid.Column>
          <Grid.Column>
            <Statistic>
              <Statistic.Label>{data[activeIndex].description}</Statistic.Label>
            </Statistic>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default UVIndex;

UVIndex.propTypes = {
  index: PropTypes.number.isRequired
};

renderActiveShape.propTypes = {
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  innerRadius: PropTypes.number.isRequired,
  outerRadius: PropTypes.number.isRequired,
  startAngle: PropTypes.number.isRequired,
  endAngle: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired,
  payload: PropTypes.shape.isRequired
};
