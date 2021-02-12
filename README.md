[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

  <h3 align="center">A Job Dating Web App</h3>

  <p align="center">

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Tech Stacks](#tech-stacks)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project

The current job market is competitive and full of flaws, especially discrimination. Therefore, this project is created to aid the combat against discrimination agains job seekers. The core functionality of this web app would be to find and match relavant applicants to the employers, giving them a chance to prove themself.

### Tech Stacks

1. FrontEnd

   - [React](https://reactjs.org)
   - [Redux](https://react-redux.js.org/)
   - [Semantic UI](https://semantic-ui.com/)
   - [Typescript](https://www.typescriptlang.org/)
   - [Lodash](https://lodash.com/)

2. BackEnd
   - [Express](https://expressjs.com/)
   - [Validatorjs](https://www.npmjs.com/package/validatorjs)
   - [Postgres](https://www.postgresql.org/)
   - [Passport](https://www.npmjs.com/package/passport)
   - [Bcrypt](https://www.npmjs.com/package/bcrypt)
   - [JWT](https://jwt.io/)
3. Testing
   - [Jest](https://jestjs.io/)
4. Deployment
   - [Github Action](https://github.com/features/actions)
   - [Docker](https://www.docker.com)

<!-- GETTING STARTED -->

## Getting Started

This section will give you the instruction about setting up this project locally.

### Prerequisites

These are the lists of tools that you need to run the project.

- [npm](https://www.npmjs.com/)
- [Nodejs](https://nodejs.org/en/)
- [Docker](https://docker.com)

### Installation of Repo

1. Clone the repo

```sh
git clone git@github.com:Integrify-Team-4/Tindev.git
```

2. Install dependencies:

```sh
npm install
```

3. For Mac and Linux user, give the permission to execute `script.sh` file. The script will run a postgres container as the app's database

```sh
chmod -x ./script.sh;
```

4. Create a `.env` file in the root directory and include the following varables:

```sh
PORT=3000
JWT_SECRET=abcd
DB_PASSWORD=secret
```

6. Finally, start the app:

```sh
npm run watch
```

<!-- USAGE EXAMPLES -->

## Usage

<!-- ROADMAP -->

## Roadmap

<!-- CONTRIBUTING -->

## Contributing

We welcome any contributions and would love to see your ideas and request. Follow these steps if you want to contribute:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request to `Develop` branch

<!-- LICENSE -->

<!-- CONTACT -->

## contact

<!-- ACKNOWLEDGEMENTS -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/Integrify-Team-4/Tindev/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=flat-square
[forks-url]: https://github.com/Integrify-Team-4/Tindev/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=flat-square
[stars-url]: https://github.com/Integrify-Team-4/Tindev/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/Integrify-Team-4/Tindev/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[product-screenshot]: images/screenshot.png
hello
