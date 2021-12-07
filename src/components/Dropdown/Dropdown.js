import React, { useEffect } from "react";
import AsyncSelect from 'react-select/async'
import axios from 'axios'
import { connect } from 'react-redux';
import { setContent } from "../../redux/content/content.actions";

const Dropdown = ({ setSelectedValue, selectedValue, setContent}) => {

  // handle selection
  const handleChange = (value) => {
    setSelectedValue({ ...selectedValue, value });
  }
  const fetchDropdown = () => {
    return axios.get('https://swapi.dev/api/people').then(({ data }) => {
      const res = data.results.map((currObj, index) => ({
        id: index,
        ...currObj
      }))
      setContent(data.results)
      return res
    })
  }

  return (
    <AsyncSelect
      cacheOptions
      defaultOptions
      getOptionLabel={e => e.name}
      getOptionValue={e => e.id}
      loadOptions={fetchDropdown}
      onChange={handleChange}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  setContent: items => dispatch(setContent(items))
});

export default connect(null, mapDispatchToProps)(Dropdown)