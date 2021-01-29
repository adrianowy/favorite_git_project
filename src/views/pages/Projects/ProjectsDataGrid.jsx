/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

import { DataGrid } from '@material-ui/data-grid';


export default function ProjectsDataGrid(props){
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={props.rows} columns={props.columns} pageSize={10} />
        </div>
    )
}