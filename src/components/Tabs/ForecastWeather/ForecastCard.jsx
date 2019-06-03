import PropType from "prop-types";
import React from "react";
import { Tab } from "semantic-ui-react";
import { getDateName, getIconName } from "../../../helpers/index.ts";
import { BigPolaroid, SmallPolaroid } from "../../Modular/index.ts";
import UVHistory from "../UVWeather/UVHistory";

class ForecastCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  changeIndex(new_index) {
    this.setState({index: new_index});
  }

  render() {
    const { days, unit, history } = this.props;
    const { index } = this.state;
    return (
      <Tab.Pane attached={false}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <BigPolaroid
            key={days[index].dt_txt}
            image={`${getIconName(days[index].bestIcon)}.png`}
            text={getDateName(this.props.days[index].dt_txt)}
            state={this.props.days[index].state}
            unit={this.props.unit}
            temp={this.props.days[index].temp}
            maxTemp={this.props.days[index].maxTemp}
            minTemp={this.props.days[index].minTemp}
            clouds={this.props.days[index].clouds}
            humidity={this.props.days[index].humidity}
            windSpeed={this.props.days[index].windSpeed}
            windDir={this.props.days[index].windDir}
            sunrise={this.props.days[index].sunrise}
            sunset={this.props.days[index].sunset}
            pressure={this.props.days[index].pressure}
          />
          <div
            style={{
              flexGrow: "2",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly"
            }}
          >
            <div
              style={{
                flexGrow: "1",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly"
              }}
            >
              {days.map((day, i) => (
                console.log(day.bestIcon),
                <SmallPolaroid
                  onClick={() => this.setState({ index: i })}
                  key={day.dt_txt}
                  image={`${getIconName(day.bestIcon)}.png`}
                  text={getDateName(day.dt_txt)}
                  max={day.maxTemp}
                  min={day.minTemp}
                  unit={unit}
                />
              ))}
            </div>

            <div
              style={{
                flexGrow: "1",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly"
              }}
            >
              <UVHistory history={history} />
            </div>
          </div>
        </div>
      </Tab.Pane>
    );
  }
}

ForecastCard.defaultProps = {
  days: [],
  unit: "",
  history: []
};

ForecastCard.propTypes = {
  days: PropType.arrayOf(PropType.object),
  unit: PropType.string,
  history: PropType.arrayOf(PropType.object)
};

export default ForecastCard;
