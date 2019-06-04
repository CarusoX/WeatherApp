import PropType from "prop-types";
import React from "react";
import { Tab } from "semantic-ui-react";
import { getDateName, getIconName } from "../../../helpers/index.ts";
import { BigPolaroid, SmallPolaroid } from "../../Modular/index.ts";
import ForecastGraphic from "./ForecastGraphic";

class ForecastCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  changeIndex(newIndex) {
    this.setState({ index: newIndex });
  }

  render() {
    const { days, unit, history } = this.props;
    const { index } = this.state;
    return (
      <Tab.Pane attached={false} loading={!days}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <BigPolaroid
            image={`${getIconName(days[index].besticon)}.png`}
            text={getDateName(days[index].dt_txt)}
            state={days[index].state}
            unit={unit}
            temp={days[index].temp}
            maxtemp={days[index].maxtemp}
            mintemp={days[index].mintemp}
            clouds={days[index].clouds}
            humidity={days[index].humidity}
            windspeed={days[index].windspeed}
            winddir={days[index].winddir}
            sunrise={days[index].sunrise}
            sunset={days[index].sunset}
            pressure={days[index].pressure}
          />
          <div
            style={{
              flexGrow: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexGrow: "1",
                justifyContent: "space-evenly"
              }}
            >
              {days.map((day, i) => (
                <SmallPolaroid
                  update={newIndex => this.changeIndex(newIndex)}
                  key={day.dt_txt}
                  index={i}
                  image={`${getIconName(day.besticon)}.png`}
                  text={getDateName(day.dt_txt)}
                  max={day.maxtemp}
                  min={day.mintemp}
                  unit={unit}
                />
              ))}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexGrow: "1",
                justifyContent: "space-evenly"
              }}
            >
              <ForecastGraphic history={history} />
            </div>
          </div>
        </div>
      </Tab.Pane>
    );
  }
}

ForecastCard.propTypes = {
  days: PropType.arrayOf(PropType.object).isRequired,
  unit: PropType.string.isRequired,
  history: PropType.arrayOf(PropType.object).isRequired
};

export default ForecastCard;
