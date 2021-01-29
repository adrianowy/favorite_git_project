import React from 'react'

import {
    Box,
    TextField,
    Icon,
    Button
} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';


export default function UsersForm(props){
    return (
        <Box>
            <form noValidate autoComplete="off" onSubmit={props.handleAdduser}>
            <TextField id="user" label="User Name" variant="outlined" onKeyUp={e => props.setUserName(e.target.value)}/>
            
            { props.error && <Alert severity="error">The field 'User Name' must to be filled.</Alert>}
            

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