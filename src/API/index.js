const gitHubUserFetch = (username, token) => {
    return fetch(`https://api.github.com/users/${username}`, {
        headers: {'Authorization': `token ${token}`}
    })
};

const tokenFetch = () => {
    return fetch("http://5b1e64c24d4fc00014b07db2.mockapi.io/token");
};

export { gitHubUserFetch, tokenFetch };
