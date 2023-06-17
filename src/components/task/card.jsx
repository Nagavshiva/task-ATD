

// eslint-disable-next-line react/prop-types
const Card = ({handleCancel}) => {
  return (
    <div className="card-container">
    <form>
        <label>Text Decreption</label>
        <input type="text"/>
        <br/>
        <label>Assign User</label>
        <input type="text"/>
        <br/>
        <div className="form-button">
        <button className="btn-cancel" onClick={handleCancel}>cancel</button>
        <button className="btn-save">save</button>
        </div>
    </form>
    </div>
  )
}

export default Card