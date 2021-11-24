const PokeThumbnail = ({ id, name, image, type }) => (
  <div className="thumb-container">
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

export default PokeThumbnail;