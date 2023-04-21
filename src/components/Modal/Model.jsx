import React from 'react'
import './model.css';
import { RiCloseLine } from "react-icons/ri";

const Model = ({ setIsOpen }) => {
    return(
       <>
        <div className='darkBG' onClick={() => setIsOpen(false)} />
        <div className='centered'>
        <div className='modal'>
          <div className='modalHeader'>
            <h5 className='heading'>Dialog</h5>
          </div>
          <button className='closeBtn' onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>

          <div className='modalContent'>
            Are you sure you want to delete the item?
          </div>
          <button
                className='cancelBtn'
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
        </div>
      </div>
       </>
    );
}

export default Model