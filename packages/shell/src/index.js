import React from 'react';
import { provide } from '@kwri/ioc';

const KWRIHeader = () => {
  return <header>This is a shared <strong>header</strong> provided by @kwri/shell</header>;
};

const KWRIFooter = () => {
  return <footer>This is a shared <strong>footer</strong> provider by @kwri/shell</footer>
}

@provide({
  KWRIHeader,
  KWRIFooter
})
class Shell extends React.Component {
  render() {
    /* We can even share a global Layout from this Shell, via static properties, or any other means */
    return (
      <div style={{ border: '2px dashed red ' }}>{this.props.children}</div>
    );
  }
}

export { Shell };
