

const Footer = (props) => {
  return (
    <div className="footer">
      <button type="button" onClick={() => {
        console.log('blue color is clicked')
        setColor('blue')
      }} className="btn btn-primary">Blue</button>
      <button type="button" onClick={() => props.setColor('grey')} className="btn btn-secondary">Grey</button>
      <button type="button" onClick={() => props.setColor('green')} className="btn btn-success">Green</button>
      <button type="button" onClick={() => props.setColor('red')} className="btn btn-danger">Red</button>
      <button type="button" onClick={() => props.setColor('yellow')} className="btn btn-warning">Yellow</button>
      <button type="button" onClick={() => props.setColor('skyblue')} className="btn btn-info">Sky-Blue</button>
      <button type="button" onClick={() => props.setColor('white')} className="btn btn-light">White</button>
      <button type="button" onClick={() => props.setColor('black')} className="btn btn-dark">Black</button>
      <button type="button" onClick={() => props.setColor('purple')} className="btn btn-purple">Purple</button>
      <button type="button" onClick={() => props.setColor('orange')} className="btn btn-orange">Orange</button>
    </div>
  )
}
export default Footer;