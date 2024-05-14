import './Title.css'

const Title = ({titleMost, titleTime, titleNum}) => {
  console.log("Num: " + titleNum);
  return (
    <div className="title-container">{titleMost} - {titleTime} - {titleNum}</div>
  )
}

export default Title
