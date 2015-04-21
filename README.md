Github build comment
====================

Show your custom build information about pull request, without github webhooks.

All you have to do, is provide a page that returns JSON data with information
about your builds related with pull requests.

Example builds JSON data
------------------------

```
{
    "builds": [
        {
            "repo_name": "/github_user/repo_name",
            "pr_number": "#1344",
            "build_link": "https://your-domain.local/build-1344",
            "build_status": "failure"
        },
        {
            "repo_name": "/github_user/repo_name",
            "pr_number": "#1332",
            "build_link": "https://your-domain.local/build-1332",
            "build_status": "success"
        }
    ]
}
```

Available build statuses:
-------------------------

* `failure`
* `pending`
* `success`

Available browsers:
-------------------

* Google Chrome - (install via https://chrome.google.com/webstore/detail/github-build-comment/jjgoepclkdmhkbdnponphbccnedodmli?hl=pl&gl=PL)

# License
This content is released under the [MIT License]
