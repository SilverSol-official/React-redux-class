/* eslint-disable consistent-return */
const BASE_URL = 'http://localhost:8080';

const commonHeaders = {
  'Content-Type': 'application/json',
};

export const callApiEndpoint = async ({
  endpoint,
  method,
  body,
  headers,
}) => {
  console.log('endpoint: ', endpoint);
  console.log('method: ', method);
  console.log('body: ', body);
  console.log('headers: ', headers);

  try {
    const response = await fetch([BASE_URL, endpoint].join('/'), {
      method,
      body: JSON.stringify(body),
      headers: { ...commonHeaders, ...headers },
    });
    console.log(response);
    if (response.ok) {
      const responseJson = await response.json();
      return {
        success: true,
        response: responseJson,
      };
    }
    // return {
    //   success: false,
    //   error: new Error('Something went wrong'),
    // };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};

export const fetchAllTasksApi = () => callApiEndpoint({
  endpoint: 'task',
  method: 'GET',
});

export const addTaskApi = ({ task }) => callApiEndpoint({
  endpoint: 'task',
  method: 'POST',
  body: task,
});

export const removeTaskApi = ({ id }) => callApiEndpoint({
  endpoint: ['task', id].join('/'),
  method: 'DELETE',
});

export const putTaskApi = ({ item }) => callApiEndpoint({
  endpoint: ['task', item.id].join('/'),
  method: 'PUT',
  body: item,
});
