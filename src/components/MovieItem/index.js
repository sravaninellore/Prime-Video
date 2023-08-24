import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import 'reactjs-popup/dist/index.css'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <Popup
      modal
      trigger={
        <button type="button" className="thumbnail-button">
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <>
          <IoMdClose
            testid="closeButton"
            onClick={close}
            className="close-icon"
          />
          <ReactPlayer
            controls={{controls: true}}
            light={{light: true}}
            url={videoUrl}
          />
        </>
      )}
    </Popup>
  )
}

export default MovieItem
