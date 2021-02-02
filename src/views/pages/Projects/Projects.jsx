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

import ProjectsList from './ProjectsList'


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


export default function Projects(props){

    const classes = useStyles();

    const [searchLanguage, setSearchLanguage] = useState("");
    const [loading, setLoading] = useState(false);
    const [repositories, setRepositories] = useState([]);

    const [activeUser, setActiveUser] = useState([]);

    function handleSearchRepo(v){
        setSearchLanguage(v);
        setRepositories([]);
    }

    function handleFavorite(repo){
        
        const newRepositories = repositories.map(mapRepo => {
            return mapRepo.id === repo.id ? { ...mapRepo, favorite: !mapRepo.favorite } : mapRepo
        });
        setRepositories(newRepositories);


        /** UPDATE LOCAL STORAGE */
        const updateUsersFavorite = JSON.parse(localStorage.getItem('users')).map(mapUser => {

            if(mapUser.id === activeUser.id) {
                if(mapUser.favorites.filter(fav => fav.id === repo.id).length == 0 ){
                    mapUser.favorites.push(repo);
                }else{
                    mapUser.favorites = mapUser.favorites.filter(fav => fav.id !== repo.id);
                }
                setActiveUser(mapUser);
            }
            return mapUser;
        });
        localStorage.setItem('users', JSON.stringify(updateUsersFavorite));
        /** END - UPDATE LOCAL STORAGE */

    }

    
    useEffect(() => {

        const user = JSON.parse(localStorage.getItem('users')).filter(u => {
            return u.id === props.match.params.userId
        });

        setActiveUser(user[0]);

    }, []);

    useEffect(async () => {

        if(searchLanguage){
            setLoading(true);
            axios.get('https://api.github.com/search/issues?q=language:'+searchLanguage)
                .then(function (response) {    

                    const rows = response.data.items.map(item => (
                        {
                            id: item.id,
                            owner: item.user.login,
                            project: item.title,
                            reference: item.repository_url.replace("api.", "").replace("repos/", ""),
                            favorite : ( (activeUser.favorites.filter(f => f.id == item.id).length > 0) ? true : false)
                        }
                    ));
                    setRepositories(rows);
                    setLoading(false);
                })
                .catch(function (error) {
                    console.log(error);
                })

        } // end if

    }, [searchLanguage]);

    /**
     * References:
     * material ui form > https://www.youtube.com/watch?v=-XKaSCU0ZLM
     * hooks > https://www.youtube.com/watch?v=6WB16wZS61c
     * repository > https://docs.github.com/pt/rest/reference/search#search-repositories
     */

    return (
        <Box m={2}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography variant="h5" gutterBottom> {activeUser.name} - Favorite Projects </Typography>
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
                                onChange={(e) => handleSearchRepo(e.target.value)}
                                style={{width: '300px'}}
                                >
                                {
                                    languages.map(l => (
                                        <MenuItem key={l.id} value={l.lang}> {l.lang.toUpperCase()} </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
					</Paper>
                    <br/>

                    {
                        loading &&
                        <Paper className={classes.paper} elevation={3}>
                            <p>Loading...</p>
                        </Paper>
                    }

                    {
                        repositories.length > 0 && 
                        <Paper className={classes.paper} elevation={3}>
                            <ProjectsList
                                handleFavorite={handleFavorite} 
                                repositories={repositories} 
                                activeUser={activeUser}
                            />
                        </Paper>
                    }
				</Grid>
                
			</Grid>
		</Box>
    )
}