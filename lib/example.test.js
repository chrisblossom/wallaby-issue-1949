'use strict';

const path = require('path');
const example = require('./example');

test('cli-cmd-file.js', () => {
    const command = path.resolve(__dirname, 'cli-cmd-file.js');

    return example(command)
        .then(result => {
            expect(result).toEqual('cli-cmd-file.js ran successfully');
        });
});

test('sandbox-cli-cmd-file.js', () => {
    const command = path.resolve(__dirname, '__sandbox__/sandbox-cli-cmd-file.js');

    return example(command)
        .then(result => {
            expect(result).toEqual('sandbox-cli-cmd-file.js ran successfully');
        });
});
