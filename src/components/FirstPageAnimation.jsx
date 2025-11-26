import React, { useState, useEffect } from 'react';
import ganeshMap from "../assets/images/ganeshMap.png";

const FirstPageAnimation = () => {
  const mapImage = ganeshMap;
  
  const years = [2000, 2001, 2003, 2005, 2007, 2010, 2012, 2015, 2018, 2020, 2022, 2024];
  
  const buildings = [
    { id: 1, name: "Skyline Tower", builder: "Alpha Constructions", year: 2000, x: 15, y: 25, color: "#3B82F6" },
    { id: 2, name: "Pearl Heights", builder: "Beta Developers", year: 2001, x: 45, y: 35, color: "#10B981" },
    { id: 3, name: "Crystal Plaza", builder: "Gamma Estates", year: 2003, x: 70, y: 20, color: "#F59E0B" },
    { id: 4, name: "Emerald Gardens", builder: "Delta Builders", year: 2005, x: 25, y: 60, color: "#EF4444" },
    { id: 5, name: "Diamond Residency", builder: "Epsilon Constructions", year: 2007, x: 80, y: 55, color: "#8B5CF6" },
    { id: 6, name: "Golden Gate", builder: "Zeta Developers", year: 2010, x: 50, y: 70, color: "#EC4899" },
    { id: 7, name: "Platinum Towers", builder: "Eta Estates", year: 2012, x: 35, y: 45, color: "#14B8A6" },
    { id: 8, name: "Silver Springs", builder: "Theta Builders", year: 2015, x: 65, y: 40, color: "#F97316" },
    { id: 9, name: "Ruby Palace", builder: "Iota Constructions", year: 2018, x: 20, y: 80, color: "#06B6D4" },
    { id: 10, name: "Sapphire Heights", builder: "Kappa Developers", year: 2020, x: 75, y: 75, color: "#8B5CF6" },
    { id: 11, name: "Topaz Towers", builder: "Lambda Estates", year: 2022, x: 55, y: 25, color: "#EC4899" },
    { id: 12, name: "Opal Residency", builder: "Mu Builders", year: 2024, x: 40, y: 55, color: "#10B981" },
  ];

  const [currentYearIndex, setCurrentYearIndex] = useState(0);
  const [visibleBuildings, setVisibleBuildings] = useState([]);
  const [hoveredBuilding, setHoveredBuilding] = useState(null);
  const [mapTransform, setMapTransform] = useState({ scale: 1, x: 0, y: 0 });

  // 🔥 handle zoom + pan toward the latest building
  const zoomToBuilding = (xPercent, yPercent) => {
    const mapWidth = window.innerWidth;
    const mapHeight = window.innerHeight;
    const targetX = (mapWidth * xPercent) / 100;
    const targetY = (mapHeight * yPercent) / 100;

    const centerX = mapWidth / 2;
    const centerY = mapHeight / 2;

    const translateX = (centerX - targetX) / 2; // smoother pan
    const translateY = (centerY - targetY) / 2;

    setMapTransform({ scale: 1.5, x: translateX, y: translateY });

    setTimeout(() => setMapTransform({ scale: 1, x: 0, y: 0 }), 1200);
  };

  useEffect(() => {
    const currentYear = years[currentYearIndex];
    const buildingsToShow = buildings.filter(b => b.year <= currentYear);
    setVisibleBuildings(buildingsToShow);

    if (buildingsToShow.length > 0) {
      const newBuilding = buildingsToShow[buildingsToShow.length - 1];
      zoomToBuilding(newBuilding.x, newBuilding.y);
    }
  }, [currentYearIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYearIndex(prev =>
        prev < years.length - 1 ? prev + 1 : 0
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const styles = {
    container: {
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      position: 'relative',
      background: '#000',
    },
    mapWrapper: {
      position: 'relative',
      width: '100%',
      height: '100%',
      transition: 'transform 2s ease-in-out',
      transform: `scale(${mapTransform.scale}) translate(${mapTransform.x}px, ${mapTransform.y}px)`,
    },
    mapImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    mapOverlay: {
      position: 'absolute',
      inset: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    building: {
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      cursor: 'pointer',
      zIndex: 10,
    },
    buildingPerspective: {
      position: 'relative',
      perspective: '800px',
    },
    buildingShadow: {
      position: 'absolute',
      bottom: '0',
      left: '50%',
      transform: 'translateX(-50%) translateY(100%) scale(1.2, 0.4)',
      width: '32px',
      height: '8px',
      borderRadius: '50%',
      filter: 'blur(4px)',
      opacity: 0.3,
    },
    buildingBody: {
      width: '40px',
      height: '64px',
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 10px 40px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.1)',
    },
    windows: {
      position: 'absolute',
      inset: '0',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1px',
      padding: '4px',
    },
    window: {
      backgroundColor: '#fef08a',
      opacity: 0.6,
      borderRadius: '2px',
    },
    buildingShine: {
      position: 'absolute',
      inset: '0',
      background: 'linear-gradient(to bottom right, rgba(255,255,255,0.2), transparent)',
      transform: 'translateX(-50%)',
    },
    antenna: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '2px',
      backgroundColor: '#f87171',
      height: '8px',
      top: '-8px',
      boxShadow: '0 0 10px rgba(248, 113, 113, 0.8)',
    },
    antennaLight: {
      position: 'absolute',
      top: '0',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '4px',
      height: '4px',
      backgroundColor: '#ef4444',
      borderRadius: '50%',
    },
    yearDisplay: {
      position: 'absolute',
      top: '40px',
      right: '60px',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(12px)',
      padding: '20px 40px',
      borderRadius: '16px',
      border: '2px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
      zIndex: 20,
    },
    yearText: {
      fontSize: '56px',
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      letterSpacing: '2px',
      textShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
    },
    buildingCount: {
      fontSize: '14px',
      color: '#94a3b8',
      marginTop: '8px',
      textAlign: 'center',
      letterSpacing: '1px',
    },
    tooltip: {
      position: 'absolute',
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: '16px',
      width: '220px',
      pointerEvents: 'none',
      zIndex: 50,
    },
    tooltipContent: {
      backgroundColor: 'rgba(0, 0, 0, 0.95)',
      color: 'white',
      padding: '16px',
      borderRadius: '12px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    tooltipArrow: {
      width: '12px',
      height: '12px',
      backgroundColor: 'rgba(0, 0, 0, 0.95)',
      transform: 'rotate(45deg) translateX(-50%)',
      position: 'absolute',
      left: '50%',
      bottom: '-5px',
      borderRight: '1px solid rgba(255, 255, 255, 0.1)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.mapWrapper}>
        <img src={mapImage} alt="City Map" style={styles.mapImage} />
        <div style={styles.mapOverlay} />

        {visibleBuildings.map((building) => {
          const isNew = building.year === years[currentYearIndex];
          return (
            <div
              key={building.id}
              style={{
                ...styles.building,
                left: `${building.x}%`,
                top: `${building.y}%`,
                animation: isNew ? 'buildingPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'none',
              }}
              onMouseEnter={() => setHoveredBuilding(building)}
              onMouseLeave={() => setHoveredBuilding(null)}
            >
              <div style={styles.buildingPerspective}>
                <div
                  style={{
                    transition: 'all 0.3s',
                    transform: hoveredBuilding?.id === building.id ? 'scale(1.4) rotateX(-10deg)' : 'scale(1)',
                  }}
                >
                  <div style={{ ...styles.buildingShadow, backgroundColor: building.color }} />

                  <div>
                    <div style={{ ...styles.buildingBody, backgroundColor: building.color }}>
                      <div style={styles.windows}>
                        {[...Array(15)].map((_, i) => (
                          <div
                            key={i}
                            style={{
                              ...styles.window,
                              animation: `flicker ${2 + Math.random() * 2}s infinite ${Math.random()}s`,
                            }}
                          />
                        ))}
                      </div>
                      <div style={styles.buildingShine} />
                    </div>

                    <div style={styles.antenna}>
                      <div style={{ ...styles.antennaLight, animation: 'pulse 2s infinite' }} />
                    </div>
                  </div>

                  {isNew && (
                    <div
                      style={{
                        position: 'absolute',
                        inset: '0',
                        borderRadius: '50%',
                        animation: 'pulseRing 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
                        border: `2px solid ${building.color}`,
                      }}
                    />
                  )}
                </div>
              </div>

              {hoveredBuilding?.id === building.id && (
                <div style={styles.tooltip}>
                  <div style={styles.tooltipContent}>
                    <div style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '6px' }}>{building.name}</div>
                    <div style={{ fontSize: '13px', color: '#cbd5e1', marginBottom: '4px' }}>{building.builder}</div>
                    <div style={{ fontSize: '13px', color: '#94a3b8' }}>Built in {building.year}</div>
                  </div>
                  <div style={styles.tooltipArrow} />
                </div>
              )}
            </div>
          );
        })}

        <div style={styles.yearDisplay}>
          <div style={styles.yearText}>{years[currentYearIndex]}</div>
          <div style={styles.buildingCount}>{visibleBuildings.length} Buildings Completed</div>
        </div>
      </div>

      <style>{`
        @keyframes buildingPop {
          0% { transform: translate(-50%, -50%) scale(0) rotateY(180deg); opacity: 0; }
          60% { transform: translate(-50%, -50%) scale(1.2) rotateY(0deg); }
          100% { transform: translate(-50%, -50%) scale(1) rotateY(0deg); opacity: 1; }
        }

        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }

        @keyframes flicker {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.9; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default FirstPageAnimation;
