
import React from 'react';

const TextArea = ({name, label, error, ...rest}) => {
  return ( 
    <React.Fragment>
        <div className="form-group">
            <label htmlFor={name} id={name}>{label}</label>
            <textarea 
                rows="4" cols="50"
                {...rest}
                name={name} 
                id={name} 
                className="form-control" 
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    </React.Fragment>
   );
}
 
export default TextArea;