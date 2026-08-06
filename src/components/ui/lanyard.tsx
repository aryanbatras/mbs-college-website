/* eslint-disable react/no-unknown-property */
"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { useTexture, Environment, Lightformer } from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import * as THREE from "three";

// Extend Three.js with meshline components
extend({ MeshLineGeometry, MeshLineMaterial });

const LANYARD_PNG_URL = "/lanyard/lanyard.png";

interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
  frontImage?: string | null;
  backImage?: string | null;
  imageFit?: "cover" | "contain";
  lanyardImage?: string | null;
  lanyardWidth?: number;
  bandColor?: string;
  animate?: boolean;
}

export default function Lanyard({
  position = [0, 0, 30],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true,
  frontImage = null,
  backImage = null,
  imageFit = "cover",
  lanyardImage = null,
  lanyardWidth = 1,
  bandColor = "#00274C",
  animate = false,
}: LanyardProps) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 768
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="lanyard-wrapper">
      <Canvas
        camera={{ position, fov }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) =>
          gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)
        }
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
          <Band
            isMobile={isMobile}
            frontImage={frontImage}
            backImage={backImage}
            imageFit={imageFit}
            lanyardImage={lanyardImage}
            lanyardWidth={lanyardWidth}
            bandColor={bandColor}
            animate={animate}
          />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

interface BandProps {
  maxSpeed?: number;
  minSpeed?: number;
  isMobile: boolean;
  frontImage: string | null;
  backImage: string | null;
  imageFit: string;
  lanyardImage: string | null;
  lanyardWidth: number;
  bandColor: string;
  animate: boolean;
}

