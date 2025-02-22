import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Header({
  text = 'Feedback UI',
  bgColor = 'rgba(0,0,0,0.4)',
  textColor = '#ff6a95',
}) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }
  // const text = 'Feedback UI'

  return (
    <header style={headerStyles}>
      <div className='container header-link'>
        <Link to='/'>
          <h2>{text}</h2>
        </Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header
