module.exports = {
  concurrent: false,
  linters: {
    'README.md': [
      'node_modules/.bin/doctoc --maxlevel 3 --notitle .',
      'git add',
    ],
    '**/*.+(js|ts|css|sass|less|graphql|scss|vue|md)': [
      'eslint --fix',
      'prettier --write',
      'git add',
    ],
  },
}
