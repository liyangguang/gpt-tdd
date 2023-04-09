import start from './iteration';

/* This is tied to the cost of the operation, choose it carefully.
 * In most cases, it either finishes in 1 or a few iterations, or won't be able to make it work,
 * so having a large value doesn't make the output better. */
const MAX_ITERATIONS = 2;

// Whether to log detailed process info.
const LOG_DEBUG_INFO = true;

start(MAX_ITERATIONS, LOG_DEBUG_INFO);
