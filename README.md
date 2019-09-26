## Dev Environment Installation

1. Install [Node](https://nodejs.org/en/download).

2. Clone this repo.

3. Open a command line interpreter in the project root and run this command to install all the npm packages:

   `npm install`

4. Run this command to start the development server. (CTRL-C to stop the server)

   `npm start`

5. (Optional) This project utilizes the GitHub API, which will limit the daily number of requests without an OAuth id and secret. To set up OAuth:

   1. Register on GitHub for a [new OAuth application](https://github.com/settings/applications/new).

   2. Create a new file in the project root called `.env.local` and add these two lines to the file:

      `REACT_APP_GITHUB_CLIENT_ID='your client id'`
      `REACT_APP_GITHUB_CLIENT_SECRET='your client secret'`

   3. Restart the development server.
