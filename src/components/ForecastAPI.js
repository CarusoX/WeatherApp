import React from 'react'

const API_KEY_1 = '4e4360f48334a879ee009e6f11cad8ed'
const API_ENDPOINT = 'http://api.openweathermap.org'
const API_FETCH = '/data/2.5/forecast'

var url = ''
var last_fetch = ''
var cnt = 5

class ForecastAPI extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      id: null,
      working: true,
      loading: true,
      valid: true
    }
  }

  fetch_data() {
    this.setState({ id: this.props.id }, () => {
      let url = API_ENDPOINT + API_FETCH + '?id=' + this.state.id + '&cnt=' + cnt + '&units=metric&appid=' + API_KEY_1;
      fetch(url).then((response) => {
        return response.json();
      }).then((data) => {
        return this.setState({ loading: false }, () => {
          this.set_values(data);
          console.log("FOREEE")
          console.log(this.state.id)
          console.log(API_ENDPOINT + API_FETCH + '?id=' + this.state.id + '&cnt=' + cnt + '&units=metric&appid=' + API_KEY_1)
          console.log(data)
        })
      })
    })
  }

  set_values(data) {
    if (data && data.cod === "429") {
      this.setState({ working: false });
    } else if (data && data.cod === "401") {
      this.setState({ valid: false });
    } else if (data && data.cod === "400") {
      // Invalid search
      this.setState({ valid: false });
    } else if (data && data.cod === "404") {
      // Not found
      this.setState({ valid: false });
    }
    else {
      this.setState({ working: true, valid: true });

      let results = {
        'list': data['list'],
      }
      this.setState({working:false}, this.props.setData(results));
    }
  }

  componentDidUpdate() {
    if (this.props.id !== this.state.id) {
      this.fetch_data();
    }
  }
  render() {
    return null;
  }
}
export default ForecastAPI;