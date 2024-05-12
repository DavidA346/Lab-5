import './Title.css'

const Title = ({titleMost, titleTime}) => {
  return (
    <div className="title-container">{titleMost} - {titleTime}</div>
  )
}

export default Title
