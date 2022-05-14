import React from "react";
import * as THREE from "three";
import { Vector3, Euler, useFrame } from "@react-three/fiber";
import { useGame } from "@/game/hooks/use-game";
import config from "@/game/config";

type Props = {
  position?: Vector3;
  rotation?: Euler;
  children?: React.ReactNode;
};

export default function Scene({ position, rotation, children }: Props) {
  const groupRef = React.useRef<THREE.Group>(null);

  const speed = useGame((state) => state.speed);

  useFrame(() => {
    const group = groupRef.current;
    if (group === null) return;
    const min = config.platform.size[1] * -0.1;
    group.position.y -= speed;
    if (group.position.y <= min) {
      group.position.y = 0;
    }
  });

  return (
    <group rotation={rotation}>
      <group position={position}>
        <group ref={groupRef}>{children}</group>
      </group>
    </group>
  );
}
