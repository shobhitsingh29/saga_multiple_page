import React from 'react';
import renderer from 'react-test-renderer';
import * as actionTypes from '../src/js/actions/actions.js';
import * as types from '../src/js/actiontypes/actionTypes';
import reducer from '../src/js/reducers/statereducer';

describe('reducer', () => {
    it('set search term', () => {
        expect(reducer(undefined, {})).toEqual({
            searchText: "",
            items: [],
            edit: false,
            filteredItems: []
        })
    })
});


describe('reducer', () => {
    it('set searched details with value', () => {
        expect(reducer(undefined, {type: 'SHOW_SEARCHED_DETAILS', searchedData: []})).toEqual({

            searchText: "",
            items: [],
            edit: false,
            filteredItems: []
        })
    })
});

describe('reducer', () => {
    it('clear search term', () => {
        expect(reducer(undefined, {type:'CLEAR_SEARCH_TEXT',searchText : 'delete-search-Term'})).toEqual( {
            searchText: "",
            items: [],
            edit: false,
            filteredItems: []
        })
    })
});


/*
describe('reducer', () => {
    it('loaded tiles', () => {
        expect(reducer(undefined, {type:'LOADED_TILES',shows: ['1']})).toEqual( {
            searchTerm: '',
            shows:['1'],
            editState: false,
            filteredTile : {}
        })
    })
});

describe('reducer', () => {
    it('edit state', () => {
        expect(reducer(undefined, {type:'EDIT_STATE',editState: false})).toEqual( {
            searchTerm: '',
            shows:[],
            editState: true,
            filteredTile : {}
        })
    })
});

describe('reducer', () => {
    it('filtered tile to reducer', () => {
        expect(reducer(undefined, {type:'FILTERED_TILE_TO_REDUCER',showFiltered: {"title":"image1"}})).toEqual( {
            searchTerm: '',
            shows:[],
            editState: false,
            filteredTile : {"title":"image1"}
        })
    })
});

describe('reducer', () => {
    it('updated json data', () => {
        expect(reducer(undefined, {type:'UPDATED_JSON_DATA',updatedJsonData: {"title":"image1"},editState: false})).toEqual( {
            searchTerm: '',
            shows:[],
            editState: true,
            filteredTile : {"title":"image1"}
        })
    })
});*/
