# Logo identification with google

This is a simple MobX-powered React app that allows the user to play a simple logo recalling game, by utilizing Google Cloud's cognitive services.
It is a demonstration of how to build an app based on Google's services, using only javascript.

In order to use it:

1. Install nodejs, as instructed here https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/
2. Install typescript, as instructed here https://blog.programster.org/ubuntu-16-04-install-typescript
3. Download your json key file, from the service accounts page.
4. Install required packages by running npm install.
5. Start typescript in watch mode, in order to transpile, by running `tsc -w`.
6. Start the express server, that will communicate with the cloud, by first setting the environment variable for the credentials `export GOOGLE_APPLICATION_CREDENTIALS=your_file_name.json` and then running `node src/express.js` (port 5000).
7. Start the react server, by running `npm run start`.
8. The app should be running at port 3000, and you should be able to play the logo memory game.

This app was tested on Linux Mint, but the above steps should work fine on any Ubuntu-based distro.
