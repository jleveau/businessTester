const NightmareRunner = require('./runner/nightmare');

if (process.argv.length !== 3) {
    console.log('usage : node index.js filename')
}

NightmareRunner.run(process.argv[2]);

