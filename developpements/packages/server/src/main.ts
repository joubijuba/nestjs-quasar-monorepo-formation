import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule
} from 'nest-winston'
import {
  format,
  transports
} from 'winston'
import { AppModule } from './app.module'

async function bootstrap () {

  // Create HTTP application (web-api)
  const app = await NestFactory.create(AppModule, {
    // Permet de bufferiser les logs en attendant que app.useLogger() soit appelé
    bufferLogs: true
  })

  // Reference to Configuration service
  const configService = app.get(ConfigService)

  // Initialisation d'un logger Winston
  // qui sera utilisé par défaut par Nest.js
  const logLevel = configService.get<string>('log.level')
  const logger = WinstonModule.createLogger({
    level: logLevel,
    format: format.combine(
      format.errors({ stack: true }),
      format.timestamp(),
      format.ms(),
      nestWinstonModuleUtilities.format.nestLike()
    ),
    transports: [
      new transports.Console({
        handleExceptions: true,
        handleRejections: true
      })
    ],
    exitOnError: false
  })
  app.useLogger(logger)

  // Set the global prefix to all the
  app.setGlobalPrefix('/api')

  // Ajout middlewares de sécurisation
  app.use(helmet())

  // Ajout d'un middleware permettant d'utiliser la version cookie de csurf
  // @see https://github.com/expressjs/cookie-parser
  const cookieParserSecret = configService.get<string>('restApi.cookies.parserSecret')
  app.use(cookieParser(cookieParserSecret))
  // @see https://github.com/expressjs/csurf#csurf
  // app.use(
  //   csurf({
  //     cookie: true,
  //     signed: true,
  //     secure: false,
  //     // sameSite: 'strict',
  //     httpOnly: true,
  //   }),
  // )

  // Démarrage de l'application (mise en écoute)
  const port = configService.get<number>('restApi.port')

  // Allow the front-end application to call the API
  // app.enableCors({ origin: configService.get<string>('ORIGIN') })
  app.enableCors()

  if (!!configService.get<boolean>('restApi.useCompression')) {
    // Node compress response. For heavy-load, use nginx proxy with compression instead.
    logger.warn('server use node compression for REST Apis response')
    app.use(compression())
  }

  // Starts listening for shutdown hooks
  app.enableShutdownHooks()

  await app.listen(port, () =>
    logger.log(`server REST Apis started: listen on port: ${port} - Check server health using /api/monitoring/health endpoint`)
  )
}

bootstrap()
