import React from "react";
import { Canvas } from "@react-three/fiber";
import config from "@/game/config";
import Platform from "@/game/components/platform/platform";
import Camera from "@/game/components/camera";
import Scene from "@/game/components/scene";

export default function Game() {
  return (
    <Canvas flat linear dpr={1}>
      <React.Suspense fallback={<></>}>
        <Scene
          position={config.scene.position}
          rotation={config.scene.rotation}
        >
          <Platform size={config.platform.size} />
        </Scene>
        <Camera position={config.camera.position} />
      </React.Suspense>
    </Canvas>
  );
}
