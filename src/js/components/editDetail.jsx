import React from 'react';
import PropTypes from 'prop-types';

const EditDetail = (props) => (
    <div className="edit-data">
        {props.itemData &&
            <div className="modal-backdrop detail-modal-background">
                <form>
                    <div className="col-sm-12 detail-modal">
                        <div className="detail_modal_heading"><b>EDIT TILE</b></div>
                        <div>
                            <div className="form-group col-sm-12">
                                <label>Name:</label>
                                <input type="text" value={props.itemData.name}
                                    onChange={props.handleDataChange.bind(this, [{ name: 'name' }])}
                                />
                            </div>
                            <div className="form-group col-sm-12">
                                <label>Description:</label>
                                <input type="text" value={props.itemData.description}
                                    onChange={props.handleDataChange.bind(this, [{ name: 'description' }])}
                                />
                            </div>
                        </div>
                        <div className="button_right">
                            <input type="button" onClick={props.saveData} value="Save"
                                className="btn btn-default save_button"
                            />
                            <input type="button" onClick={props.clearData} value="reset"
                                className="btn btn-default clear_button"
                            />
                            <input className="close" type="button" onClick={props.closeButton} value="X"/>
                        </div>
                    </div>
                </form>
            </div>
        }
    </div>

)
        ;

EditDetail.propTypes = {
    id: PropTypes.number,
    itemData: PropTypes.object,
    handleDataChange: PropTypes.func,
    clearData: PropTypes.func,
    saveData: PropTypes.func,
    closeButton: PropTypes.func,

};
export default EditDetail;
