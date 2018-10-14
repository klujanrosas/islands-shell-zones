import React from 'react'
import { Shell } from '@kwri/shell'
import { inject } from '@kwri/ioc'

@inject(['KWRIHeader', 'KWRIFooter'])
class Index extends React.Component {
  render() {
    const { KWRIHeader, KWRIFooter } = this.props

    return (
      <>
        <KWRIHeader />
        <h1>This is <strong>@kwri/island-two</strong></h1>
        <KWRIFooter />
      </>
    )
  }
}

export default Index
