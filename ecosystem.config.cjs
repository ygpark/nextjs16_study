module.exports = {
  apps: [
    {
      name: "test.ghostyak.com",
      script: "build/index.js",
      env: {
        HOST: "127.0.0.1",
        PORT: 4002,
        NODE_ENV: "production",
      },
      instances: 1,
      exec_mode: "fork",
      watch: false,
      max_memory_restart: "1G",
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      log_file: "./logs/combined.log",
      time: true,
    },
  ],
};
