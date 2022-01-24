import React, { useState, useRef } from "react";
import { render } from "react-dom";
import "./index.css";
import useMapbox from "./useMapbox";

function App() {
    const [random, setRandom] = useState(Math.random());
    const mapRef = useRef()

    useMapbox(mapRef, [37.61192, 55.76199], 10);

    return (
        <div className="container mx-auto py-10">
            <div className="flex justify-center mb-5">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  id="rerender" onClick={() => setRandom(Math.random())}>
                    Ререндер!
                </button>
            </div>
            <div ref={mapRef} className="rounded h-96" id="map"></div>
        </div>
    );
}

render(<App />, document.querySelector("#root"));