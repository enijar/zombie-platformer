import React from "react";
import { Vector3 } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import config from "@/config";

type Props = {
  position?: Vector3;
};

export default function Camera({ position }: Props) {
  return (
    <>
      <PerspectiveCamera makeDefault position={position} />
      {config.debug && <OrbitControls makeDefault />}
    </>
  );
}
