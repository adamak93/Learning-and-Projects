[Octokit (github.com)](https://github.com/octokit) - General info page for Octokit

[octokit/octokit.js: The all-batteries-included GitHub SDK for Browsers, Node.js, and Deno.](https://github.com/octokit/octokit.js) - For Node/JS/etc.

[Using Gmail :: Nodemailer](https://nodemailer.com/usage/using-gmail/) - Gmail specific stuff here

[Message configuration :: Nodemailer](https://nodemailer.com/message/) - Message parameters.

-- -- 
"#### Install the Heroku CLI

Download and install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line).

If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.

$ heroku login

#### Create a new Git repository

Initialize a git repository in a new or existing directory

$ cd my-project/
$ git init
$ heroku git:remote -a githubemailnotifier

#### Deploy your application

Commit your code to the repository and deploy it to Heroku using Git.

$ git add .
$ git commit -am "make it better"
$ git push heroku master

You can now change your main deploy branch from "master" to "main" for both manual and automatic deploys, please follow the instructions [here](https://help.heroku.com/O0EXQZTA/how-do-i-switch-branches-from-master-to-main).

---

#### Existing Git repository

For existing repositories, simply add the `heroku` remote

$ heroku git:remote -a githubemailnotifier"