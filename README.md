# Spelling Checker Front
This is the frontend application for the Spelling Checker project. It allows users to input text and check for spelling and grammar errors. The errors are returned in a structured format, making it easy for users to understand and correct them.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Stack

- React

### Prerequisites

- Node.js
- npm

### Installing

Clone the repository and install the dependencies:

```bash
# Repository
$ git clone https://github.com/djdelima/spelling-checker-front.git

# project
$ cd spelling-checker-front

# Install
$ npm install
```

### Running the application

Start the development server:

```bash
$ npm start
```

The application will be running on http://localhost:3000

### Running tests

To run the tests, use the following command:

```bash
$ npm test
```

### Building for production
To build the application for production, run the following command:

```bash
$ npm run build
```

This will create a production-ready build of the application in the build folder.

### Live Demo - React Front-end

https://spelling-checker-front.herokuapp.com/

### Deployment Setup
The application is set up for deployment to Heroku. To deploy, you will need to set up a Heroku account, create a new app and get an API_KEY.

### GitHub Actions for deployment
The repository is set up with GitHub Actions for continuous deployment. When changes are pushed to the main branch, it will trigger the GitHub Action workflow to build, create docker image and deploy it application to Heroku Registry.

### Built With
- [React](https://reactjs.org/) - The web framework used
- [Docker](https://www.docker.com/) - Containerization

### Authors

- **Diego Jose de Lima** - [djdelima](https://github.com/djdelima)

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details