import swaggerAutogen from 'swagger-autogen'

const doc = {
  info: {
    title: 'Mi API',
    description: 'Documentación generada automáticamente',
  },
  host: 'localhost:3000', // Modifica según tu puerto real
  schemes: ['http'],
  securityDefinitions: {
    apiKeyAuth: {
      type: 'apiKey',
      in: 'header',
      name: 'x-api-key', // Debe coincidir con el nombre del encabezado en el middleware
      description: 'Put Your API key',
    },
  },
  security: [{ apiKeyAuth: [] }],
}

const outputFile = './swagger_output.json' // Ubicación del archivo de salida
const endpointsFiles = ['./src/app.ts'] // Archivo de entrada de rutas, se recomienda usar app.js

// Ejecuta la generación
swaggerAutogen()(outputFile, endpointsFiles, doc).then(() => {
  console.info('Swagger Docs Correctly Generated')
})
