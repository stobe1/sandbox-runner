import "./Map.css";
const mapMock = [
    [ ' ','x','x','x', ' ' ],
    [ 'x','o','x','o', 'x' ],
    [ ' ','x','F','x', ' ' ],
    [ 'x','o','x','o', 'x' ],
    [ ' ','x','x','x', ' ' ],

]


export default function MapComponent() {
    return (
        <div className="mapWrap">
            
            <div className="perspective">
                <div className="mapBg">
                {(() => {
                    const tiles = [];
                    for (var i=0; i< 11; i++) {
                        const column = [];
                        for(var b=0; b<5; b++) {
                            const tile = <div className="cubicle" style={{left: i*100, top: b*100}} />
                            column.push(tile);
                        }
                        tiles.push(column);
                    }
                    return tiles;
                })()}
                </div>

                <div className="box">
                    <div className="face top"></div>
                    <div className="face bottom"></div>
                    <div className="face back"></div>
                    <div className="face front"></div>
                    <div className="face left"></div>
                    <div className="face right"></div>
                </div>

                
            </div>

        </div>
    )
}
