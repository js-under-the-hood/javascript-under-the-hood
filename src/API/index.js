const gitHubUserFetch = (username) => {
    return fetch(`https://api.github.com/users/${username}`, {
        headers: {'Authorization': 'token 23692ff3437d10f4124b90bed48e695efa197157'}
    })
};

export { gitHubUserFetch };