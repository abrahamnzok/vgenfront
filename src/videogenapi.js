import { server } from '../axios.config';

export async function generateCompilation(autogeneration = true, name = 'idm', playlist = '') {
  try {
    const response = await server.get('compile/autogenerate/', {
      params: {
        autogen: autogeneration,
        filename: name,
      },
      data: playlist,
    });
    return response.data;
  } catch (e) {
    return new Error(e);
  }
}

export async function fetchGif(name = 'idmgif') {
  try {
    const response = await server.get('compile/gif/', {
      params: {
        gifname: name,
      },
    });
    return response.data;
  } catch (e) {
    return new Error(e);
  }
}

export async function fetchMedias() {
  try {
    const response = await server.get('/allmedias');
    return response.data;
  } catch (e) {
    return new Error(e);
  }
}

export async function fetchVariantsData() {
  try {
    const response = await server.get('variant/possibilities/data/');
    return response.data;
  } catch (e) {
    return new Error(e);
  }
}

export async function fetchCompilationDuration() {
  try {
    const response = await server.get('variant/duration/');
    return response.data;
  } catch (e) {
    return new Error(e);
  }
}
