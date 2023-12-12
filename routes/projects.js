var express = require('express');
var router = express.Router();
const { Octokit } = require("@octokit/core");
const octokit = new Octokit();

async function fetchAllRepos(user) {
    const result = await octokit.request('GET /users/{user}/repos', {
        user: user,
    });
    return result;
}

/* GET projects page. */
router.get('/', function(req, res, next) {
    fetchAllRepos("zsmith1").then(repos =>
        res.render('pages/projects', {
            repos: repos.data
        })
    );
 });

module.exports = router;
