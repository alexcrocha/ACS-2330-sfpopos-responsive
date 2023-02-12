import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className='Footer'>
      <p>Carl copyright {year}</p>
    </footer>
  )
}

export default Footer