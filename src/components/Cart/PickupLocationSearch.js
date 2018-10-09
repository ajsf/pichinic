import React from 'react'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete'

export default class PickupLocationSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: '' }
  }

  handleChange = address => {
    console.log('HANDLE CHANGE', address)
    this.setState({ address })
  }

  handleSelect = (address, placeId) => {
    console.log('HANDLE SELECT', address, placeId)
    this.setState({ address })
  }

  render() {
    const searchOptions = {
      location: new window.google.maps.LatLng(21.31, -157.85),
      radius: 20000,
    }
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        searchOptions={searchOptions}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Enter a location or an address ...',
                className: 'location-search-input',
              })}
            />
            {suggestions.length > 0 && (
              <div
                style={{ marginTop: 8 }}
                className="autocomplete-dropdown-container"
              >
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  console.log('SUGGESTION', suggestion)
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item'
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: '#2a2f4a', cursor: 'pointer' }
                    : { backgroundColor: '#242943', cursor: 'pointer' }
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  )
                })}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    padding: 4,
                  }}
                >
                  <div>
                    <img
                      src={require('../../assets/images/powered_by_google_inverse.png')}
                      style={{ display: 'inline-block', width: 150 }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </PlacesAutocomplete>
    )
  }
}
