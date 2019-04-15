import {observable, action, computed} from 'mobx';
import {Tools} from 'react-sketch';

const randomObjKey = require('random-obj-key');


class State {

    @observable image: string = '';
    @observable tool: Tools = Tools.Pencil;
    @observable color: string = '#000000';
    sketchfield;
    logos = {
        dominos: "Domino's Pizza",
        playboy: "Playboy",
        facebook: "Facebook",
        mcdonalds: "McDonald's",
        mercedes: "Mercedes Benz",
        microsoft: "Microsoft",
        youtube: "YouTube",
        vw: "Volkswagen",
        beats: "Beats by Dre",
        chanel: "Chanel"
    };

    @observable current_logo: string = randomObjKey(this.logos);
    @observable alert_state_string = 'new_logo';

    @computed get fancy_logo_name() {
        return this.logos[this.current_logo]
    }

    @action.bound
    shuffleLogos() {
        this.current_logo = randomObjKey(this.logos);
        this.clear();
        this.alert_state_string = 'new_logo'
    }

    setSketchfield(sketchfield) {
        this.sketchfield = sketchfield
    }

    @action.bound
    updateImage() {
        let canvas = this.sketchfield as HTMLCanvasElement;
        this.image = canvas.toDataURL()
    }

    @action.bound
    updateTool(t: string) {
        switch (t) {
            case 'Pencil': {
                this.tool = Tools.Pencil;
                break;
            }
            case 'Line': {
                this.tool = Tools.Line;
                break;
            }
            case 'Rectangle': {
                this.tool = Tools.Rectangle;
                break;
            }
            case 'Circle': {
                this.tool = Tools.Circle;
                break;
            }
        }
    }

    @action.bound
    updateColor(c) {
        this.color = c
    }

    clear() {
        this.sketchfield.clear()
    }

    @action.bound
    callGoogle() {
        fetch('http://localhost:5000/api/world', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({image: this.image})
        }).then(res => res.json())
            .then(res => {
                let logos = res.logos;
                console.log(logos);
                if ((!logos.length) || (logos[0].description != this.current_logo)) {
                    this.alert_state_string = 'trying'
                } else {
                    this.alert_state_string = 'success'
                }
            });

    }

}


let state = new State();
// observe(store, () => console.log(JSON.stringify(store.people)));
export default state;