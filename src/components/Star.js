import { FaStar } from 'react-icons/fa';
function Star({
  isFilled = false,
  onClick = f => f,
  number
}) {
  
  return (
  <div onClick={() => onClick(number)} className='col-auto star'>
      <FaStar 
        fill={isFilled ? "gold" : "gray"}
        size={50}
      />
  </div>
  )
}

export default Star;