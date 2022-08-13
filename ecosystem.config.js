module.exports = {
    apps: [
        {
            name: 'vnr-next',
            script: 'npm run start -- -p 3001',
            max_memory_restart: '2G',
        },
    ],
};
