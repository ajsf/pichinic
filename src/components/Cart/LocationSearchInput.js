import React from 'react'
import makeAsyncScriptLoader from 'react-async-script'

const API_KEY = process.env.GOOGLE_MAPS_API_KEY
const scriptUrl = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`

const LocationSearchInput = () => {
  return (
    <div>
      <div>
        <input id="pac-input" type="text" placeholder="Enter a location." />
      </div>
      <div id="infowindow-content">
        <img src="" width="6" height="16" id="place-icon" />
        <span id="place-name" className="title" />
        <br />
        <span id="place-address" />
      </div>
    </div>
  )
}

export default makeAsyncScriptLoader(scriptUrl)(LocationSearchInput)
