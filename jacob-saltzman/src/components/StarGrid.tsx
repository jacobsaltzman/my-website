// src/components/StarGrid.tsx

export default function StarGrid() {
  const grid = [14, 30] as const;
  const buildings = [
    { x: 40, y: 375, width: 30, height: 50, fill: "#070815" }, // Building 1
    { x: 90, y: 360, width: 40, height: 65, fill: "#070825" }, // Building 2
    { x: 150, y: 380, width: 25, height: 45, fill: "#1a1a1a" }, // Building 3
    { x: 200, y: 350, width: 50, height: 75, fill: "#070815" }, // Building 4
    { x: 270, y: 370, width: 20, height: 55, fill: "#070825" }, // Building 5
    { x: 310, y: 355, width: 40, height: 70, fill: "#070845" }, // Building 6
    { x: 370, y: 385, width: 30, height: 40, fill: "#070815" }, // Building 7
    { x: 420, y: 365, width: 45, height: 60, fill: "#070825" }, // Building 8
    { x: 480, y: 370, width: 35, height: 55, fill: "#1a1a1a" }, // Building 9
    { x: 530, y: 345, width: 60, height: 80, fill: "#070815" }, // Building 10
    { x: 600, y: 365, width: 25, height: 60, fill: "#070825" }, // Building 11
    { x: 650, y: 355, width: 40, height: 70, fill: "#070845" }, // Building 12
    { x: 710, y: 375, width: 30, height: 50, fill: "#070815" }, // Building 13
    { x: 760, y: 360, width: 45, height: 65, fill: "#070825" }, // Building 14
    { x: 820, y: 380, width: 25, height: 45, fill: "#1a1a1a" }, // Building 15
    { x: 870, y: 350, width: 50, height: 75, fill: "#070815" }, // Building 16
  ];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 935 425"
      className="absolute -top-14 -z-10"
      id="star-grid"
    >
      <defs>
        <linearGradient id="neon-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#9751eb", stopOpacity: 1 }} /> {/* Darker Light Purple */}
          <stop offset="20%" style={{ stopColor: "#4b0082", stopOpacity: 1 }} /> {/* Darker Dark Purple */}
          <stop offset="40%" style={{ stopColor: "#6018cc", stopOpacity: 1 }} /> {/* Darker Blue */}
          <stop offset="60%" style={{ stopColor: "#00008b", stopOpacity: 1 }} /> {/* Darker Blue */}
          <stop offset="80%" style={{ stopColor: "#00004b", stopOpacity: 1 }} /> {/* Darker Blue */}
          <stop offset="100%" style={{ stopColor: "#070815", stopOpacity: 1 }} /> {/* Very Dark Blue */}
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#neon-gradient)" mask="url(#mask-gradient)" />
      
      {/* Star Grid */}
      <g className="star-grid-group">
        {[...Array(grid[0])].map((_, i) => {
          return [...Array(grid[1])].map((_, j) => {
            return (
              <path
                key={i + j}
                fill="currentColor"
                opacity=".6" // Slightly increased opacity for better visibility
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
          <rect key={index} x={building.x} y={building.y} width={building.width} height={building.height} fill={building.fill} />
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
              width="2"
              height="3"
              fill="#ffff00" // Darker grey color for lights
            />
          ))
        )}
      </g>
    </svg>
  );
}