function Band({
  maxSpeed = 50,
  minSpeed = 0,
  isMobile = false,
  frontImage,
  imageFit,
  lanyardImage,
  lanyardWidth,
  bandColor,
  animate,
}: BandProps) {
  const band = useRef<any>(null);
  const fixed = useRef<any>(null);
  const j1 = useRef<any>(null);
  const j2 = useRef<any>(null);
  const j3 = useRef<any>(null);
  const card = useRef<any>(null);
  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();
  const hasAnimated = useRef(false);

  const segmentProps = {
    type: "dynamic" as const,
    canSleep: true,
    colliders: undefined,
    angularDamping: 4,
    linearDamping: 4,
  };

  // Create card geometry
  const cardGeometry = useMemo(() => {
    return new THREE.BoxGeometry(1.6, 2.25, 0.02);
  }, []);

  // Create lanyard texture
  const texture = useTexture(lanyardImage || LANYARD_PNG_URL);
  const logoTexture = useTexture(frontImage || "/logo.png");

  // Create improved card material with detailed texture
  const cardMaterial = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 850;
    const ctx = canvas.getContext("2d");
    if (!ctx) return new THREE.MeshPhysicalMaterial({ color: 0x00274C });

    const W = canvas.width;
    const H = canvas.height;

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, W, H);
    gradient.addColorStop(0, "#00274C");
    gradient.addColorStop(0.5, "#00274C");
    gradient.addColorStop(1, "#1E406B");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, W, H);

    // Subtle pattern overlay
    ctx.globalAlpha = 0.03;
    for (let i = 0; i < W; i += 20) {
      for (let j = 0; j < H; j += 20) {
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(i, j, 1, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.globalAlpha = 1;

    // Yellow top accent bar
    const topGradient = ctx.createLinearGradient(0, 0, W, 0);
    topGradient.addColorStop(0, "#FFCB05");
    topGradient.addColorStop(0.5, "#FFC107");
    topGradient.addColorStop(1, "#FFCB05");
    ctx.fillStyle = topGradient;
    ctx.fillRect(0, 0, W, 16);

    // Yellow bottom accent bar
    ctx.fillStyle = topGradient;
    ctx.fillRect(0, H - 16, W, 16);

    // Logo
    const logoImage = logoTexture.image as
      | HTMLImageElement
      | HTMLCanvasElement
      | null;
    if (logoImage && logoImage.width > 0) {
      const logoSize = 120;
      const logoX = (W - logoSize) / 2;
      const logoY = 80;

      // Logo background circle
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
      ctx.beginPath();
      ctx.arc(
        W / 2,
        logoY + logoSize / 2,
        logoSize / 2 + 10,
        0,
        Math.PI * 2
      );
      ctx.fill();

      ctx.drawImage(logoImage, logoX, logoY, logoSize, logoSize);
    } else {
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
      ctx.beginPath();
      ctx.arc(W / 2, 140, 70, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#FFCB05";
      ctx.font = "bold 32px Arial, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("MBSCET", W / 2, 148);
    }

    // College acronym
    ctx.fillStyle = "#FFCB05";
    ctx.font = "bold 48px Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("MBSCET", W / 2, 260);

    // Decorative line
    const lineGradient = ctx.createLinearGradient(
      W / 2 - 100,
      0,
      W / 2 + 100,
      0
    );
    lineGradient.addColorStop(0, "transparent");
    lineGradient.addColorStop(0.3, "#FFCB05");
    lineGradient.addColorStop(0.7, "#FFCB05");
    lineGradient.addColorStop(1, "transparent");
    ctx.strokeStyle = lineGradient;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(W / 2 - 120, 280);
    ctx.lineTo(W / 2 + 120, 280);
    ctx.stroke();

    // College name
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 22px Arial, sans-serif";
    ctx.fillText("Mahant Bachittar Singh", W / 2, 330);

    ctx.font = "18px Arial, sans-serif";
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.fillText("College of Engineering", W / 2, 365);
    ctx.fillText("& Technology", W / 2, 395);

    // Decorative line
    ctx.strokeStyle = lineGradient;
    ctx.beginPath();
    ctx.moveTo(W / 2 - 80, 420);
    ctx.lineTo(W / 2 + 80, 420);
    ctx.stroke();

    // Established year
    ctx.fillStyle = "#FFCB05";
    ctx.font = "bold 36px Arial, sans-serif";
    ctx.fillText("Est. 1999", W / 2, 480);

    // Location
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
    ctx.font = "16px Arial, sans-serif";
    ctx.fillText("📍 Babliana, Jammu", W / 2, 530);

    // Accreditations
    ctx.fillStyle = "#FFCB05";
    ctx.font = "bold 14px Arial, sans-serif";
    ctx.fillText("NBA Accredited  •  AICTE Approved", W / 2, 580);

    // Programs
    ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
    ctx.font = "13px Arial, sans-serif";
    ctx.fillText("CSE • IT • ECE • EE • ME • Civil • MCA", W / 2, 620);

    // Bottom decorative element
    ctx.strokeStyle = "rgba(255, 203, 5, 0.3)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(40, H - 60);
    ctx.lineTo(W - 40, H - 60);
    ctx.stroke();

    // Website
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    ctx.font = "12px Arial, sans-serif";
    ctx.fillText("www.mbscet.edu.in", W / 2, H - 35);

    const canvasTexture = new THREE.CanvasTexture(canvas);
    canvasTexture.colorSpace = THREE.SRGBColorSpace;

    return new THREE.MeshPhysicalMaterial({
      map: canvasTexture,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      roughness: 0.85,
      metalness: 0.7,
      envMapIntensity: 0.5,
    });
  }, [logoTexture]);

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );

  const [dragged, setDragged] = useState<false | THREE.Vector3>(false);
  const [hovered, setHovered] = useState(false);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.5, 0]]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => void (document.body.style.cursor = "auto");
    }
  }, [hovered, dragged]);

  // Trigger drop animation when animate becomes true
  useEffect(() => {
    if (animate && !hasAnimated.current && card.current) {
      hasAnimated.current = true;

      // Set initial position above the viewport
      const startPos = new THREE.Vector3(2, 8, 0);
      card.current.setTranslation(startPos);
      [card, j1, j2, j3].forEach((ref) => ref.current?.wakeUp());

      // Apply a slight spin for dramatic effect
      card.current.setAngvel({ x: 0, y: 2, z: 1 });

      // After a short delay, apply downward force
      setTimeout(() => {
        if (card.current) {
          card.current.applyImpulse(
            { x: -0.5, y: -3, z: 0 },
            { x: 0, y: 0, z: 0 }
          );
        }
      }, 100);
    }
  }, [animate]);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }
    if (fixed.current) {
      [j1, j2].forEach((ref) => {
        if (!ref.current.lerped)
          ref.current.lerped = new THREE.Vector3().copy(
            ref.current.translation()
          );
        const clampedDistance = Math.max(
          0.1,
          Math.min(
            1,
            ref.current.lerped.distanceTo(ref.current.translation())
          )
        );
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 32));
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({
        x: ang.x,
        y: ang.y - rot.y * 0.25,
        z: ang.z,
      });
    }
  });

  (curve as any).curveType = "chordal";
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onPointerUp={(e: any) => (
              e.target.releasePointerCapture(e.pointerId),
              setDragged(false)
            )}
            onPointerDown={(e: any) => (
              e.target.setPointerCapture(e.pointerId),
              setDragged(
                new THREE.Vector3()
                  .copy(e.point)
                  .sub(vec.copy(card.current.translation()))
              )
            )}
          >
            <mesh geometry={cardGeometry} material={cardMaterial} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        {/* @ts-ignore - meshline extension */}
        <meshLineGeometry />
        {/* @ts-ignore - meshline extension */}
        <meshLineMaterial
          color={bandColor}
          depthTest={false}
          resolution={isMobile ? [1000, 2000] : [1000, 1000]}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={lanyardWidth}
        />
      </mesh>
    </>
  );
}
