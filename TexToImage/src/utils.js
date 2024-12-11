function parseArgs(args) {
  return {
    latex: args.find(arg => arg.startsWith('--latex=')).slice('--latex='.length),
    output: args.find(arg => arg.startsWith('--output=')).slice('--output='.length) || 'output.png'
  };
}

module.exports = { parseArgs };
