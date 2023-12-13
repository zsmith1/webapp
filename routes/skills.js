var express = require('express');
var router = express.Router();

const languages = ["Python", "SQL", "Java", "Javascript", "Go"];
const iac = ["Ansible", "Terraform", "AWS/Azure"];
const cicd = ["Gitlab CI", "CircleCI", "Jenkins", "AgroCD"]
const other =["Kubernetes", "Docker", "Git", "Agile Development", "Trunk-based Development", "Jira/Confluence", "Grafana", "ELK Stack"];


/* GET skills page. */
router.get('/', function(req, res, next) {
    res.render('pages/skills', {
        languages: languages,
        iac: iac,
        cicd: cicd,
        other: other
    });
});

module.exports = router;
