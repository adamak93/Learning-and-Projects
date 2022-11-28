# TODO

1. Contact Github API (Maybe using an auth token...)

2. Get commits by a repo.
   - /repos/{owner}/{repo}/commits
   - (LOOK INTO THIS: [Octokit (github.com)](https://github.com/octokit))
  
3. Set a 24 hour interval between commits.
   - IF no commits from 12AM to 11:59PM, print something (like email sent). (Takes # of commits as a parameter)
   - ELSE: do nothing
   - Maybe the Node Event Loop will work? 3rd party module?
4. Send an email if no commits are sent to this repo.
   - I think Node.JS is the best tool I can think of for the job; requires server side shenaniganry.
   - Especially because Nodemailer exists for exactly this purpose of sending *automated* emails.
	   - Need to use Node-cron...
1. Hide the credentials so they don't show up when pulled from Git and that they aren't hardcoded to the file itself.
2. Host the thing.
   - Heroku? (need to check on that)
   - 
[(4) Nodemailer - Send and Schedule Emails From Node.js App - YouTube](https://www.youtube.com/watch?v=nRwbp2QVj5Y)