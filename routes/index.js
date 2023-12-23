var express = require('express');
var router = express.Router();

const languages = ["Python", "SQL", "Java", "Javascript", "Go"];
const iac = ["Ansible", "Terraform", "AWS/Azure"];
const cicd = ["Gitlab CI", "CircleCI", "Jenkins", "AgroCD"]
const other =["Kubernetes", "Docker", "Git", "Agile Development", "Trunk-based Development", "Jira/Confluence", "Grafana", "ELK Stack"];

const { Octokit } = require("@octokit/core");
const octokit = new Octokit();

async function fetchAllRepos(user) {
    const result = await octokit.request('GET /users/{user}/repos', {
        user: user
    });
    return result;
}

/* GET home page. */
router.get('/', function(req, res) {
  fetchAllRepos('zsmith1').then(repos => {
    res.render('pages/index', {
      repos: repos.data,
      languages: languages,
      iac: iac,
      cicd: cicd,
      other: other
    });
  });
});

module.exports = router;
