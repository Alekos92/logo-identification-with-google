import * as React from 'react';
import {action} from "mobx";
import {inject, observer} from 'mobx-react';

import {Form, Input, Label} from 'reactstrap';

@inject('state')
@observer
export default class DrawingTool extends React.Component<any> {

    @action.bound
    handleChange(e) {
        const {state} = this.props;
        state.updateTool(e.target.value);
    }


    render() {
        return <Form inline>
            <Label for="selectTool">Tool: </Label>&nbsp;
            <Input type="select" name="selectTool" id="selectTool" onChange={this.handleChange}>
                <option>Pencil</option>
                <option>Line</option>
                <option>Rectangle</option>
                <option>Circle</option>
            </Input>
        </Form>
    }
}