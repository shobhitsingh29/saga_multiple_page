import React from "react";
import Search from "../components/search";
import ItemsList from "./itemsList";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            data: []
        };
        this.handleSearchText = this.handleSearchText.bind(this);
        this.searchData = this.searchData.bind(this);
        this.clearData = this.clearData.bind(this);
    }
    handleSearchText(event) {
        var value = event.target.value;
        this.setState({
            searchText: value
        });
    }
    searchData() {
        if(this.state.searchText) {
            // window.location.href = window.location.hostname+window.location.port+"search/q="+ this.state.searchText;
            window.location.href = "/search/" + this.state.searchText;
        }else{
            console.log("search box empty");
        }
    }
    clearData(){
        this.setState({
            searchText: ""
        });
    }

    componentDidMount() {
        var main = this;
        fetch("http://localhost:3000/tilesData").then(function(response){
            return response.json();
        }).then(function(data){
            var currentURL = window.location.href;
            if(currentURL.indexOf("search") > 0) {
                let splitURL = currentURL.split("/");
                let searchString = splitURL[splitURL.length-1].toUpperCase();
                let dataToRender = [];
                let dataLength=0;
                let lengthOfItems = data.items.length;

                for(let i = 0; i < lengthOfItems ; i++) {
                    let description = data.items[i]["description"].toUpperCase();
                    let name = data.items[i]["name"].toUpperCase();
                    let id = data.items[i]["id"].toUpperCase();
                    if(description.indexOf(searchString)>=0 || name.indexOf(searchString)>=0 ||id.indexOf(searchString)>=0) {
                        dataToRender.push(data.items[i]);
                    }
                }
                main.setState({
                    data: dataToRender,
                    dataLen:dataLength
                });
            }
            else {
                main.setState({
                    data: data.items
                });
            }
        })
        .catch(function(err){
            console.log("An Error Occured:", err);
        });
    }
    render() {
        return (
            <div className="bg-detail">
                <Search searchText={this.state.searchText} handleSearchText={this.handleSearchText} searchData={this.searchData} clearData={this.clearData}/>
                {this.state.data.length ? <ItemsList searchText={this.state.searchText} items={this.state.data}/> :<div className="no-result">No Result Found , Search Again</div>}
            </div>
        );
    }
}
export default Home;