import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './screens/Landing';
import OrphanagesMap from './screens/OrphanagesMap';

function Routes() {
   return(
      <BrowserRouter>
         <Switch>       {/*somente uma rota eh chamada com o Switch*/}
            <Route path="/" exact component={Landing} />
            <Route path='/app' component={OrphanagesMap} />
         </Switch>
      </BrowserRouter>
   );
}

export default Routes;