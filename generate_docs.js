const docma = require('docma');
const docma_config = {
    src: [
        './docs/**/*.md'
    ],
    dest: './docs'
};

docma.create()
    .build('./docma.json')
    .catch(error => {
        console.log(error);
    })