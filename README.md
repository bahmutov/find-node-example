# find-node-example
> Blog post companion code showing how to find system Node in a functional way

This repo contains multiple files, from the "normal" imperative Promise and `if / else` implementation to functional implementations using []() and []() libraries.

## Use

First install dependencies with `npm install` or `npm ci`

Then call one of the source files. Change the current Node using `nvm` and try again. The system Node and its version should be found.

1. [00-find-node.js](00-find-node.js) is the imperative version

Call it to find the current system Node

```text
$ node ./00-find-node
{ path: '/Users/gleb/.nvm/versions/node/v10.13.0/bin/node',
  version: '10.13.0' }
$ nvm use 12
Now using node v12.4.0 (npm v6.9.0)
$ node ./00-find-node
{
  path: '/Users/gleb/.nvm/versions/node/v12.4.0/bin/node',
  version: '12.4.0'
}
```

If you want to see more log messages, execute each file with `DEBUG=verbose` environment variable set.

2. [01-find-node-task.js](01-find-node-task.js) changes a single function to use `Task` from [Folktale](https://github.com/origamitower/folktale) to clearly show the success and error flows.
3. [02-with-fix-path.js](02-with-fix-path.js) shows how to handle Node not found and try again
