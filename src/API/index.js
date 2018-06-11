const gitHubUserFetch = (username, token) => {
    return fetch(`https://api.github.com/users/${username}`, {
        headers: {'Authorization': `token ${token}`}
    })
};

export { gitHubUserFetch };