import React from 'react';
import hoistStatics from 'hoist-non-react-statics';
import pick from 'lodash.pick';

const IOCContext = React.createContext({});

const provide = (injectables = {}) => BaseComponent => {
  class ProvideEnhancer extends React.Component {
    state = { injectables };

    render() {
      return (
        <IOCContext.Provider value={this.state.injectables}>
          <BaseComponent {...this.props} />
        </IOCContext.Provider>
      );
    }
  }

  return hoistStatics(ProvideEnhancer, BaseComponent);
};

const inject = (selectedDependencies = []) => BaseComponent => {
  class InjectEnhancer extends React.Component {
    injectDependencies = availableDependencies => {
      let dependenciesToInject = pick(
        availableDependencies,
        selectedDependencies
      );

      return <BaseComponent {...this.props} {...dependenciesToInject} />;
    };

    render() {
      return <IOCContext>{this.injectDependencies}</IOCContext>;
    }
  }

  return hoistStatics(InjectEnhancer, BaseComponent);
};

export { inject, provide, IOCContext };
