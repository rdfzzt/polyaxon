export enum actionTypes {
  CREATE_EXPERIMENT_REQUEST = 'CREATE_EXPERIMENT_REQUEST',
  CREATE_EXPERIMENT_SUCCESS = 'CREATE_EXPERIMENT_SUCCESS',
  CREATE_EXPERIMENT_ERROR = 'CREATE_EXPERIMENT_ERROR',

  DELETE_EXPERIMENT_REQUEST = 'DELETE_EXPERIMENT_REQUEST',
  DELETE_EXPERIMENT_SUCCESS = 'DELETE_EXPERIMENT_SUCCESS',
  DELETE_EXPERIMENT_ERROR = 'DELETE_EXPERIMENT_ERROR',

  DELETE_EXPERIMENTS_REQUEST = 'DELETE_EXPERIMENTS_REQUEST',
  DELETE_EXPERIMENTS_SUCCESS = 'DELETE_EXPERIMENTS_SUCCESS',
  DELETE_EXPERIMENTS_ERROR = 'DELETE_EXPERIMENTS_ERROR',

  ARCHIVE_EXPERIMENT_REQUEST = 'ARCHIVE_EXPERIMENT_REQUEST',
  ARCHIVE_EXPERIMENT_SUCCESS = 'ARCHIVE_EXPERIMENT_SUCCESS',
  ARCHIVE_EXPERIMENT_ERROR = 'ARCHIVE_EXPERIMENT_ERROR',

  RESTORE_EXPERIMENT_REQUEST = 'RESTORE_EXPERIMENT_REQUEST',
  RESTORE_EXPERIMENT_SUCCESS = 'RESTORE_EXPERIMENT_SUCCESS',
  RESTORE_EXPERIMENT_ERROR = 'RESTORE_EXPERIMENT_ERROR',

  STOP_EXPERIMENT_REQUEST = 'STOP_EXPERIMENT_REQUEST',
  STOP_EXPERIMENT_SUCCESS = 'STOP_EXPERIMENT_SUCCESS',
  STOP_EXPERIMENT_ERROR = 'STOP_EXPERIMENT_ERROR',

  STOP_EXPERIMENTS_REQUEST = 'STOP_EXPERIMENTS_REQUEST',
  STOP_EXPERIMENTS_SUCCESS = 'STOP_EXPERIMENTS_SUCCESS',
  STOP_EXPERIMENTS_ERROR = 'STOP_EXPERIMENTS_ERROR',

  UPDATE_EXPERIMENT_REQUEST = 'UPDATE_EXPERIMENT_REQUEST',
  UPDATE_EXPERIMENT_SUCCESS = 'UPDATE_EXPERIMENT_SUCCESS',
  UPDATE_EXPERIMENT_ERROR = 'UPDATE_EXPERIMENT_ERROR',

  GET_EXPERIMENT_REQUEST = 'GET_EXPERIMENT_REQUEST',
  GET_EXPERIMENT_SUCCESS = 'GET_EXPERIMENT_SUCCESS',
  GET_EXPERIMENT_ERROR = 'GET_EXPERIMENT_ERROR',

  FETCH_EXPERIMENTS_REQUEST = 'FETCH_EXPERIMENTS_REQUEST',
  FETCH_EXPERIMENTS_SUCCESS = 'FETCH_EXPERIMENTS_SUCCESS',
  FETCH_EXPERIMENTS_PARAMS_SUCCESS = 'FETCH_EXPERIMENTS_PARAMS_SUCCESS',
  FETCH_EXPERIMENTS_ERROR = 'FETCH_EXPERIMENTS_ERROR',

  BOOKMARK_EXPERIMENT_REQUEST = 'BOOKMARK_EXPERIMENT_REQUEST',
  BOOKMARK_EXPERIMENT_SUCCESS = 'BOOKMARK_EXPERIMENT_SUCCESS',
  BOOKMARK_EXPERIMENT_ERROR = 'BOOKMARK_EXPERIMENT_ERROR',

  UNBOOKMARK_EXPERIMENT_REQUEST = 'UNBOOKMARK_EXPERIMENT_REQUEST',
  UNBOOKMARK_EXPERIMENT_SUCCESS = 'UNBOOKMARK_EXPERIMENT_SUCCESS',
  UNBOOKMARK_EXPERIMENT_ERROR = 'UNBOOKMARK_EXPERIMENT_ERROR',

  START_EXPERIMENT_TENSORBOARD_REQUEST = 'START_EXPERIMENT_TENSORBOARD_REQUEST',
  START_EXPERIMENT_TENSORBOARD_SUCCESS = 'START_EXPERIMENT_TENSORBOARD_SUCCESS',
  START_EXPERIMENT_TENSORBOARD_ERROR = 'START_EXPERIMENT_TENSORBOARD_ERROR',

  STOP_EXPERIMENT_TENSORBOARD_REQUEST = 'STOP_EXPERIMENT_TENSORBOARD_REQUEST',
  STOP_EXPERIMENT_TENSORBOARD_SUCCESS = 'STOP_EXPERIMENT_TENSORBOARD_SUCCESS',
  STOP_EXPERIMENT_TENSORBOARD_ERROR = 'STOP_EXPERIMENT_TENSORBOARD_ERROR',
}
