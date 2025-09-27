module.exports = {
  apps: [
    {
      name: 'nuxt saas',
      script: '.output/server/index.mjs',
      env: {
        // Lắng nghe nội bộ, để Nginx reverse proxy
        NITRO_HOST: '127.0.0.1',
        NITRO_PORT: 3333,

        // Nếu cần biến riêng runtime của bạn thì thêm ở đây, ví dụ:
        // NUXT_PUBLIC_API_BASE: 'https://api.example.com'
      },
      // Tùy chọn: tự restart khi tốn >300MB RAM (ví dụ)
      max_memory_restart: '300M',
      // Tùy chọn: 1 instance cho ổn định; cluster >=2 nếu CPU dư
      instances: 1,
      exec_mode: 'fork',
      // Không bật watch ở production
      watch: false
    }
  ]
}
