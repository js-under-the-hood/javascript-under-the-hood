const gitHubUserFetch = (username) => {
    return fetch(`https://api.github.com/users/${username}`, {
        headers: {'Authorization': 'token 662fe928bf7315723de5209057bcc2e63bcf78e6'}
    })
};

export { gitHubUserFetch };
