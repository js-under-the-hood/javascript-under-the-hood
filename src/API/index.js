const gitHubUserFetch = (username) => {
    return fetch(`https://api.github.com/users/${username}`, {
        headers: {'Authorization': 'token 24ece0ab7d626b6c14561eec2e059a1b29b872ce'}
    })
};

export { gitHubUserFetch };
