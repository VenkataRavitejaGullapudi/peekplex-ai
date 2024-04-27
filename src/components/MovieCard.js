import React from 'react'
import { TMDB_IMAGES_PATH } from '../utils/constants'

const MovieCard = ({imagePath}) => {
  return (
    <div className='w-32 rounded-md'>
        <img style={{borderRadius: 'inherit'}} src={TMDB_IMAGES_PATH.replace("{width}", 500).replace("{imagePath}", imagePath)} alt="Movie card"/>
    </div>
  )
}

export default MovieCard