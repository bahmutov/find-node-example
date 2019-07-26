const Task = require('folktale/concurrency/task')

const debug = require('debug')('verbose')
const which = require('which')

// wrap Node callback style function in a Task
const asyncWhich = Task.fromNodeback(which)

function findNodeInFullPath () {
  debug('finding Node with $PATH %s', process.env.PATH)

  // "tap" and debug log implemented using "comma operator"
  const tapDebug = path => (debug('found Node %o', { path }), path)

  return (
    asyncWhich('node')  // async Task
      .map(tapDebug)    // success flow
      .orElse(err => {  // error flow
        debug('could not find Node %o', { err })
        // keep the rejection (still error flow)
        return Task.rejected(err)
      })
  )
}

if (!module.parent) {
  findNodeInFullPath()
    .run()
    .promise()
    .then(console.log, console.error)
}
