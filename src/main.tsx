import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from 'preact';
import { Theme } from 'react-daisyui';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app';
import { defaultState, GlobalState, GlobalStateContext, GlobalStateProvider } from './GlobalStateProvider';
import './index.css';
import { NodeInfoProvider } from './NodeInfoProvider';

const queryClient = new QueryClient();

render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <GlobalStateProvider>
        <GlobalStateContext.Consumer>
          {(globalState) => {
            const { state = defaultState, getThemeName = () => undefined } = globalState as GlobalState;
            return (
              state.tenantRPC && (
                <NodeInfoProvider tenantRPC={state.tenantRPC}>
                  <Theme dataTheme={getThemeName()}>
                    <App />
                  </Theme>
                </NodeInfoProvider>
              )
            );
          }}
        </GlobalStateContext.Consumer>
      </GlobalStateProvider>
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById('app') as HTMLElement,
);
