import React from 'react'

import {
    Box,
    TextField,
    Icon,
    Button
} from '@material-ui/core'


export default function UsersForm(props){
    return (
        <Box>
            <form noValidate autoComplete="off" onSubmit={props.handleAdduser}>
            <TextField id="user" label="User Name" variant="outlined" onKeyUp={e => props.setUserName(e.target.value)}/>
            <br/>
            <br/>
            <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<Icon style={{ fontSize: 30 }}>add_circle</Icon>}
                type="submit"
                > ADD
            </Button>

            </form>
        </Box>
    )
}