import React from 'react';
import routes from './routes'
import './styles/style.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)


function App(props) {
  return (
    <div>
      {routes}
    </div>
  );
}


export default App;
