function Dialog() {
  return(
    <div className="modal fade" id="modal">
      <div className="modal-dialog modal-dialog-centered text-dark" >
        <div className="modal-content">
          <div className="modal-header">
            <h1>Header</h1>
            <button className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">Body</div>
          <div className="modal-footer">Footer</div>          
        </div>
      </div>

    </div>
  )
}

export default Dialog;