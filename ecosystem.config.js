module.exports = {
    apps: [
        {
            name: "ystudio-agent",
            script: "Channel-Growth-Marketing/node_modules/ystudio-analytics-agent/dist/startServices.js",
            interpreter: "node", // Optional: defaults to node
            watch: false,        // Set to true if you want PM2 to restart on file changes
            env: {
                NODE_ENV: "production"
            }
        }
    ]
};

