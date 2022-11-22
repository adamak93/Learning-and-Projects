#TODO 
1.  Contact Github API (Maybe using an auth token...)
2. Get commits by a repo.
	1. /repos/{owner}/{repo}/commits
	2. (LOOK INTO THIS: [Octokit (github.com)](https://github.com/octokit)) 
3. Set a 24 hour interval between commits.
	1. IF no commits from 12AM to 11:59PM, print something (like email sent). (Takes # of commits as a parameter)
	2. ELSE: do nothing
	3. Maybe the Node Event Loop will work? 3rd party module?
4. Send an email if no commits are sent to this repo.
	1. I think Node.JS is the best tool I can think of for the job; requires server side shenaniganry.
		1. Especially because Nodemailer exists for exactly this purpose of sending *automated* emails.
5. Hide the credentials so they don't show up when pulled from Git and that they aren't hardcoded to the file itself.
6. Host the thing.
	1. Heroku? (need to check on that.)