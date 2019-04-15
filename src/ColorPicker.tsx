import * as React from 'react';
import {action} from "mobx";
import {inject, observer} from 'mobx-react';
import {GithubPicker} from 'react-color';


import {Form, Input, Label} from 'reactstrap';

@inject('state')
@observer
export default class ColorPicker extends React.Component<any> {

    @action.bound
    handleChange(c, e) {
        const {state} = this.props;
        state.updateColor(c.hex);
    }


    render() {
        return <Form inline>
            <Label for="selectColor">Color: </Label>&nbsp;
            <GithubPicker
                colors={['#000000', '#FFFFFF', '#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#8B00FF']}
                width={'220px'}
                onChange={this.handleChange}/>

        </Form>
    }
}