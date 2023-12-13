import React, {FunctionComponent} from 'react';
import Outside from './pages/outsidePage/Outside';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Inside from './pages/insidePage/Inside';
  
const App: FunctionComponent = () => {
    
    return (
        <Router>
        {/*barre de navigation*/}
        {/* le systeme de route */}
            <Switch>
                <Route exact path="/" component={Outside}/>
                <Route exact path="/transactions" component={Inside}/>
            </Switch>
    </Router>
    );
}

export default App;