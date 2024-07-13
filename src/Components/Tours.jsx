import Card from './Card'
import PropTypes from 'prop-types';

export default function Tours({tours}) {
  tours: PropTypes.array.isRequired
  return (
    <div>
      <nav>
        Plan With Nijen
      </nav>
      <div>
        {
         tours.map((item) => {
          return(
            <Card {...item} > </Card>
          )
         })
        }
        
      </div>
    </div>
  )
}
