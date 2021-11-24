const PokeThumbnail = ({ id, name, image, type }) => {
  const thubmStyle = `thumb-container ${type}`

  return(
    <div className={thubmStyle}>
      <div className="number">
        <small>#{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name}</h3>
        <small>Type: {type}</small>
      </div>
    </div>
  )
}

export default PokeThumbnail;