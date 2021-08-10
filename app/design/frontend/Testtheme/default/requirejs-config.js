var config = {
    map: {
        '*': {
            custom: 'js/custom',
            select2: 'js/select2.min',
            myjs: 'js/myfile'
        }
    },
    paths: {
        'myjs': 'js/myfile'
    },
    shim: {
        'myjs': {
            deps: ['jquery']
        }
    }
};
