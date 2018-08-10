module.exports = {
  default: `test/features/**/*.feature --logLevel=error --require test/steps/**/*.step.ts --format-options '{"snippetInterface": "synchronous"}' --require-module ts-node/register`
};
