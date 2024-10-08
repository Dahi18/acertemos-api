# acertemos-api

Prueba tecnica para Acertemos

Video explicativo - https://www.loom.com/share/eb1b19713df34bad971aa34c7f3dbb14?sid=11fe094e-77c6-4abd-a319-78f11211e600

---

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### MongoDB
Install mongodb for your environment: [official MongoDb website](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/)

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v22.7.0

    $ npm --version
    v10.8.2

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

### Yarn installation

After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/Dahi18/acertemos-api
    $ cd acertemos-api
    $ npm install

## Configure app

Open `a/nice/path/to/a.file` then edit it with your settings. You will need:

- A setting;
- Another setting;
- One more setting;

## Running the project

    $ yarn start

## Simple build for production

    $ yarn build
