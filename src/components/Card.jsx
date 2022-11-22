import CardContainer from "./shared/CardContainer"

function Card({ card }) {
    const imageStyle = { 
        width: 125,
        height: 168,
        borderRadius: 5,
        objectFit: 'cover',
        marginRight: 10
    }
    return (
        <CardContainer >
            <div className="card--avatar">
                <img src={ card.imageUrl } style={ imageStyle } />
            </div>

            <div className="card--info">
                <span className="location">
                    <i style={ { color: '#F55A5A' } } className="fa-solid fa-location-dot"></i>{ card.location }
                </span>
                <a href={ card.googleMapsUrl } target={ '_blank' } className="view--on--map">
                    View on Google Maps
                </a>

                <h1 className="title">{ card.title }</h1>
                <p className="startDate">{ card.startDate } - { card.endDate }</p>
                <p className="description">{ card.description }</p>
            </div>
        </CardContainer>
    )
}


export default Card ;
