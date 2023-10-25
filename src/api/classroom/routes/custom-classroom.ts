module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/classrooms/:id/custom',
            handler: 'classroom.findTutorials',
            config: {
                auth: false,
            },
        },
    ],
};