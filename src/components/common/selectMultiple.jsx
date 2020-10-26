import React from 'react';

const SelectMultiple = ({name, label, options, error, ...rest}) => {
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select multiple size="3" name={name} id={name} {...rest} className="form-control">
                <option value="" />
                {options.map(option => (
                    <option key={option._id} value={option._id}>{option.name}</option>
                ))}
            </select>
            {error && <div className="alert alert-danger" >{error} </div>}
        </div>
     );
}
 
export default SelectMultiple;
 

