import {
  CameraControls,
  Dodecahedron,
  Environment,
  Grid,
  Text,
  MeshDistortMaterial,
  RenderTexture,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useAtom } from "jotai";
import { useControls } from "leva";
import { useEffect, useRef } from "react";
import { slideAtom } from "./Overlay";
import { Scene } from "./Scene";

export const scenes = [
  {
    path: "models/house1.glb",
    mainColor: "#f9c0ff",
    name: "Urban House",
    description: "A modern urban house with sleek design and efficient use of space, perfect for city living.",
    price: 250000,
    range: 3000, // Square footage
  },
  {
    path: "models/house2c.glb",
    mainColor: "#c0ffe1",
    name: "Sub-urban home",
    description: "A compact and versatile sub-urban house, ideal for those who love the outskirts of the city while enjoying the comforts of home.",
    price: 75000,
    range: 500, // Square footage
  },
  {
    path: "models/house3c.glb",
    mainColor: "#ffdec0",
    name: "American House",
    description: "A classic American house with a spacious interior and traditional design, perfect for families.",
    price: 350000,
    range: 4000, // Square footage
  },
];

const CameraHandler = ({ slideDistance }) => {
  const viewport = useThree((state) => state.viewport);
  const cameraControls = useRef();
  const [slide] = useAtom(slideAtom);
  const lastSlide = useRef(0);

  const { dollyDistance } = useControls({
    dollyDistance: {
      value: 10,
      min: 0,
      max: 50,
    },
  });

  const moveToSlide = async () => {
    await cameraControls.current.setLookAt(
      lastSlide.current * (viewport.width + slideDistance),
      3,
      dollyDistance,
      lastSlide.current * (viewport.width + slideDistance),
      0,
      0,
      true
    );
    await cameraControls.current.setLookAt(
      (slide + 1) * (viewport.width + slideDistance),
      1,
      dollyDistance,
      slide * (viewport.width + slideDistance),
      0,
      0,
      true
    );

    await cameraControls.current.setLookAt(
      slide * (viewport.width + slideDistance),
      0,
      5,
      slide * (viewport.width + slideDistance),
      0,
      0,
      true
    );
  };

  useEffect(() => {
    // Used to reset the camera position when the viewport changes
    const resetTimeout = setTimeout(() => {
      cameraControls.current.setLookAt(
        slide * (viewport.width + slideDistance),
        0,
        5,
        slide * (viewport.width + slideDistance),
        0,
        0
      );
    }, 200);
    return () => clearTimeout(resetTimeout);
  }, [viewport]);

  useEffect(() => {
    if (lastSlide.current === slide) {
      return;
    }
    moveToSlide();
    lastSlide.current = slide;
  }, [slide]);
  return (
    <CameraControls
      ref={cameraControls}
      touches={{
        one: 0,
        two: 0,
        three: 0,
      }}
      mouseButtons={{
        left: 0,
        middle: 0,
        right: 0,
      }}
    />
  );
};

export const Experience = () => {
  const viewport = useThree((state) => state.viewport);
  const { slideDistance } = useControls({
    slideDistance: {
      value: 1,
      min: 0,
      max: 10,
    },
  });
  return (
    <>
      <ambientLight intensity={0.2} />
      <Environment  preset="sunset"/>
      <CameraHandler slideDistance={slideDistance} />
    {/* MAIN WORLD */}
            <group>
              <Text
                position-y={viewport.height / 2 + 1.1}
                color={scenes[0].mainColor}
                fontSize={.5}
                maxWidth={200}
                lineHeight={1}
                letterSpacing={0.02}
                textAlign={'center'}
              >
                {scenes[0].name}
              </Text>

              <Text
                position-x={viewport.width + slideDistance}
                position-y={viewport.height / 2 + 1.1}
                color={scenes[1].mainColor}
                fontSize={.5}
                maxWidth={100}
                lineHeight={1}
                letterSpacing={0.02}
                textAlign={'center'}
              >
                {scenes[1].name}
              </Text>

              <Text
                position-x={2 * (viewport.width + slideDistance)}
                position-y={viewport.height / 2 + 1.1}
                color={scenes[2].mainColor}
                fontSize={.5}
                maxWidth={100}
                lineHeight={1}
                letterSpacing={0.02}
                textAlign={'center'}
              >
                {scenes[2].name}
              </Text>
            </group>


    
      {scenes.map((scene, index) => (
        <mesh
          key={index}
          position={[index * (viewport.width + slideDistance), 0, 0]}
        >
          <planeGeometry args={[viewport.width, viewport.height]} />
          <meshBasicMaterial toneMapped={false}>
            <RenderTexture attach="map">
              <Scene {...scene} />
            </RenderTexture>
          </meshBasicMaterial>
        </mesh>
      ))}
    </>
  );
};
