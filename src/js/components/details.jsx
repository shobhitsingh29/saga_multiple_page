import React from 'react';
import DetailList from './detailList';
import EditDetail from './editDetail';
import _ from 'lodash';
import { getSearchString } from '../common/utils/utils';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class DetailsContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            itemData: {},
            tempData: {},
        };
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDataChange = this.handleDataChange.bind(this);
        this.saveData = this.saveData.bind(this);
        this.closeButton = this.closeButton.bind(this);
        this.clearData = this.clearData.bind(this);
    }

    componentWillMount() {
        this.props.showFilteredDetailsFunction();
    }
    componentWillReceiveProps(nextProps) {
        const searchString = getSearchString(nextProps);
        _.map(nextProps.items, (items, index) => {
            const id = nextProps.items[index]['id'];
            if (searchString === id) {
                this.setState({
                    itemData: nextProps.items[index],
                    tempData: nextProps.items[index],
                });
            }
        });
    }
    handleEdit() {
        this.props.editPopUpFunction(true);
    }

    handleDataChange(args, event) {
        const value = event.target.value;
        const name = args[0]['name'];
        const newObj = {};
        newObj[name] = value;
        const newItemData = _.assign({}, this.state.tempData, newObj);
        this.setState({
            tempData: newItemData,
        });
    }

    clearData() {
        this.setState({
            tempData: this.state.itemData,
        });
    }

    closeButton() {
        this.props.editPopUpFunction(false);
    }

    saveData() {
        this.setState({
            itemData: this.state.tempData,
        });
        this.props.upDateJsonDataFunction(this.state.tempData.id, _.assign({}, this.state.tempData));

    }

    render() {
        return (
            <div>
                <Link to={'/home'}>
                    <div className="back-to-home-div">
                        <button className="back-to-home">back to home</button>
                    </div>
                </Link>

                <DetailList handleEdit={this.handleEdit} itemData={this.state.itemData}/>{
                }
                {this.props.edit &&
                <EditDetail itemData={this.state.tempData} closeButton={this.closeButton} clearData={this.clearData}
                    handleDataChange={this.handleDataChange}
                    saveData={this.saveData}
                />
                }
            </div>
        );
    }
}

DetailsContainer.propTypes = {
    handleEdit: PropTypes.func,
    edit: PropTypes.bool,
    upDateJsonDataFunction: PropTypes.func,
    editPopUpFunction: PropTypes.func,
    showFilteredDetailsFunction: PropTypes.func,

};
export default (DetailsContainer);
