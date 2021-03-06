import React from 'react';
import Link from 'next/link';
import { Shell } from '@kwri/shell';
import { inject } from '@kwri/ioc';

@inject(['KWRIHeader'])
class Index extends React.Component {
  render() {
    const { KWRIHeader } = this.props;

    return (
      <>
        <KWRIHeader />
        <h1>
          This is <strong>@kwri/island-one</strong>
        </h1>
        <br />
        Click here to go to{' '}
        <Link href="/island-two" passHref>
          <a>@kwri/island-two</a>
        </Link>
      </>
    );
  }
}

export default Index;
