module.exports = {
  apps: [
    {
      name: 'myapp',
      script: './app.js',
      instances: 0,
      exec_mode: 'cluster',
    },
  ],
};
