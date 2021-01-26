import { useState, useEffect } from 'react';
import RandomColorBox from './RandomColorBox';
import ParamDisplay from './ParamDisplay';

export default function App() {
  const [hue, setHue] = useState(Math.floor(Math.random() * 360));
  const [saturation, setSaturation] = useState(Math.floor(Math.random() * 100));
  const [lightness, setLightness] = useState(Math.floor(Math.random() * 100));
  const [width, setWidth] = useState(1000);
  const [height, setHeight] = useState(1000);

  return (
    <>
      <ParamDisplay
        hue={hue}
        setHue={setHue}
        saturation={saturation}
        setSaturation={setSaturation}
        lightness={lightness}
        setLightness={setLightness}
        width={width}
        setWidth={setWidth}
        height={height}
        setHeight={setHeight}
      />
      <RandomColorBox />
    </>
  );
}
