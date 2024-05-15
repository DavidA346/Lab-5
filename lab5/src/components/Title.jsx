import './Title.css'

const Title = ({titleMost, titleTime}) => {
  let mostChosen = 'New York Times';
  let timeChosen = 'Top Articles';

  if (titleMost == 'viewed') {
    mostChosen = 'Most Viewed'
  }

  else if (titleMost == 'shared') {
    mostChosen = 'Most Shared'
  }

  else if (titleMost == 'emailed') {
    mostChosen = 'Most Emailed'
  }

  if (titleTime == '/1') {
    timeChosen = 'Day'
  }

  else if (titleTime == '/7') {
    timeChosen = 'Week'
  }

  else if (titleTime == '/30') {
    timeChosen = 'Month'
  }
  return (
    <div className="title-container">{mostChosen} - {timeChosen}</div>
  )
}

export default Title
