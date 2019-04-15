import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider, observer} from 'mobx-react';
import App from './App';


import 'bootstrap/dist/css/bootstrap.css'
import state from './State';


@observer
class AppRoot extends React.Component {


    render() {


        return (
            <div>
                <Provider state={state}>
                    <App/>
                </Provider>
            </div>
        );
    }

}

ReactDOM.render(
    <AppRoot/>,
    document.getElementById('root')
);

