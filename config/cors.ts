const corsConfig = {
  enabled: true,
  origin: true, // Allow all origins (for testing)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  headers: true,
  exposeHeaders: true,
  credentials: false,
  maxAge: 90,
}

export default corsConfig

