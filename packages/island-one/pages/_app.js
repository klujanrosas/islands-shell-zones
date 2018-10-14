import React from 'react'
import App, { Container } from 'next/app'
import { Shell } from '@kwri/shell'

class KWRIApp extends App {
  render() {
    const {
      pageProps,
      Component
    } = this.props

    return (
      <Container>
        <Shell>
          <Component {...pageProps} />
        </Shell>
      </Container>
    )
  }
}

export default KWRIApp
