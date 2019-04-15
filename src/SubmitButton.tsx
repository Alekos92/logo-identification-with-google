import * as React from 'react';
import {action} from "mobx";
import {inject, observer} from 'mobx-react';

import {Button} from 'reactstrap';

@inject('state')
@observer
export default class SubmitButton extends React.Component<any> {

    @action.bound
    submit() {
        const {state} = this.props;
        state.callGoogle()
    }


    render() {
        return <Button block color={'info'} onClick={this.submit}>Submit</Button>
    }
}