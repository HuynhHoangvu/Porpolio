import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  
  const fansRef = useRef([]);
  const screenTexturesRef = useRef([]);

  useEffect(() => {
    if (computer.scene) {
      fansRef.current = [];
      screenTexturesRef.current = [];

      computer.scene.traverse((node) => {
        const nameLower = node.name.toLowerCase();

        // 1. Identify fan blades inside the case
        if (
          node.isMesh &&
          (nameLower.includes("fan") ||
            nameLower.includes("cooler") ||
            nameLower.includes("blade") ||
            nameLower.includes("rotor") ||
            nameLower.includes("propeller"))
        ) {
          fansRef.current.push(node);
        }

        // 2. Identify the monitor screen texture
        if (node.isMesh && node.material) {
          const materials = Array.isArray(node.material) ? node.material : [node.material];
          
          materials.forEach((mat) => {
            if (mat.map) {
              const matName = mat.name.toLowerCase();
              
              if (
                nameLower.includes("screen") ||
                nameLower.includes("monitor") ||
                nameLower.includes("display") ||
                matName.includes("screen") ||
                matName.includes("monitor") ||
                matName.includes("display") ||
                matName.includes("vsc") ||
                matName.includes("code")
              ) {
                // Configure texture wrapping for infinite continuous scrolling
                mat.map.wrapS = THREE.RepeatWrapping;
                mat.map.wrapT = THREE.RepeatWrapping;
                
                if (!screenTexturesRef.current.includes(mat.map)) {
                  screenTexturesRef.current.push(mat.map);
                }
              }
            }
          });
        }
      });
      
      // Console log for diagnosis of mesh names
      console.log("Traversed and found:", {
        fansCount: fansRef.current.length,
        screenTexturesCount: screenTexturesRef.current.length,
        fans: fansRef.current.map(f => f.name),
      });
    }
  }, [computer]);

  // Frameloop animation
  useFrame((state, delta) => {
    // Scroll the screen texture continuously (looks like code scrolling down)
    screenTexturesRef.current.forEach((texture) => {
      texture.offset.y -= delta * 0.05; // Smooth scrolling speed
    });
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1.5}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='always'
      dpr={[1, 1.5]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ powerPreference: "high-performance", antialias: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
