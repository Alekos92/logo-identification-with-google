import * as React from 'react';
import {inject, observer} from 'mobx-react';
import {SketchField, Tools} from 'react-sketch';
import {action} from "mobx";

@inject('state')
@observer
export default class LogoField extends React.Component<any> {

    componentDidMount() {
        // set reference to the drawing to state store
        const {state} = this.props;
        state.setSketchfield(this.refs.skf)
    }

    @action
    handleChange() {
        const {state} = this.props;
        state.updateImage()

    }


    render() {
        const {state} = this.props;
        return (

            <SketchField
                height='480px'
                tool={state.tool}
                lineColor={state.color}
                fillColor={state.color}
                lineWidth={10}
                ref={'skf'}
                onChange={this.handleChange.bind(this)}/>
        )
    }
}