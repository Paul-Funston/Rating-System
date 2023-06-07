function Dialog({
  active, 
  onClose = f => f
}) {

  return(
    <div 
      className={"modal fade" + `${active ? " show": ""}`} 
      id="modal"
      style={{display: active? "block" : "none",
      backgroundColor: "rgb(0 0 0 / 0.2)"
      }}
    >
      <div className="modal-dialog modal-dialog-centered text-dark" >
        <div className="modal-content">
          <div className="modal-header">
            <h1>Header</h1>
            <button className="btn-close" 
              onClick={onClose}
            //data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">Body</div>
          <div className="modal-footer">Footer</div>          
        </div>
      </div>

    </div>
  )
}

export default Dialog;