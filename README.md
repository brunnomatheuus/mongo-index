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
| 1º      | 4920.732ms   | 378.836ms           | 204.213ms       | 163.956ms                      |
| 2º      | 4948.027ms   | 355.403ms           | 200.425ms       | 169.172ms                      |
| 3º      | 5034.392ms   | 379.411ms           | 208.379ms       | 170.012ms                      |
| 4º      | 5080.075ms   | 357.446ms           | 212.008ms       | 178.035ms                      |
| 5º      | 4997.423ms   | 383.374ms           | 205.701ms       | 164.180ms                      |
| 6º      | 4958.717ms   | 377.656ms           | 209.175ms       | 165.620ms                      |
| 7º      | 4954.728ms   | 392.538ms           | 200.121ms       | 167.801ms                      |
| 8º      | 5122.502ms   | 392.099ms           | 212.604ms       | 175.335ms                      |
| 9º      | 4950.284ms   | 376.229ms           | 194.187ms       | 174.157ms                      |
| 10º     | 4990.539ms   | 367.283ms           | 204.626ms       | 173.134ms                      |
