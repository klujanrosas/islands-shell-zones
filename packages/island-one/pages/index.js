import React from 'react'
import { Shell } from '@kwri/shell'
import { inject } from '@kwri/ioc'

@inject(['KWRIHeader'])
class Index extends React.Component {
  render() {
    const { KWRIHeader } = this.props

    return (
      <>
        <KWRIHeader />
        <h1>This is <strong>@kwri/island-one</strong></h1>
      </>
    )
  }
}

export default Index
