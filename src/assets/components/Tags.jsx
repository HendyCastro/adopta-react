import  Badge  from 'react-bootstrap/Badge'

const Tags = ({bg,text}) => {
  return (
    <div>
        <Badge bg={bg}>{text} </Badge>
    </div>
  )
}

export default Tags