import './List.css'

function List(props){
    const Image = props.Image;
    const Title = props.Title
    return(
      <div className="list-container">
        <div className="list">
            <img src={Image} alt="Dog" className="img"/>
            <p>{Title}</p>
        </div>
      </div>
    )
}

export default List;