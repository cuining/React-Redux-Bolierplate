import React from 'react'

export default ({ lastUpdate, light }) => (
  <div style={{background: light ? 'green': 'white'}}>
    {new Date(lastUpdate).toString()}
  </div>
)
