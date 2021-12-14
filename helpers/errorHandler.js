export const errorHandler = (error, req, res, next) => {
  if (error.name === 'UnauthorizedError') {
    return res.status(401).json({ error: 'Not Authorized' })
  }

  if (error.name === 'ValidationError') {
    return res.status(401).json({ error: error.message })
  }

  return res.status(500).json({ error: 'Server Error' })
}
