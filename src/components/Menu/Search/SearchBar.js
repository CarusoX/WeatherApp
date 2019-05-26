import _ from 'lodash'
import React, { Component } from 'react'
import { Search, Grid } from 'semantic-ui-react'
import { fetch_cities } from '../../../helpers/WeatherAPI'

const initialState = { isLoading: false, results: [], value: '' }

const resultRenderer = ({ name, country, coord, key }) => [
  <div key='key' className='content'>
    {name && <div className='title'>{name} - {country}</div>}
    {coord && <div className='description'>Lat:{coord.lat} Long:{coord.lon}</div>}
  </div>,
]

export default class SearchExampleStandard extends Component {
  state = initialState

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.name })
    this.props.setCity({
      'city_id': result.key,
      'coords': result.coords,
      'city_name': result.name
    })
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      fetch_cities(value).then(result => {
        if (!result) return this.setState({ loading: false, results: [] })
        const cities = result.map(res => ({
          'name': res.name,
          'country': res.sys.country,
          'coords': res.coord,
          'key': res.id
        }))
        this.setState({
          isLoading: false,
          results: cities
        })
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            value={value}
            resultRenderer={resultRenderer}
            selectFirstResult
            {...this.props}
          />
        </Grid.Column>
      </Grid>
    )
  }
}