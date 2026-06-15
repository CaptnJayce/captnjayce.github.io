interface RoseSticker {
  id: number
  x: number
  y: number
  size: number
  rotation: number
  opacity: number
}

const STICKERS: RoseSticker[] = [
  { id: 0, x: 8, y: 12, size: 110, rotation: 15, opacity: 0.1 },
  { id: 1, x: 22, y: 28, size: 90, rotation: 45, opacity: 0.08 },
  { id: 2, x: 38, y: 8, size: 130, rotation: 120, opacity: 0.12 },
  { id: 3, x: 52, y: 22, size: 100, rotation: 200, opacity: 0.09 },
  { id: 4, x: 68, y: 15, size: 85, rotation: 75, opacity: 0.07 },
  { id: 5, x: 85, y: 30, size: 120, rotation: 310, opacity: 0.11 },
  { id: 6, x: 12, y: 48, size: 95, rotation: 170, opacity: 0.08 },
  { id: 7, x: 30, y: 55, size: 115, rotation: 260, opacity: 0.1 },
  { id: 8, x: 48, y: 42, size: 80, rotation: 30, opacity: 0.06 },
  { id: 9, x: 62, y: 58, size: 105, rotation: 140, opacity: 0.09 },
  { id: 10, x: 78, y: 48, size: 125, rotation: 220, opacity: 0.11 },
  { id: 11, x: 92, y: 65, size: 90, rotation: 85, opacity: 0.08 },
  { id: 12, x: 18, y: 72, size: 100, rotation: 350, opacity: 0.1 },
  { id: 13, x: 35, y: 82, size: 85, rotation: 110, opacity: 0.07 },
  { id: 14, x: 55, y: 75, size: 115, rotation: 190, opacity: 0.1 },
  { id: 15, x: 72, y: 85, size: 95, rotation: 40, opacity: 0.08 },
  { id: 16, x: 88, y: 78, size: 110, rotation: 280, opacity: 0.09 },
  { id: 17, x: 45, y: 92, size: 80, rotation: 155, opacity: 0.07 },
  { id: 18, x: 5, y: 88, size: 70, rotation: 60, opacity: 0.06 },
  { id: 19, x: 95, y: 92, size: 75, rotation: 330, opacity: 0.07 },
]

function RoseBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {STICKERS.map((sticker) => (
        <img
          key={sticker.id}
          src="/assets/rose-bg.svg"
          alt=""
          className="rose-sticker"
          data-id={sticker.id}
          style={{
            position: 'absolute',
            left: `${sticker.x}%`,
            top: `${sticker.y}%`,
            width: `${sticker.size}px`,
            height: `${sticker.size}px`,
            transform: `translate(-50%, -50%) rotate(${sticker.rotation}deg)`,
            opacity: sticker.opacity,
            filter: 'brightness(0) invert(1)',
          }}
        />
      ))}
    </div>
  )
}

export default RoseBackground
