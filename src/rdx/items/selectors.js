// eslint-disable-next-line import/prefer-default-export
export const selectAllTasks = (state) => state.tasks.tasks;
export const selectAllTasksLoading = (state) => state.tasks.isLoading;

export const addTasksLoading = (state) => state.tasks.isAddLoading;
