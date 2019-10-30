# Mongo and Node using index

# Requisites
* [Git](https://www.digitalocean.com/community/tutorials/how-to-install-git-on-ubuntu-18-04-quickstart)
* [Node/Npm](https://nodejs.org/en/)
* [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

# Installation
- Using Git we will clone this repository: `git clone https://github.com/brunnomatheuus/mongo-index.git`
- Using NPM on the terminal we type `npm install` to install the dependencies.

# Run
- In terminal execute `npm start`

# Results
| Attempt | Data Insert  | Find Without Index  | Find With Index | Find With Index and Projection |
| :---:   | :-:          | :-:                 | :-:             | :-:                            |
| 1º      | 301ms        | 283ms               | 123ms           | 123ms                          |
