const ErrorMessage = {
  NOT_AUTHORIZED: 'You are not authorized to access this route.',
  NOT_FOUND: 'Not found.',
  UPDATE_FAILED: 'Update failed.',
  UNKNOWN_ERROR: 'Application error.',
  USER_NOT_FOUND: 'No user found for provided credentials.',
  NOT_IMPLEMENTED: 'Not implemented.',
  TOKEN_INVALID_OR_EXPIRED: 'token invalid or expired.',
} as const;

export { ErrorMessage };
