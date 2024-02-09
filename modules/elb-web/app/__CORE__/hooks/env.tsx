export let isDevEnv = () => {
    return process.env.NODE_ENV === 'development';
}