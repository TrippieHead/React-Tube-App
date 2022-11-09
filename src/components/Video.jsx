import { useEffect, useState } from "react"

export const Video = (props) => {

  const [rate, setRate] = useState(0)
  const rateVideo = () => {
    setRate(rate+1)
  }
  
  useEffect(() => {
    console.log('El componente se actualizo.');
  }, [rate]) // componentDidUpdate

  return (
      <div className="video-container">
        <div className="video-image">
          <img src={props.thumbnail} alt="Same alt value" />
        </div>
        <div className="video-info">
          <h3>{props.title}</h3>
          <br></br>
          <span>This video has {rate} stars </span>
          <button className='btn' onClick={rateVideo}>Rate</button>
          <p>Upload date: {props.dateAdded}</p>
          <button onClick={props.deleteVideo}>Delete this video</button>
          <p>{props.description}</p>
        </div>
      </div>
  )
}