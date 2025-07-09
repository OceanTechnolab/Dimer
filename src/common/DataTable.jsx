import React, { useState } from 'react';
import DataTableBase from 'react-data-table-component';

const DataTable = ({ columns, data, title }) => {
  const [filterText, setFilterText] = useState('');

  const filteredData = data.filter(row =>
    Object.values(row).some(
      value => value && value.toString().toLowerCase().includes(filterText.toLowerCase())
    )
  );
  const customStyles = {
  headRow: {
    style: {
      backgroundColor: '#f27e01',
    },
  },
  headCells: {
    style: {
      color: '#fff',
      fontWeight: '600',
      fontSize: '17px',
      backgroundColor: '#f27e01',
      transition: 'none', // prevent color fade
    },
  },
};


  return (
    <div>
      {title && <h4 className="mb-3">{title}</h4>}
<div className="mb-3 d-flex justify-content-center align-items-center">
    <div className='col-12 col-md-4'>
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
      />
    </div>
  </div>
      <DataTableBase
        columns={columns}
        data={filteredData}
        pagination
        highlightOnHover
        responsive
        striped
        customStyles={customStyles}
      />
    </div>
  );
};

export default DataTable; 