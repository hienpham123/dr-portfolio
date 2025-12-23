'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Line } from '@react-three/drei'
import { Suspense, useMemo, useRef } from 'react'
import type { Group, Vector3 } from 'three'

function SoftGradientDome() {
  return (
    <mesh scale={14} position={[0, -1, -2]}>
      <sphereGeometry args={[1, 48, 48]} />
      <meshStandardMaterial
        color="#f8fbff"
        emissive="#e0f2ff"
        emissiveIntensity={0.25}
        roughness={0.95}
        metalness={0.05}
        transparent
        opacity={0.28}
        side={2}
      />
    </mesh>
  )
}

function HeartbeatLine() {
  const groupRef = useRef<Group>(null)

  const points = useMemo(() => {
    return Array.from({ length: 90 }, (_, i) => {
      const x = i * 0.12 - 5.2
      const base = Math.sin(i * 0.45) * 0.05
      const spike =
        i % 30 === 8
          ? 0.6
          : i % 30 === 9
            ? -0.25
            : 0
      const y = base + spike
      return [x, y, 0] as unknown as Vector3
    })
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (groupRef.current) {
      groupRef.current.position.x = Math.sin(t * 0.4) * 0.8
    }
  })

  return (
    <group ref={groupRef} position={[0, 0.3, -0.2]}>
      <Line points={points} color="#0ea5e9" lineWidth={2} dashed={false} />
      <Line
        points={points}
        color="#22c55e"
        lineWidth={1}
        dashed
        dashSize={0.18}
        gapSize={0.12}
        opacity={0.8}
      />
    </group>
  )
}

function FloatingCrosses() {
  const crosses = useMemo(
    () =>
      [
        { pos: [-2.2, 0.5, -0.3] as unknown as Vector3, scale: 0.16 },
        { pos: [2.1, 0.9, -0.4] as unknown as Vector3, scale: 0.14 },
        { pos: [-1, -0.5, 0] as unknown as Vector3, scale: 0.12 },
        { pos: [1.4, -0.7, -0.2] as unknown as Vector3, scale: 0.12 },
      ] as { pos: Vector3; scale: number }[],
    []
  )

  return (
    <group>
      {crosses.map((c, idx) => (
        <group key={idx} position={c.pos}>
          <mesh scale={[c.scale, c.scale * 0.2, c.scale]}>
            <boxGeometry />
            <meshStandardMaterial
              color="#0ea5e9"
              emissive="#0ea5e9"
              emissiveIntensity={0.35}
              transparent
              opacity={0.8}
              roughness={0.4}
              metalness={0.2}
            />
          </mesh>
          <mesh scale={[c.scale * 0.2, c.scale, c.scale]}>
            <boxGeometry />
            <meshStandardMaterial
              color="#22c55e"
              emissive="#22c55e"
              emissiveIntensity={0.35}
              transparent
              opacity={0.8}
              roughness={0.4}
              metalness={0.2}
            />
          </mesh>
        </group>
      ))}
    </group>
  )
}

function NetworkGraph() {
  const groupRef = useRef<Group>(null)

  const { nodes, links } = useMemo(() => {
    // Một cụm node cố định mô tả "mạng social/brand"
    const nodes: { position: Vector3; size: number; primary?: boolean }[] = [
      { position: [0, 0.6, 0] as unknown as Vector3, size: 0.2, primary: true },
      { position: [-1.4, 0.1, 0.4] as unknown as Vector3, size: 0.16, primary: true },
      { position: [1.6, 0.2, -0.2] as unknown as Vector3, size: 0.16, primary: true },
      { position: [-0.6, -0.9, -0.3] as unknown as Vector3, size: 0.14 },
      { position: [0.9, -0.8, 0.5] as unknown as Vector3, size: 0.14 },
      { position: [-2, 0.9, -0.5] as unknown as Vector3, size: 0.12 },
      { position: [2, 1, 0.5] as unknown as Vector3, size: 0.12 },
      { position: [0, -1.6, 0] as unknown as Vector3, size: 0.12 },
    ]

    const links: [Vector3, Vector3][] = [
      [nodes[0].position, nodes[1].position],
      [nodes[0].position, nodes[2].position],
      [nodes[1].position, nodes[3].position],
      [nodes[2].position, nodes[4].position],
      [nodes[1].position, nodes[5].position],
      [nodes[2].position, nodes[6].position],
      [nodes[3].position, nodes[7].position],
      [nodes[4].position, nodes[7].position],
      [nodes[1].position, nodes[2].position],
    ]

    return { nodes, links }
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.1
      groupRef.current.rotation.x = Math.sin(t * 0.08) * 0.06
    }
  })

  return (
    <group ref={groupRef} position={[0, 0.1, 0]}>
      {/* Links */}
      {links.map((pair, idx) => (
        <Line
          key={idx}
          points={pair}
          color="#0ea5e9"
          lineWidth={1}
          dashed
          dashSize={0.16}
          gapSize={0.08}
          opacity={0.7}
        />
      ))}

      {/* Nodes */}
      {nodes.map((node, idx) => (
        <mesh key={idx} position={node.position}>
          <sphereGeometry args={[node.size, 24, 24]} />
          <meshStandardMaterial
            color={node.primary ? '#0ea5e9' : '#22c55e'}
            emissive={node.primary ? '#0ea5e9' : '#22c55e'}
            emissiveIntensity={node.primary ? 0.6 : 0.35}
            roughness={0.4}
            metalness={0.3}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
    </group>
  )
}

export default function MedicalScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 60 }}
      className="w-full h-full"
    >
      <Suspense fallback={null}>
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[6, 8, 4]} intensity={0.9} />
        <pointLight position={[-6, -4, -4]} intensity={0.35} />

        <SoftGradientDome />
        <HeartbeatLine />
        <FloatingCrosses />
      </Suspense>
    </Canvas>
  )
}
