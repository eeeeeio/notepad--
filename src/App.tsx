import React from 'react'
import { render } from 'react-dom'
import { GlobalStyle } from './styles/GlobalStyle'
import {Router} from 'react-router-static';

import Routes from './renderer/routes';
import { Container } from './styles'
import About from './renderer/components/about';
import Main from './renderer/components/main';
import CWD from './renderer/components/cwd';

import ErrorBoundary from './renderer/components/error_boundary';
import {Provider} from 'overstated';

import Identity from 'react-component-identity';

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const AppContainer = Identity;

const App = () => {
  return (
    <>
      {/*<GlobalStyle />*/}
      {/*<Greetings />*/}
      <Container style={{backgroundColor:'white'}}>
        <AppContainer>
          <Provider>
            <ErrorBoundary>
              {/*<Router routes={Routes} />*/}
              <Main></Main>
              {/*<CWD></CWD>*/}
            </ErrorBoundary>
          </Provider>
        </AppContainer>

        {/*<Main />*/}
        {/*<div style={{color:'white',zIndex: 1000}}>test</div>*/}
        {/*test*/}
      </Container>
    </>
  )
}

render(<App />, mainElement)


// renderDOM (
//   <Container style={{backgroundColor:'white'}}>
//     <Provider>
//       <ErrorBoundary>
//         {/*test*/}
//         <Router routes={Routes} />
//         {/*<Main></Main>*/}
//       </ErrorBoundary>
//     </Provider>
//   </Container>,
//   document.getElementById( 'root' )[0]
// );

