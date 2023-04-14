export default () => ({
  log: {
    level: process.env.LOG_LEVEL
  },
  healthChecks: {
    httpEndPoint: process.env.HCHECK_HTTP_END_POINT,
    maxMemoryHeapInMo: parseInt(process.env.HCHECK_MAX_MEMORY_HEAP_IN_MB || '250', 10),
    maxMemoryRSSInMo: parseInt(process.env.HCHECK_MAX_MEMORY_RSS_IN_MB || '1000', 10)
  },
  restApi: {
    port: parseInt(process.env.LISTEN_PORT, 10),
    origin: process.env.ORIGIN,
    useCompression: process.env.USE_COMPRESSION === 'true',
    cookies: {
      parserSecret: process.env.COOKIE_PARSER_SECRET
    },
    jwt: {
      secretKey: process.env.JWT_SECRET_KEY,
      expiresIn: process.env.JWT_EXPIRES_IN,
      resetPasswordSecretKey: process.env.JWT_RESET_PASSWORD_SECRET_KEY,
      resetPasswordExpiresIn: process.env.JWT_RESET_PASSWORD_EXPIRES_IN
    }
  }
})
