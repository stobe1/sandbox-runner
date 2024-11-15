const appUpdateRate = 24;
const appState = {};

interface MapTiles {
    Empty: ' ',
    Ground: 'x',
    HoleInGround: 'o',
    Wall: 'I',
    Finish: 'F',
}

interface ControllerProps {
    updateCallback: any;
}

class Controller {
    updateCallback: any;

    constructor(props: ControllerProps) {
        this.updateCallback = props.updateCallback;
    }
}

export default function AppController() {
    return (<div>test</div>);
}