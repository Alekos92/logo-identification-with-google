import * as React from 'react'
import {Container, Row, Col, FormGroup} from 'reactstrap';
import SubmitButton from './SubmitButton'
import ClearButton from './ClearButton'
import InfoAlert from './InfoAlert'
import LogoField from './LogoField'
import DrawingTool from './DrawingTool'
import ColorPicker from './ColorPicker'
import './App.css'
import {inject, observer} from "mobx-react";
import ChangeLogoButton from "./ChangeLogoButton";

@inject('state')
@observer
export default class App extends React.Component<any> {


    render() {
        const {state} = this.props;
        return <FormGroup>
            <Container>
                <Row>
                    <Col sm={'6'}>
                        <Container>
                            <Row>
                                <Col sm={'5'}>
                                    <DrawingTool/>
                                </Col>
                                <Col sm={'7'}>
                                    <ColorPicker/>
                                </Col>
                            </Row>
                        </Container>
                        <div className={'drawing-area'}>
                            <LogoField/>
                        </div>
                        <br/>
                        <Container>
                            <Row>
                                <Col>
                                    <ClearButton/>
                                </Col>
                                <Col>
                                    <SubmitButton/>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col>
                        <Row>Draw the logo of:&nbsp;<b>{state.fancy_logo_name}</b>&nbsp;<ChangeLogoButton/></Row>
                        <br/>
                        <Row><InfoAlert/></Row>
                    </Col>
                </Row>
            </Container>
        </FormGroup>
    }
}