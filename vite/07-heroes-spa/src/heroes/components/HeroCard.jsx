import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'



export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters 
}) => {
    const heroImageUrl = `/assets/heroes/${id}.jpg`
    const {pathname} = useLocation()
    
    return (
        <div className="col">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={heroImageUrl} alt={superhero} className="card-img" />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            
                            {(alter_ego !== characters) && <p>{characters}</p>}

                            <p className="card-text">
                                <small className='text-muted'>{first_appearance}</small>
                            </p>

                            <Link to={`${pathname}/hero/${id}`}> Mas...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

HeroCard.propTypes = {
    id: PropTypes.string,
    superhero: PropTypes.string,
    publisher: PropTypes.string,
    alter_ego: PropTypes.string,
    first_appearance: PropTypes.string,
    characters: PropTypes.string,
}
