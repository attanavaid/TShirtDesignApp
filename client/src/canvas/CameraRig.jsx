import { useRef } from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";

import state from "../store";

const CameraRig = ({ children }) => {
  const snap = useSnapshot(state);
  const group = useRef();

  useFrame((state, delta) => {
    const isBreakpoint = window.innerwidth <= 1260;
    const isMobile = window.innerwidth <= 600;

    // Model Initial Position Setup
    let targetPosition = [-0.4, 0, 2];

    if (snap.intro) {
      if (isBreakpoint) targetPosition = [0, 0, 2];
      if (isMobile) targetPosition = [0, 0.2, 2.5];
    }

    else {
      if (isMobile) targetPosition = [0, 0, 2.5];
      else targetPosition = [0, 0, 2];
    }

    // Model Camera Position Setup
    easing.damp3(
      state.camera.position,
      targetPosition,
      0.25,
      delta
    );

    // Smooth Model Rotation Setup
    easing.dampE(
      group.current.rotation,
      [(state.pointer.y / 10), (-state.pointer.x / 5), 0],
      0.25,
      delta
    );
  });

  return (
    <group ref={group}>
      {children}
    </group>
  )
}

export default CameraRig;