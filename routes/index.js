var express = require('express');
var router = express.Router();

const languages = ["Python", "SQL", "Java", "Javascript", "Go"];
const iac = ["Ansible", "Terraform", "AWS/Azure"];
const cicd = ["Gitlab CI", "CircleCI", "Jenkins", "AgroCD"]
const testing = ["Spock", "Pytest", "Selenium/Geb", "Behave"]
const other =["Kubernetes", "Docker", "Git", "Agile Development", "Trunk-based Development", "Jira/Confluence", "Grafana", "ELK Stack"];

const { Octokit } = require("@octokit/core");
const octokit = new Octokit()

async function fetchAllRepos(user) {
    const result = await octokit.request('GET /users/{user}/repos', {
        user: user
    });
    return result;
}

const schedule = require('node-schedule');

let repos
fetchAllRepos('zsmith1').then(it => {
  repos = it
});

schedule.scheduleJob('*/5 * * * *', function(){
  fetchAllRepos('zsmith1').then(it => {
    repos = it
  });
});

/* GET home page. */
router.get('/', async function(req, res) {
  res.render('pages/index', {
    repos: repos.data,
    languages: languages,
    iac: iac,
    cicd: cicd,
    testing: testing,
    other: other
  });
});

module.exports = router;
