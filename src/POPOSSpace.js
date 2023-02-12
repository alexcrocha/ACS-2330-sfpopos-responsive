import logo from './logo.svg'

function POPOSSpace({ name, image, address }) {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/images/${image}`}
        width="300"
        height="300"
        alt="50 Califonia St."
      />
      <h1>{name}</h1>
      <div>{address}</div>
    </div>
  )
}

export default POPOSSpace