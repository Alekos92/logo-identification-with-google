import * as React from 'react';
import {action} from "mobx";
import {inject, observer} from 'mobx-react';

import {Button} from 'reactstrap';

@inject('state')
@observer
export default class ClearButton extends React.Component<any> {

    @action.bound
    handleClick() {
        const {state} = this.props;
        state.clear()
    }


    render() {
        return <Button block color={'danger'} onClick={this.handleClick}>Clear</Button>
    }
}