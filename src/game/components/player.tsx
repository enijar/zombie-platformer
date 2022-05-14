import React from "react";
import * as THREE from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { Euler, useFrame, Vector3 } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

type GLTFResult = GLTF & {
  nodes: {
    Beta_Joints: THREE.SkinnedMesh;
    Beta_Surface: THREE.SkinnedMesh;
    mixamorigHips: THREE.Bone;
  };
  materials: {
    Beta_Joints_MAT: THREE.MeshStandardMaterial;
    ["asdf1:Beta_HighLimbsGeoSG2"]: THREE.MeshStandardMaterial;
  };
};

type Props = {
  position?: Vector3;
};

export default function Player({ position }: Props) {
  // @todo fix types
  // @ts-ignore
  const model = useGLTF("./assets/player/model.glb") as GLTFResult;

  const groupRef = React.useRef<THREE.Group>();

  const mixerRef = React.useRef<THREE.AnimationMixer>(null);

  React.useEffect(() => {
    mixerRef.current = new THREE.AnimationMixer(groupRef.current);
    const walking = mixerRef.current.clipAction(model.animations[0]);
    walking.repetitions = THREE.LoopRepeat;
    walking.play();
  }, [model.animations]);

  useFrame(() => {
    mixerRef.current.update(15 / 1000);
  });

  return (
    <group position={position}>
      <group
        rotation={[
          THREE.MathUtils.degToRad(90),
          THREE.MathUtils.degToRad(180),
          0,
        ]}
      >
        <group scale={0.3}>
          <group ref={groupRef}>
            <primitive object={model.nodes.mixamorigHips} />
            <skinnedMesh
              name="Beta_Joints"
              geometry={model.nodes.Beta_Joints.geometry}
              material={model.materials.Beta_Joints_MAT}
              skeleton={model.nodes.Beta_Joints.skeleton}
            />
            <skinnedMesh
              name="Beta_Surface"
              geometry={model.nodes.Beta_Surface.geometry}
              material={model.materials["asdf1:Beta_HighLimbsGeoSG2"]}
              skeleton={model.nodes.Beta_Surface.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}
