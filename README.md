# TMDB-Query-App

## How to install

First, you have to install node v16.17.0 (if you use nvm just install it with `nvm install 16.17.0` and then run `nvm use`). The npm version I used is 8.15.0, you might have to update to this version. Finally just run `npm install`

## How to run locally

Open two terminals, run `nvm use` in both of them then `npm run start-frontend` and `npm run start-server` respectively. Navigating to `http://localhost:8080` should display the movie search application.

## Other npm scripts

-   compile-server: runs typescript compilation in the server folder
-   compile-client: runs typescript compilation in the client folder
-   compile: runs typescript compilation in both client and server folders
-   lint: runs eslint in both client and server folders
-   build-frontend: builds a production bundle of the client
-   build-server: builds a production bundle of the server

### Things to improve / add

-   have a common folder / package for common utilities, constants, types (for example Movie type)
-   deal with envs to be able to change service url and other things (with Dotenv)
-   build the whole app into one common dist folder
-   move favicon, index.html and other static files to an assets folder
-   use monorepo lib (like lerna) or npm workspaces
-   better design :D
-   much more error handling
-   tests...
-   improve production builds with more customization
-   related movies
