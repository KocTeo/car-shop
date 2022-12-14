import { ErrorRequestHandler } from 'express';

const middlewareError: ErrorRequestHandler = (err, _req, res, _next) => {
  const { name, message } = err;
  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message });
      break;
    case 'UnauthorizedError':
      res.status(401).json({ message });
      break;
    case 'InvalidMongoId':
      res.status(400).json({ error: 'Id must have 24 hexadecimal characters' });
      break;
    case 'NotFoundObject':
      res.status(404).json({ error: 'Object not found' });
      break;
    default:
      res.status(500).json({ message });
      break;
  }
};

export default middlewareError;