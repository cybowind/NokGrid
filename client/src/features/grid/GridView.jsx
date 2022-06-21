import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { fetchGrids } from './gridSlice'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export const GridView = () => {

    const dispatch = useDispatch()
    const data = useSelector((state) => state.grid.grids).map(x => ({ ...x }));

    const [columnDefs, setColumnDefs] = useState([
      { field: "id", sortable: true, filter: true },
      { field: "operation", sortable: true, filter: true },
      { field: "scope", sortable: true, filter: true },
      { field: "timestamp", sortable: true, filter: true },
      { field: "status", sortable: true, filter: true },
    ]);

    useEffect(() => {
      dispatch(fetchGrids())
    })
  
    return(
      <div className="ag-theme-alpine" style={{ height: 600, width: 1000 }}>
      <AgGridReact
        rowData={data}
        columnDefs={columnDefs}
        rowSelection='multiple'
        animateRows={true}
        />
      </div>
    )
}