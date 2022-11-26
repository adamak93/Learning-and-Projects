# TODO

1. Contact Github API (Maybe using an auth token...)

2. Get commits by a repo.
   - /repos/{owner}/{repo}/commits
   - (LOOK INTO THIS: [Octokit (github.com)](https://github.com/octokit))
  
3. Set a 24 hour interval between commits.
   - IF no commits from 12AM to 11:59PM, print something (like email sent). (Takes # of commits as a parameter)
   - ELSE: do nothing
	- Maybe the Node Event Loop will work? 3rd party module?
1. Send an email if no commits are sent to this repo.
	1. I think Node.JS is the best tool I can think of for the job; requires server side shenaniganry.
		1. Especially because Nodemailer exists for exactly this purpose of sending *automated* emails.
2. Hide the credentials so they don't show up when pulled from Git and that they aren't hardcoded to the file itself.
3. Host the thing.
	1. Heroku? (need to check on that.)