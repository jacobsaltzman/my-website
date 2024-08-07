"use client";
// src/components/StarGrid.tsx
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function StarGrid() {
  const container = useRef(null);

  gsap.registerPlugin(useGSAP);

  const grid = [14, 30] as const;

  useGSAP(
    () => {
      gsap.set(".star-grid-item", {
        opacity: 0,
        transformOrigin: "center",
        color: "#fff",
      });
      gsap.set(container.current, { opacity: 1 });

      const tl = gsap.timeline();

      // Entrance animation
      tl.to(".star-grid-item", {
        keyframes: [
          {
            opacity: 0,
            duration: 1,
          },
          {
            opacity: 0.4,
            rotate: "+=180",
            color: "#ffd057",
            scale: 0.5,
            duration: 0.9,
            stagger: {
              amount: 2,
              grid: grid,
              from: "random",
            },
          },
          {
            opacity: 0,
            rotate: "+=180",
            color: "#fff",
            scale: 2,
            delay: -2,
            duration: 0.6,
            stagger: {
              amount: 3,
              grid: grid,
              from: "random",
            },
          },
        ],
      });

      // Loop animation
      tl.to(".star-grid-item", {
        delay: 8,
        repeat: -1,
        repeatDelay: 8,
        keyframes: [
          {
            opacity: .5,
            duration: 1,
          },
          {
            opacity: 0.4,
            rotate: "+=180",
            color: "#ffd057",
            scale: 0.5,
            duration: 0.3,
            stagger: {
              amount: 2,
              grid: grid,
              from: "random",
            },
          },
          {
            opacity: 0,
            rotate: "+=180",
            color: "#fff",
            scale: 2,
            delay: -2,
            duration: 0.2,
            stagger: {
              amount: 5,
              grid: grid,
              from: "random",
            },
          },
        ],
      });


      

      // Set initial state for building lights
      gsap.set(".building-light", {
        opacity: 1,
        transformOrigin: "center",
        scale: 1,
      });

      const buildingLightsTimeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 2,
      });

      buildingLightsTimeline.to(".building-light", {
        opacity: 0.2,
        scale: 1.5,
        duration: 1,
        stagger: {
          each: 0.5,
          repeat: -1,
          yoyo: true,
        },
        ease: "power1.inOut",
      });
    },
    { scope: container },
  );

  const buildings = [
    { x: 0, y: 395, width: 38, height: 30, fill: "#070825" }, // Building
    { x: 40, y: 375, width: 30, height: 50, fill: "#070815" }, // Building
    { x: 60, y: 360, width: 40, height: 65, fill: "#1a1a1a" }, // Building
    { x: 90, y: 380, width: 25, height: 45, fill: "#070815" }, // Building
    { x: 120, y: 385, width: 35, height: 55, fill: "#2a2a2a" }, // Building (dark grey)
    { x: 150, y: 380, width: 30, height: 50, fill: "#0a0a35" }, // Building (dark blue)
    { x: 190, y: 360, width: 40, height: 65, fill: "#070825" }, // Building
    { x: 200, y: 350, width: 50, height: 75, fill: "#070815" }, // Building
    { x: 230, y: 355, width: 40, height: 70, fill: "#070825" }, // Building
    { x: 270, y: 370, width: 20, height: 55, fill: "#2a2a2a" }, // Building
    { x: 310, y: 355, width: 40, height: 70, fill: "#070845" }, // Building
    { x: 350, y: 380, width: 25, height: 45, fill: "#1a1a1a" }, // Building
    { x: 370, y: 385, width: 30, height: 40, fill: "#070815" }, // Building
    { x: 420, y: 365, width: 45, height: 60, fill: "#070825" }, // Building
    { x: 450, y: 380, width: 25, height: 45, fill: "#070845" }, // Building
    { x: 480, y: 390, width: 35, height: 35, fill: "#070825" }, // Building
    { x: 490, y: 350, width: 20, height: 75, fill: "#1a1a1a" }, // Building
    { x: 500, y: 360, width: 40, height: 65, fill: "#070825" }, // Building
    { x: 530, y: 345, width: 60, height: 80, fill: "#070815" }, // Building
    { x: 550, y: 380, width: 15, height: 45, fill: "#2a2a2a" }, // Building
    { x: 570, y: 375, width: 25, height: 50, fill: "#070825" }, // Building
    { x: 590, y: 360, width: 40, height: 65, fill: "#1a1a1a" }, // Building
    { x: 600, y: 365, width: 25, height: 60, fill: "#070825" }, // Building
    { x: 650, y: 355, width: 40, height: 70, fill: "#070845" }, // Building
    { x: 710, y: 375, width: 30, height: 50, fill: "#070815" }, // Building
    { x: 760, y: 360, width: 45, height: 65, fill: "#070825" }, // Building
    { x: 820, y: 410, width: 25, height: 15, fill: "#1a1a1a" }, // Building
    { x: 850, y: 380, width: 30, height: 45, fill: "#0a0a35" }, // Building
    { x: 870, y: 390, width: 15, height: 35, fill: "#2a2a2a" }, // Building
    { x: 890, y: 360, width: 40, height: 65, fill: "#070815" }, // Building
    { x: 920, y: 380, width: 25, height: 45, fill: "#1a1a1a" }, // Building
  ];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 935 425"
      className="absolute -top-14 -z-10 opacity-90"
      id="star-grid"
      ref={container}
      opacity={0}
      // style={
      //   {maskImage: "linear-gradient(black, transparent)"}
      // }
    >
      <defs>
        <linearGradient id="neon-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#9751eb", stopOpacity: 1 }} />{" "}
          {/* Darker Light Purple */}
          <stop
            offset="20%"
            style={{ stopColor: "#4b0082", stopOpacity: 1 }}
          />{" "}
          {/* Darker Dark Purple */}
          <stop
            offset="40%"
            style={{ stopColor: "#6018cc", stopOpacity: 1 }}
          />{" "}
          {/* Darker Blue */}
          <stop
            offset="60%"
            style={{ stopColor: "#00008b", stopOpacity: 1 }}
          />{" "}
          {/* Darker Blue */}
          <stop
            offset="80%"
            style={{ stopColor: "#00004b", stopOpacity: 1 }}
          />{" "}
          {/* Darker Blue */}
          <stop
            offset="100%"
            style={{ stopColor: "#070815", stopOpacity: 1 }}
          />{" "}
          {/* Very Dark Blue */}
        </linearGradient>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill="url(#neon-gradient)"
        mask="url(#mask-gradient)"
      />

      {/* Star Grid */}
      <g className="star-grid-group">
        {[...Array(grid[0])].map((_, i) => {
          return [...Array(grid[1])].map((_, j) => {
            return (
              <path
                key={i + j}
                fill="currentColor"
                opacity="0"
                className="star-grid-item"
                d={`M${j * 32},${i * 32 + 10}a0.14,0.14,0,0,1,0.26,0l0.14,0.36a2.132,2.132,0,0,0,1.27,1.27l0.37,0.14a0.14,0.14,0,0,1,0,0.26l-0.37,0.14a2.132,2.132,0,0,0,-1.27,1.27l-0.14,0.37a0.14,0.14,0,0,1,-0.26,0l-0.14,-0.37a2.132,2.132,0,0,0,-1.27,-1.27l-0.36,-0.14a0.14,0.14,0,0,1,0,-0.26l0.37,-0.14a2.132,2.132,0,0,0,1.26,-1.27l0.14,-0.36z`}
              />
            );
          });
        })}
      </g>

      {/* Buildings */}
      <g className="buildings">
        {buildings.map((building, index) => (
          <rect
            key={index}
            x={building.x}
            y={building.y}
            width={building.width}
            height={building.height}
            fill={building.fill}
          />
        ))}
      </g>

      {/* Building Lights */}
      <g className="lights">
        {buildings.map((building, bIndex) =>
          [...Array(5)].map((_, lIndex) => (
            <rect
              key={`${bIndex}-${lIndex}`}
              x={building.x + Math.random() * (building.width - 5)} // Random x position within the building width
              y={building.y + Math.random() * (building.height - 10)} // Random y position within the building height
              width=".5"
              height=".5"
              fill="#ffff00" // Darker grey color for lights
              className="building-light"
            />
          )),
        )}
      </g>
    </svg>
  );
}
