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
    const { detailedDays, days, unit, theme } = this.props;
    const { index } = this.state;
    const thisDay = days[index];
    return (
      <Tab.Pane attached={false}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <BigPolaroid
            image={`${getIconName(thisDay.bestIcon)}.png`}
            text={getDateName(thisDay.dt_txt)}
            state={thisDay.state}
            temp={thisDay.temp}
            maxTemp={thisDay.maxTemp}
            minTemp={thisDay.minTemp}
            clouds={thisDay.clouds}
            humidity={thisDay.humidity}
            windSpeed={thisDay.windSpeed}
            windDir={thisDay.windDir}
            sunrise={thisDay.sunrise}
            sunset={thisDay.sunset}
            pressure={thisDay.pressure}
            theme={theme}
            unit={unit}
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
                  theme={theme}
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
                unit={`º${unit}`}
              />
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
                  .map(x => x.humidity)}
                date={detailedDays
                  .filter((x, i) => {
                    return i >= index * 8 && i < index * 8 + 8;
                  })
                  .map(x => `${x.dt_txt.slice(11, 16)} Hs`)}
                info="Humidity"
                unit="%"
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
  unit: PropType.string.isRequired,
  theme: PropType.number.isRequired
};
