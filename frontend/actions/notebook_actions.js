import * as NotebookAPIUtil from '../utils/notebook_api_util';

export const RECEIVE_NOTEBOOKS = "RECEIVE_NOTEBOOKS";
export const RECEIVE_NOTEBOOK = "RECEIVE_NOTEBOOK";
export const REMOVE_NOTEBOOK = "REMOVE_NOTEBOOK";

const receiveNotebooks = (notebooks) => ({
  type: RECEIVE_NOTEBOOKS,
  notebooks
});

const receiveNotebook = (notebook) => ({
  type: RECEIVE_NOTEBOOK,
  notebook
});

const removeNotebook = (notebookId) => ({
  type: REMOVE_NOTEBOOK,
  notebookId
});

export const fetchNotebooks = () => dispatch => (
  NotebookAPIUtil.fetchNotebooks()
    .then(notebooks => dispatch(receiveNotebooks(notebooks)))
);

export const fetchNotebook = (id) => dispatch => (
  NotebookAPIUtil.fetchNotebook(id)
    .then(notebook => dispatch(receiveNotebook(notebook)))
);

export const createNotebook = (notebook) => dispatch => (
  NotebookAPIUtil.createNotebook(notebook)
    .then(newNotebook => dispatch(receiveNotebook(newNotebook)))
);

export const updateNotebook = (notebook) => dispatch => (
  NotebookAPIUtil.updateNotebook(notebook)
    .then(updatedNotebook => dispatch(receiveNotebook(updatedNotebook)))
);

export const deleteNotebook = (notebookId) => dispatch => (
  NotebookAPIUtil.deleteNotebook(notebookId)
    .then(notebook => dispatch(removeNotebook(notebookId)))
);
