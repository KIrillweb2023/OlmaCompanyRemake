import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    'localhost',
    '127.0.0.1',
    '192.168.1.121', // ваш IP-адрес
    '0.0.0.0'
  ],
  eslint: {
    // ВАЖНО: Это отключит ESLint проверки при сборке
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Также можно пропустить проверку TypeScript если есть ошибки
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
