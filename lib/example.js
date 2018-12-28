'use strict';

const { spawn } = require('child_process');

function example(command) {
    return new Promise((resolve, reject) => {
        const node = spawn(command, {
            env: Object.assign({}, process.env, { FORCE_COLOR: 'true' }),
        });

        node.stdout.on('data', (data) => {
            const result = data
                    .toString()
                    .trim()

            resolve(result);
        });

        node.stderr.on('data', (data) => {
            const error = data.toString();

            reject(error);
        });
    });
}

module.exports = example;
