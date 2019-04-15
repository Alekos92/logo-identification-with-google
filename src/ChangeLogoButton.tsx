import * as React from 'react';
import {action} from "mobx";
import {inject, observer} from 'mobx-react';

import {Button} from 'reactstrap';

@inject('state')
@observer
export default class ChangeLogoButton extends React.Component<any> {

    @action.bound
    handleClick() {
        const {state} = this.props;
        state.shuffleLogos()
    }


    render() {
        return <Button color={'success'} style={{padding: 0}} onClick={this.handleClick}>Change</Button>
    }
}