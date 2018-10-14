import React from 'react';
import Link from 'next/link';
import { Shell } from '@kwri/shell';
import { inject } from '@kwri/ioc';

@inject(['KWRIHeader', 'KWRIFooter'])
class Index extends React.Component {
  render() {
    const { KWRIHeader, KWRIFooter } = this.props;

    return (
      <>
        <KWRIHeader />
        <h1>
          This is <strong>@kwri/island-two</strong>
        </h1>
        <KWRIFooter />
        <br />
        Go back to <Link href="/">@kwri/island-one</Link>
      </>
    );
  }
}

export default Index;
