import React from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

type Props = {
  size?: [width: number, height: number];
};

export default function Platform({ size }: Props) {
  const { gl } = useThree();

  const texture = useTexture("./assets/platform/texture.png", (texture) => {
    const tex = texture as THREE.Texture;
    tex.anisotropy = gl.capabilities.getMaxAnisotropy();
    tex.minFilter = THREE.NearestFilter;
    tex.magFilter = THREE.NearestFilter;
    tex.wrapT = THREE.RepeatWrapping;
    tex.wrapS = THREE.RepeatWrapping;
    tex.repeat.set(...size);
  });

  return (
    <group>
      <mesh>
        <planeBufferGeometry args={size} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </group>
  );
}
