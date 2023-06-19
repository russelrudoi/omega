/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    },
    images: {
        domains: ['dev-omega-wp.pantheonsite.io']
    }
};
