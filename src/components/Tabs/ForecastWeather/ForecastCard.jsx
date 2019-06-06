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
    const { detailedDays, days, unit } = this.props;
    const { index } = this.state;
    return (
      <Tab.Pane attached={false}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <BigPolaroid
            image={`${getIconName(days[index].bestIcon)}.png`}
            text={getDateName(days[index].dt_txt)}
            state={days[index].state}
            unit={unit}
            temp={days[index].temp}
            maxTemp={days[index].maxTemp}
            minTemp={days[index].minTemp}
            clouds={days[index].clouds}
            humidity={days[index].humidity}
            windSpeed={days[index].windSpeed}
            windDir={days[index].windDir}
            sunrise={days[index].sunrise}
            sunset={days[index].sunset}
            pressure={days[index].pressure}
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
                display: "flex",
                flexDirection: "row",
                flexGrow: "1",
                justifyContent: "space-evenly"
              }}
            >
              <ForecastGraphic
                values={detailedDays
                  .filter((x, i) => {
                    return i >= index * 8 && i < index * 8 + 8;
                  })
                  .map(x => x.temp)}
                date={detailedDays
                  .filter((x, i) => {
                    return i >= index * 8 && i < index * 8 + 8;
                  })
                  .map(x => `${x.dt_txt.slice(11, 16)} Hs`)}
                info="Temp"
              />
            </div>
          </div>
        </div>
      </Tab.Pane>
    );
  }
}

export default ForecastCard;

ForecastCard.propTypes = {
  detailedDays: PropType.arrayOf(PropType.shape()).isRequired,
  days: PropType.arrayOf(PropType.shape()).isRequired,
  unit: PropType.string.isRequired
};
