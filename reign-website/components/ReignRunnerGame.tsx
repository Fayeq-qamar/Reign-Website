'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, RotateCcw, Crown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

interface ReignRunnerGameProps {
  isOpen: boolean
  onClose: () => void
}

export default function ReignRunnerGame({ isOpen, onClose }: ReignRunnerGameProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [score, setScore] = useState(0)
  const [gameState, setGameState] = useState<'START' | 'PLAYING' | 'GAME_OVER'>('START')
  const [highScore, setHighScore] = useState(0)
  const gameLoopRef = useRef<number>()

  useEffect(() => {
    if (!isOpen || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = 800
    canvas.height = 400

    // Game variables
    let runner = {
      x: 100,
      y: 280,
      width: 32,
      height: 40,
      velocityY: 0,
      isJumping: false
    }

    let obstacles: Array<{ x: number; y: number; width: number; height: number; type: 'obstacle' | 'collectible'; collected?: boolean; obstacleType?: 'bed' | 'sofa' | 'phone' | 'pizza' }> = []
    let speed = 6
    let gravity = 0.7
    let jumpPower = -14
    let frameCount = 0

    // Ground level
    const groundY = 320

    // Input handling
    const handleJump = () => {
      if (gameState === 'START') {
        setGameState('PLAYING')
      }
      if (gameState === 'PLAYING' && !runner.isJumping) {
        runner.velocityY = jumpPower
        runner.isJumping = true
      }
      if (gameState === 'GAME_OVER') {
        resetGame()
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault()
        handleJump()
      }
    }

    const handleClick = () => {
      handleJump()
    }

    window.addEventListener('keydown', handleKeyDown)
    canvas.addEventListener('click', handleClick)

    // Reset game
    const resetGame = () => {
      runner.y = 280
      runner.velocityY = 0
      runner.isJumping = false
      obstacles = []
      setScore(0)
      speed = 6
      frameCount = 0
      setGameState('PLAYING')
    }

    // Spawn obstacles and collectibles
    const spawnObstacle = () => {
      if (gameState !== 'PLAYING') return

      // Randomly spawn either obstacle or collectible
      const rand = Math.random()

      if (rand < 0.5) {
        // Spawn daily hurdle obstacle
        const obstacleTypes: Array<'bed' | 'sofa' | 'phone' | 'pizza'> = ['bed', 'sofa', 'phone', 'pizza']
        const obstacleType = obstacleTypes[Math.floor(Math.random() * obstacleTypes.length)]

        obstacles.push({
          x: canvas.width,
          y: groundY - 40,
          width: 40,
          height: 40,
          type: 'obstacle',
          obstacleType,
          collected: false // Initialize collected flag
        })
      } else {
        // Spawn collectible (hexagon)
        obstacles.push({
          x: canvas.width,
          y: groundY - 40 - Math.random() * 40,
          width: 30,
          height: 30,
          type: 'collectible',
          collected: false
        })
      }
    }

    // Draw hexagon
    const drawHexagon = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, color: string) => {
      ctx.save()
      ctx.fillStyle = color
      ctx.strokeStyle = '#FFF'
      ctx.lineWidth = 2

      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i
        const hx = x + size * Math.cos(angle)
        const hy = y + size * Math.sin(angle)
        if (i === 0) {
          ctx.moveTo(hx, hy)
        } else {
          ctx.lineTo(hx, hy)
        }
      }
      ctx.closePath()
      ctx.fill()
      ctx.stroke()
      ctx.restore()
    }

    // Draw daily hurdle obstacles
    const drawBed = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
      const pixelSize = 4
      // Bed pattern (10x10 grid)
      const pattern = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1,1,1], // Headboard
        [2,2,2,2,2,2,2,2,2,2], // Pillow
        [3,3,3,3,3,3,3,3,3,3], // Blanket
        [3,3,3,3,3,3,3,3,3,3],
        [3,3,3,3,3,3,3,3,3,3],
        [4,4,4,4,4,4,4,4,4,4], // Bed frame
        [0,4,0,0,0,0,0,0,4,0], // Legs
        [0,4,0,0,0,0,0,0,4,0],
      ]
      const colors: { [key: number]: string } = {
        0: 'transparent',
        1: '#8B4513', // Brown headboard
        2: '#FFFFFF', // White pillow
        3: '#FF6B6B', // Red blanket
        4: '#654321', // Dark brown frame
      }
      pattern.forEach((row, py) => {
        row.forEach((pixel, px) => {
          if (pixel !== 0) {
            ctx.fillStyle = colors[pixel]
            ctx.fillRect(x + px * pixelSize, y + py * pixelSize, pixelSize, pixelSize)
          }
        })
      })
    }

    const drawSofa = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
      const pixelSize = 4
      // Sofa pattern (10x10 grid)
      const pattern = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0,0,1], // Arms
        [1,0,0,0,0,0,0,0,0,1],
        [1,2,2,2,2,2,2,2,2,1], // Back
        [1,2,2,2,2,2,2,2,2,1],
        [1,3,3,3,3,3,3,3,3,1], // Seat
        [1,3,3,3,3,3,3,3,3,1],
        [1,1,1,1,1,1,1,1,1,1], // Base
        [0,1,0,0,0,0,0,0,1,0], // Legs
      ]
      const colors: { [key: number]: string } = {
        0: 'transparent',
        1: '#8B4513', // Brown frame
        2: '#4169E1', // Blue cushion
        3: '#4682B4', // Lighter blue seat
      }
      pattern.forEach((row, py) => {
        row.forEach((pixel, px) => {
          if (pixel !== 0) {
            ctx.fillStyle = colors[pixel]
            ctx.fillRect(x + px * pixelSize, y + py * pixelSize, pixelSize, pixelSize)
          }
        })
      })
    }

    const drawPhone = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
      const pixelSize = 4
      // Phone pattern (10x10 grid)
      const pattern = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,1,1,1,1,1,1,0,0],
        [0,0,1,2,2,2,2,1,0,0], // Screen
        [0,0,1,2,2,2,2,1,0,0],
        [0,0,1,2,2,2,2,1,0,0],
        [0,0,1,2,2,2,2,1,0,0],
        [0,0,1,2,2,2,2,1,0,0],
        [0,0,1,2,2,2,2,1,0,0],
        [0,0,1,1,3,3,1,1,0,0], // Button
        [0,0,1,1,1,1,1,1,0,0],
      ]
      const colors: { [key: number]: string } = {
        0: 'transparent',
        1: '#000000', // Black phone body
        2: '#87CEEB', // Blue screen
        3: '#FFFFFF', // White button
      }
      pattern.forEach((row, py) => {
        row.forEach((pixel, px) => {
          if (pixel !== 0) {
            ctx.fillStyle = colors[pixel]
            ctx.fillRect(x + px * pixelSize, y + py * pixelSize, pixelSize, pixelSize)
          }
        })
      })
    }

    const drawPizza = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
      const pixelSize = 4
      // Pizza slice pattern (10x10 grid)
      const pattern = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0], // Tip
        [0,0,0,0,1,1,1,0,0,0],
        [0,0,0,1,1,2,1,1,0,0], // Pepperoni
        [0,0,1,1,1,1,1,1,1,0],
        [0,1,1,2,1,1,2,1,1,1], // Pepperoni
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,2,1,1,1,1,1], // Pepperoni
        [1,3,3,3,3,3,3,3,3,1], // Crust
        [0,1,1,1,1,1,1,1,1,0],
      ]
      const colors: { [key: number]: string } = {
        0: 'transparent',
        1: '#FFD700', // Yellow cheese
        2: '#DC143C', // Red pepperoni
        3: '#D2691E', // Brown crust
      }
      pattern.forEach((row, py) => {
        row.forEach((pixel, px) => {
          if (pixel !== 0) {
            ctx.fillStyle = colors[pixel]
            ctx.fillRect(x + px * pixelSize, y + py * pixelSize, pixelSize, pixelSize)
          }
        })
      })
    }

    // Draw pixel art runner
    const drawRunner = (ctx: CanvasRenderingContext2D) => {
      ctx.save()

      const pixelSize = 4 // Each pixel is 4x4
      const px = runner.x
      const py = runner.y

      // Pixel art pattern (8x10 grid)
      const pattern = [
        [0,0,1,1,1,1,0,0], // Crown row 1
        [0,1,1,1,1,1,1,0], // Crown row 2
        [0,0,2,2,2,2,0,0], // Head
        [0,0,2,2,2,2,0,0], // Head
        [0,0,3,3,3,3,0,0], // Body
        [0,0,3,3,3,3,0,0], // Body
        [0,3,3,3,3,3,3,0], // Body
        [0,0,3,0,0,3,0,0], // Legs
        [0,0,3,0,0,3,0,0], // Legs
        [0,0,3,0,0,3,0,0], // Legs
      ]

      const colors: { [key: number]: string } = {
        0: 'transparent',
        1: '#FFD617', // Crown (yellow)
        2: '#FFA07A', // Head (light skin)
        3: '#000000', // Body/legs (black)
      }

      // Draw pixel art
      pattern.forEach((row, y) => {
        row.forEach((pixel, x) => {
          if (pixel !== 0) {
            ctx.fillStyle = colors[pixel]
            ctx.fillRect(px + x * pixelSize, py + y * pixelSize, pixelSize, pixelSize)
          }
        })
      })

      ctx.restore()
    }

    // Draw pixel art cloud
    const drawPixelCloud = (ctx: CanvasRenderingContext2D, x: number, y: number, scale: number = 1) => {
      const pixelSize = 6 * scale
      // Cloud pattern (8x5 grid)
      const pattern = [
        [0,0,1,1,1,0,0,0],
        [0,1,1,1,1,1,1,0],
        [1,1,1,1,1,1,1,1],
        [0,1,1,1,1,1,1,0],
        [0,0,1,1,1,1,0,0],
      ]

      pattern.forEach((row, py) => {
        row.forEach((pixel, px) => {
          if (pixel === 1) {
            ctx.fillStyle = '#FFFFFF'
            ctx.fillRect(x + px * pixelSize, y + py * pixelSize, pixelSize, pixelSize)
          }
        })
      })
    }

    // Draw city background (static pixel art)
    const drawBackground = (ctx: CanvasRenderingContext2D) => {
      // Bright blue sky gradient
      const skyGradient = ctx.createLinearGradient(0, 0, 0, groundY)
      skyGradient.addColorStop(0, '#87CEEB') // Sky blue
      skyGradient.addColorStop(1, '#B0E0E6') // Powder blue
      ctx.fillStyle = skyGradient
      ctx.fillRect(0, 0, canvas.width, groundY)

      // Top row of clouds
      drawPixelCloud(ctx, 80, 30, 1.2)
      drawPixelCloud(ctx, 250, 20, 0.9)
      drawPixelCloud(ctx, 420, 40, 1.1)
      drawPixelCloud(ctx, 600, 25, 1.0)
      drawPixelCloud(ctx, 720, 50, 0.8)

      // Second row of clouds (offset below first row)
      drawPixelCloud(ctx, 30, 90, 1.0)
      drawPixelCloud(ctx, 180, 100, 1.1)
      drawPixelCloud(ctx, 350, 85, 0.95)
      drawPixelCloud(ctx, 520, 95, 1.05)
      drawPixelCloud(ctx, 680, 110, 0.9)
    }

    // Draw ground
    const drawGround = (ctx: CanvasRenderingContext2D) => {
      ctx.fillStyle = '#D1D5DB'
      ctx.fillRect(0, groundY, canvas.width, canvas.height - groundY)

      // Ground line
      ctx.strokeStyle = '#9CA3AF'
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(0, groundY)
      ctx.lineTo(canvas.width, groundY)
      ctx.stroke()
    }

    // Collision detection
    const checkCollision = (r: typeof runner, o: typeof obstacles[0]) => {
      return (
        r.x < o.x + o.width &&
        r.x + r.width > o.x &&
        r.y < o.y + o.height &&
        r.y + r.height > o.y
      )
    }

    // Game loop
    const gameLoop = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background
      drawBackground(ctx)
      drawGround(ctx)

      if (gameState === 'PLAYING') {
        frameCount++

        // Update runner physics
        runner.velocityY += gravity
        runner.y += runner.velocityY

        // Ground collision
        if (runner.y >= groundY - runner.height) {
          runner.y = groundY - runner.height
          runner.velocityY = 0
          runner.isJumping = false
        }

        // Spawn obstacles
        if (frameCount % 100 === 0) {
          spawnObstacle()
        }

        // Update and draw obstacles
        for (let i = obstacles.length - 1; i >= 0; i--) {
          const obs = obstacles[i]
          obs.x -= speed

          // Check collision
          if (checkCollision(runner, obs)) {
            if (obs.type === 'collectible' && !obs.collected) {
              // Collect hexagon
              obs.collected = true
              setScore(prev => {
                const newScore = prev + 1
                if (newScore > highScore) {
                  setHighScore(newScore)
                }
                return newScore
              })
            } else if (obs.type === 'obstacle' && !obs.collected) {
              // Game over on obstacle hit (only once)
              obs.collected = true // Mark as hit to prevent multiple triggers
              setGameState('GAME_OVER')
            }
          }

          // Draw based on type
          if (obs.type === 'collectible' && !obs.collected) {
            // Draw hexagon collectible (only if not collected)
            drawHexagon(ctx, obs.x + obs.width / 2, obs.y + obs.height / 2, 15, '#FFD617')
          } else if (obs.type === 'obstacle' && obs.obstacleType) {
            // Draw daily hurdle obstacles (always visible)
            switch (obs.obstacleType) {
              case 'bed':
                drawBed(ctx, obs.x, obs.y)
                break
              case 'sofa':
                drawSofa(ctx, obs.x, obs.y)
                break
              case 'phone':
                drawPhone(ctx, obs.x, obs.y)
                break
              case 'pizza':
                drawPizza(ctx, obs.x, obs.y)
                break
            }
          }

          // Remove off-screen obstacles
          if (obs.x + obs.width < 0) {
            obstacles.splice(i, 1)
          }
        }

        // Increase difficulty progressively based on score
        const targetSpeed = 6 + (score * 0.2) // Speed increases with each collectible
        if (targetSpeed > speed && speed < 12) {
          speed = Math.min(targetSpeed, 12) // Cap at 12
        }
      }

      // Draw runner
      drawRunner(ctx)

      // Draw start/game over screens
      if (gameState === 'START') {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        ctx.fillStyle = '#FFF'
        ctx.font = 'bold 40px Inter'
        ctx.textAlign = 'center'
        ctx.fillText('Reign Runner', canvas.width / 2, canvas.height / 2 - 60)

        ctx.font = '18px Inter'
        ctx.fillText('Press SPACE or CLICK to Jump', canvas.width / 2, canvas.height / 2)

        ctx.fillStyle = '#FFD617'
        ctx.font = 'bold 20px Inter'
        ctx.fillText('Collect Territories 👑', canvas.width / 2, canvas.height / 2 + 40)

        ctx.fillStyle = '#FF6B6B'
        ctx.font = '18px Inter'
        ctx.fillText('Avoid Daily Hurdles! 🛏️ 📱 🍕', canvas.width / 2, canvas.height / 2 + 75)
      }

      if (gameState === 'GAME_OVER') {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        ctx.fillStyle = '#FFF'
        ctx.font = 'bold 50px Inter'
        ctx.textAlign = 'center'
        ctx.fillText('Game Over!', canvas.width / 2, canvas.height / 2 - 60)

        ctx.font = '30px Inter'
        ctx.fillStyle = '#FFD617'
        ctx.fillText(`Score: ${score}`, canvas.width / 2, canvas.height / 2)

        ctx.fillStyle = '#FFF'
        ctx.font = '20px Inter'
        ctx.fillText('Press SPACE or CLICK to Retry', canvas.width / 2, canvas.height / 2 + 60)
      }

      gameLoopRef.current = requestAnimationFrame(gameLoop)
    }

    gameLoop()

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      canvas.removeEventListener('click', handleClick)
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current)
      }
    }
  }, [isOpen, gameState])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative bg-white rounded-2xl shadow-2xl p-6 max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Crown className="w-8 h-8 text-brand-yellow-500" />
                <div>
                  <h3 className="text-2xl font-display font-bold text-brand-black">Reign Runner</h3>
                  <p className="text-sm text-brand-gray-600">Collect territories as you run!</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-xs text-brand-gray-600">Score</div>
                  <div className="text-2xl font-bold text-brand-yellow-600 flex items-center gap-1">
                    <Crown className="w-5 h-5" />
                    {score}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-brand-gray-600">Best</div>
                  <div className="text-2xl font-bold text-brand-gray-800">{highScore}</div>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-brand-gray-100 hover:bg-brand-gray-200 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-brand-gray-700" />
                </button>
              </div>
            </div>

            {/* Game Canvas */}
            <div className="relative bg-gradient-to-b from-brand-yellow-50 to-white rounded-xl overflow-hidden border-2 border-brand-gray-200">
              <canvas
                ref={canvasRef}
                className="w-full h-auto"
                style={{ maxHeight: '400px' }}
              />
            </div>

            {/* Controls Info */}
            <div className="mt-4 flex items-center justify-center text-sm text-brand-gray-600">
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-brand-gray-100 rounded text-xs font-mono">SPACE</kbd>
                <span>or</span>
                <kbd className="px-2 py-1 bg-brand-gray-100 rounded text-xs font-mono">CLICK</kbd>
                <span>to jump</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
