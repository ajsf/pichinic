import React from 'react'
import LocationSearchInput from './LocationSearchInput'

const extractAddressComponent = (addressComponents, componentName) =>
  addressComponents.filter(c => c.types.includes(componentName))[0].long_name

export default class PickupLocationSearch extends React.Component {
  constructor() {
    super()
    this.autocomplete = null
    this.state = { address: null }
  }

  initSearch = () => {
    this.setInfowindowContent()
    this.initAutocomplete()
  }

  setInfowindowContent = () => {
    const infowindow = new window.google.maps.InfoWindow()
    const infowindowContent = document.getElementById('infowindow-content')
    infowindow.setContent(infowindowContent)
  }

  initAutocomplete = () => {
    const input = document.getElementById('pac-input')
    this.autocomplete = new window.google.maps.places.Autocomplete(input)
    this.autocomplete.setOptions(this.createSearchOptions())
    this.autocomplete.addListener('place_changed', this.fillInAddress)
  }

  createSearchOptions = () => {
    const { maps } = window.google
    const fields = ['address_components']
    const southWest = new maps.LatLng(21.23, -158.29)
    const northEast = new maps.LatLng(21.71, -157.644)
    const bounds = new maps.LatLngBounds(southWest, northEast)
    return { bounds, fields, strictBounds: true }
  }

  fillInAddress = () => {
    const { address_components } = this.autocomplete.getPlace()
    console.log('PLACE', address_components)
    const streetNumber = extractAddressComponent(
      address_components,
      'street_number'
    )
    const streetName = extractAddressComponent(address_components, 'route')
    const city = extractAddressComponent(address_components, 'locality')
    const zipCode = extractAddressComponent(address_components, 'postal_code')
    const address = streetNumber + ' ' + streetName + ' ' + city + ' ' + zipCode
    console.log(address)
    this.setState({ address })
  }

  render() {
    return <LocationSearchInput asyncScriptOnLoad={this.initSearch} />
  }
}
