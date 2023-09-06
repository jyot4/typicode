import React , {useRef}from 'react'

function Player() {

    const ref = useRef()



    
function handlePlay(){
ref.current.play()
}

function handlePause(){
ref.current.pause()
}

  return (
    <>
    <div className='player'>
      <button className='play' onClick={handlePlay}>Play</button>
      <button className='pause' onClick={handlePause}>Pause</button>
    </div>
    <video  ref={ref}>
        <source  src='/video/tumsehi.mp4'/>
    </video>
    </>
  )
}

export default Player
