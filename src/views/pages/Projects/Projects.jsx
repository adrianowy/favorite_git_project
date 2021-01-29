/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import axios from 'axios'

import {
    Box,
    Grid,
    Typography,
    Divider,
    Paper,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    makeStyles
} from '@material-ui/core'

import ProjectsDataGrid from './ProjectsDataGrid'


const useStyles = makeStyles((theme) => ({
	paper:{
		padding: theme.spacing(2)
	}
}));

// github languages
const languages = [
    { id: 1, lang: "javascript"},
    { id: 2, lang: "java"},
    { id: 3, lang: "html"},
    { id: 4, lang: "python"},
    { id: 5, lang: "php"},
    { id: 6, lang: "ruby"},
    { id: 7, lang: "css"},
    { id: 8, lang: "c"}
];

// columns name for datatable
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'owner', headerName: 'Owner'},
    { field: 'project', headerName: 'Project Name'}
];


export default function Projects(props){

    const classes = useStyles();

    const [searchLanguage, setSearchLanguage] = useState("");
    const [repositories, setRepositories] = useState([]);

    function handleSearchRepo(e){
        setSearchLanguage(e.target.value);
    }

    useEffect(async () => {

        axios.get('https://api.github.com/search/issues?q=language:'+searchLanguage)
            .then(function (response) {    

                let rows = response.data.items.map(item => (
                    {
                        id: item.id,
                        owner: item.user.login,
                        project: item.title,
                        reference: item.repository_url.replace("api.", "").replace("repos/", "")
                    }
                ));

                setRepositories(rows);

                // setRepositories(response.data.items);
                // console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
        
        console.log(repositories);

    }, [searchLanguage]);

    /**
     * material ui form > https://www.youtube.com/watch?v=-XKaSCU0ZLM
     * hooks > https://www.youtube.com/watch?v=6WB16wZS61c
     * repository > https://docs.github.com/pt/rest/reference/search#search-repositories
     * 
     */

    return (
        <Box m={2}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography variant="h5" gutterBottom> Adriano's Favorite Projects </Typography>
					<Divider />
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={3}>
                        <FormControl variant="outlined">
                            <InputLabel id="demo-simple-select-outlined-label">Choose the Language</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                label="Language"
                                name="Language"
                                onChange={handleSearchRepo}
                                >
                                <MenuItem value=""> <em>None</em> </MenuItem>
                                {
                                    languages.map(l => (
                                        <MenuItem key={l.id} value={l.lang}>{l.lang.toUpperCase()}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
					</Paper>
                    <br/>

                    {
                        repositories.length > 0 && 
                        <Paper className={classes.paper} elevation={3}>
                            <ProjectsDataGrid rows={repositories} columns={columns}/>
                        </Paper>
                    }
				</Grid>
                
			</Grid>
		</Box>
    )
}