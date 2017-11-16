import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectCount, selectLight, selectLastUpdate } from 'selectors'
import { startClock, addCount } from 'actions'
import Clock from 'components/clock'

class App extends Component {

  componentDidMount () {
    this.timer = this.props.startClock()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render() {
    const { count, lastUpdate, light, addCount } = this.props

    return (
      <div>
        hello ~
        <Clock lastUpdate={lastUpdate} light={light} />
        <h1>AddCount: <span>{count}</span></h1>
        <button onClick={addCount}>Add To Count</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    count: selectCount(state),
    lastUpdate: selectLastUpdate(state),
    light: selectLight(state)
  }
}

export default connect(mapStateToProps, { startClock, addCount })(App)
