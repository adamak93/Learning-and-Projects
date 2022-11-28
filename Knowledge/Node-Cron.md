## Cron Syntax

This is a quick reference to cron syntax and also shows the options supported by node-cron.

### [](https://www.npmjs.com/package/node-cron#allowed-fields)Allowed fields

```
 # ┌────────────── second (optional)
 # │ ┌──────────── minute
 # │ │ ┌────────── hour
 # │ │ │ ┌──────── day of month
 # │ │ │ │ ┌────── month
 # │ │ │ │ │ ┌──── day of week
 # │ │ │ │ │ │
 # │ │ │ │ │ │
 # * * * * * *
```

### [](https://www.npmjs.com/package/node-cron#allowed-values)Allowed values

field

value

second

0-59

minute

0-59

hour

0-23

day of month

1-31

month

1-12 (or names)

day of week

0-7 (or names, 0 or 7 are sunday)

#### [](https://www.npmjs.com/package/node-cron#using-multiples-values)Using multiples values

You may use multiples values separated by comma:

var cron = require('node-cron');

cron.schedule('1,2,4,5 * * * *', () => {
  console.log('running every minute 1, 2, 4 and 5');
});

#### [](https://www.npmjs.com/package/node-cron#using-ranges)Using ranges

You may also define a range of values:

var cron = require('node-cron');

cron.schedule('1-5 * * * *', () => {
  console.log('running every minute to 1 from 5');
});

#### [](https://www.npmjs.com/package/node-cron#using-step-values)Using step values

Step values can be used in conjunction with ranges, following a range with '/' and a number. e.g: `1-10/2` that is the same as `2,4,6,8,10`. Steps are also permitted after an asterisk, so if you want to say “every two minutes”, just use `*/2`.

var cron = require('node-cron');

cron.schedule('*/2 * * * *', () => {
  console.log('running a task every two minutes');
});

#### [](https://www.npmjs.com/package/node-cron#using-names)Using names

For month and week day you also may use names or short names. e.g:

var cron = require('node-cron');

cron.schedule('* * * January,September Sunday', () => {
  console.log('running on Sundays of January and September');
});

Or with short names:

var cron = require('node-cron');

cron.schedule('* * * Jan,Sep Sun', () => {
  console.log('running on Sundays of January and September');
});

## [](https://www.npmjs.com/package/node-cron#cron-methods)Cron methods

### [](https://www.npmjs.com/package/node-cron#schedule)Schedule

Schedules given task to be executed whenever the cron expression ticks.

Arguments:

-   **expression** `string`: Cron expression
-   **function** `Function`: Task to be executed
-   **options** `Object`: Optional configuration for job scheduling.

#### [](https://www.npmjs.com/package/node-cron#options)Options

-   **scheduled**: A `boolean` to set if the created task is scheduled. Default `true`;
-   **timezone**: The timezone that is used for job scheduling. See [IANA time zone database](https://www.iana.org/time-zones) for valid values, such as `Asia/Shanghai`, `Asia/Kolkata`, `America/Sao_Paulo`.

**Example**:

 var cron = require('node-cron');

 cron.schedule('0 1 * * *', () => {
   console.log('Running a job at 01:00 at America/Sao_Paulo timezone');
 }, {
   scheduled: true,
   timezone: "America/Sao_Paulo"
 });

## [](https://www.npmjs.com/package/node-cron#scheduledtask-methods)ScheduledTask methods

### [](https://www.npmjs.com/package/node-cron#start)Start

Starts the scheduled task.

var cron = require('node-cron');

var task = cron.schedule('* * * * *', () =>  {
  console.log('stopped task');
}, {
  scheduled: false
});

task.start();

### [](https://www.npmjs.com/package/node-cron#stop)Stop

The task won't be executed unless re-started.

var cron = require('node-cron');

var task = cron.schedule('* * * * *', () =>  {
  console.log('will execute every minute until stopped');
});

task.stop();

### [](https://www.npmjs.com/package/node-cron#validate)Validate

Validate that the given string is a valid cron expression.

var cron = require('node-cron');

var valid = cron.validate('59 * * * *');
var invalid = cron.validate('60 * * * *');


[node-cron - npm (npmjs.com)](https://www.npmjs.com/package/node-cron)