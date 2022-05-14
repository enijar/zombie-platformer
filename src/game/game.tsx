import React from "react";
import { Canvas } from "@react-three/fiber";
import config from "@/game/config";
import Platform from "@/game/components/platform";
import Camera from "@/game/components/camera";
import Scene from "@/game/components/scene";
import Zombie from "@/game/components/zombie";

export default function Game() {
  return (
    <Canvas flat linear dpr={1}>
      <React.Suspense fallback={<></>}>
        <Scene
          position={config.scene.position}
          rotation={config.scene.rotation}
        >
          <Zombie id={1} position={[0, 0, 0]} />
          <Platform size={config.platform.size} />
        </Scene>
        <Camera position={config.camera.position} />
        <ambientLight />
        <pointLight position={[0, 5, 5]} />
      </React.Suspense>
    </Canvas>
  );
}
