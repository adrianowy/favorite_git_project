## React Project
#### This project was created as a pratice test.
#### The main function is to choise any repository from github and favorite it associated with a user.
---
# Summary

*  [Installation Guide](#anchor1)
	* [Clone Repository](#anchor11)
	* [Install Using NPM](#anchor12)
	* [Install Using Docker](#anchor13)
*  [User Guide](#anchor2)
	* [Maintain User](#anchor21)
	* [Choice Favorite Project](#anchor22)
	* [Listing Project by User](#anchor23)

<a id="anchor1"></a>
###  Installation Guide

1. Clone the repository from Github <a id="anchor11"></a>
```
git clone https://github.com/adrianowy/favorite_git_project.git
```
2. Install using **NPM** <a id="anchor12"></a>
	2.1 Install npm dependencies
	```	
	npm install
	```
	2.2 Install yarn globally
	```	
	npm install --global yarn
	```
	2.3 Run the project
	```	
	yarn start
	```
	2.4 Access the project
	```	
	http://localhost:3000
	```

3. Install using **Docker** <a id="anchor13"></a>
	3.1 Run docker command below
	```	
	docker-compose up -d
	```
	3.2 Access the project
	```	
	http://localhost:8000
	```

<a id="anchor2"></a>
###  User Guide

1. Maintain User <a id="anchor21"></a>

- Fill in field "User Name" then click ADD button.
- The new use name will show at list below.
![](https://github.com/adrianowy/favorite_git_project/blob/develop/documentation/01_maintain_user.png?raw=true)

2. Choice Favorite Project <a id="anchor22"></a>

- Click in the button highlighted to list out the repositories from github 
![](https://github.com/adrianowy/favorite_git_project/blob/develop/documentation/02_link_to_projects.png?raw=true)

- Click in the first field to select any programming language, then will show a repositories list below.
- Click in the "star button" to favorite any project.
![](https://github.com/adrianowy/favorite_git_project/blob/develop/documentation/03_favorite.png?raw=true)


3. Listing Project by User <a id="anchor23"></a>

- After favorite any project in the last step, you can access "Favorites" in the menu option to see all the repositories by user.
- In the first field select the user then will show the favorite repositories list.
![](https://github.com/adrianowy/favorite_git_project/blob/develop/documentation/04_list_projects_by_user.png?raw=true)