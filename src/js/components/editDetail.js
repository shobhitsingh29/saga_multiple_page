import React from "react";
const EditDetail = (props) => {


    return (
       <div className="edit-data">
        <div className="modal-backdrop detail-modal-background">
            <form>
                <div className="col-sm-12 detail-modal">
                    <div className="detail_modal_heading"><b>EDIT TILE</b></div>
                    <div>
                        <div className="form-group col-sm-12">
                            <label>ID:</label>
                            <input type="number" value={props.itemData.id} onChange={props.handleDataChange.bind(this, [{name:"id"}])}/>
                        </div>
                        <div className="form-group col-sm-12">
                            <label>Name:</label>
                            <input type="text" value={props.itemData.name} onChange={props.handleDataChange.bind(this, [{name:"name"}])}/>
                        </div>
                        <div className="form-group col-sm-12">
                            <label>Description:</label>
                            <input type="text" value={props.itemData.description} onChange={props.handleDataChange.bind(this, [{name:"description"}])} />
                        </div>
                    </div>
                    <div className="button_right">
                        <input type="button" onClick={props.saveData} value="Save" className="btn btn-default save_button"/>
                        <input className="close"  type="button" onClick={props.closeButton} value="Close"  />
                    </div>
                </div>
            </form>
        </div>
       </div>

    );
};
export default EditDetail;