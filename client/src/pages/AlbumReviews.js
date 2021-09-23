import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FindAlbumById } from '../services/AlbumServices'
import {
  GetAlbumAverageRating,
  GetAlbumReviews
} from '../services/ReviewsServices'
import './AlbumReview.css'

const AlbumReviews = (props) => {
  const [albumReviews, setAlbumReviews] = useState([])
  const [albumDetails, setAlbumDetails] = useState({})

  useEffect(async () => {
    const reviews = await GetAlbumReviews(props.match.params.album_id)
    setAlbumReviews(reviews)
    const details = await FindAlbumById(props.match.params.album_id)
    const rawAverage = await GetAlbumAverageRating(props.match.params.album_id)
    const formattedAverage = parseFloat(
      rawAverage.data[0].average_rating
    ).toFixed(1)

    setAlbumDetails({ ...details, average: formattedAverage })
  }, [])

  return (
    <div className="AlbumReviews">
      <div className="album-info-container">
        <h1>{albumDetails.average}/10</h1>
        <h2>{albumDetails.title}</h2>
        <h3>{albumDetails.artist}</h3>
        <img
          src={albumDetails.image}
          alt={albumDetails.title}
          class="album-cover"
        />
        <Link to={`/addreview/${albumDetails.deezer_id}`}>
          <p>Review this Album</p>
        </Link>
      </div>
      <div className="album-reviews-container">
        {albumReviews &&
          albumReviews.map((review) => (
            <div key={review.id} className="review-container">
              <div className="reviewer-info">
                <h3>{parseFloat(review.rating).toFixed(1)}/10</h3>
                <Link to={`/userprofile/${review.user.id}`}>
                  <h3>by {review.user.username}</h3>
                </Link>
              </div>
              <div className="review-content">
                <p>{review.content}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default AlbumReviews
