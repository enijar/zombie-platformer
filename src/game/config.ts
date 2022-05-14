import * as THREE from "three";
import { Vector3, Euler } from "@react-three/fiber";

type Config = {
  camera: {
    position: Vector3;
  };
  scene: {
    position: Vector3;
    rotation: Euler;
  };
  platform: {
    size: [width: number, height: number];
  };
};

const config: Config = {
  camera: {
    position: [0, 0, 5],
  },
  scene: {
    position: [0, 0, 1],
    rotation: [THREE.MathUtils.degToRad(-50), 0, 0],
  },
  platform: {
    size: [2, 20],
  },
};

export default config;
