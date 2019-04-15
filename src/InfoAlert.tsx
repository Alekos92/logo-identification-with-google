import * as React from 'react';
import {action} from "mobx";
import {inject, observer} from 'mobx-react';

import {Alert} from 'reactstrap';

const randomItem = require('random-item');

@inject('state')
@observer
export default class InfoAlert extends React.Component<any> {

    @action.bound
    handleClick() {
        const {state} = this.props;
        state.clear()
    }


    render() {
        let condescending_messages = ["You're getting close!", "That's not quite it, keep trying!", "Getting warmer!", "Almost there!"]
        const {state} = this.props;
        if (state.alert_state_string == 'new_logo') {
            return <Alert color={'info'}>Draw the logo on the canvas on the left!</Alert>
        } else if (state.alert_state_string == 'trying') {
            return <Alert color={'warning'}>{randomItem(condescending_messages)}</Alert>
        }
        else if (state.alert_state_string == 'success') {
            return <Alert color={'success'}>You got it!</Alert>
        }
    }
}