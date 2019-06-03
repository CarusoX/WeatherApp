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

  render() {
    const { days, unit, history } = this.props;
    const { index } = this.state;
    return (
      <Tab.Pane attached={false}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <BigPolaroid
            key={days[index].dt_txt}
            image={`${getIconName(days[index].bestIcon)}.png`}
            // text={getDateName(this.props.days.dt_txt)}
            // state={this.props.days[this.state.selected].state}
            // unit={this.props.unit}
            // temp={this.props.days[this.state.selected].temp}
            // maxTemp={this.props.days[this.state.selected].maxTemp}
            // minTemp={this.props.days[this.state.selected].minTemp}
            clouds={90}
            // humidity={this.props.days[this.state.selected].humidity}
            windSpeed={100}
            // windDir={this.props.days[this.state.selected].windDir}
            // sunrise={this.props.days[this.state.selected].sunrise}
            // sunset={this.props.days[this.state.selected].sunset}
            // pressure={this.props.days[this.state.selected].pressure}
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
              {days.map(day => (
                <SmallPolaroid
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
  unit: "",
  history: []
};

ForecastCard.propTypes = {
  days: PropType.arrayOf(
    PropType.shape({
      bestIcon: PropType.string.isRequired
    })
  ).isRequired,
  unit: PropType.string,
  history: PropType.arrayOf(PropType.object)
};

export default ForecastCard;
