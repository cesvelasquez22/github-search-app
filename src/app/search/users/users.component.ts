import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/types/user.types';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @Input() users: Item[] = [];
  page = 1;

  mockData: Item[] = [
    {
      login: 'ces',
      id: 112995,
      node_id: 'MDQ6VXNlcjExMjk5NQ==',
      avatar_url: 'https://avatars.githubusercontent.com/u/112995?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/ces',
      html_url: 'https://github.com/ces',
      followers_url: 'https://api.github.com/users/ces/followers',
      following_url: 'https://api.github.com/users/ces/following{/other_user}',
      gists_url: 'https://api.github.com/users/ces/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/ces/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/ces/subscriptions',
      organizations_url: 'https://api.github.com/users/ces/orgs',
      repos_url: 'https://api.github.com/users/ces/repos',
      events_url: 'https://api.github.com/users/ces/events{/privacy}',
      received_events_url: 'https://api.github.com/users/ces/received_events',
      type: 'User',
      site_admin: false,
      score: 1,
    },
    {
      login: 'cescoffier',
      id: 402301,
      node_id: 'MDQ6VXNlcjQwMjMwMQ==',
      avatar_url: 'https://avatars.githubusercontent.com/u/402301?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/cescoffier',
      html_url: 'https://github.com/cescoffier',
      followers_url: 'https://api.github.com/users/cescoffier/followers',
      following_url:
        'https://api.github.com/users/cescoffier/following{/other_user}',
      gists_url: 'https://api.github.com/users/cescoffier/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/cescoffier/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/cescoffier/subscriptions',
      organizations_url: 'https://api.github.com/users/cescoffier/orgs',
      repos_url: 'https://api.github.com/users/cescoffier/repos',
      events_url: 'https://api.github.com/users/cescoffier/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/cescoffier/received_events',
      type: 'User',
      site_admin: false,
      score: 1,
    },
    {
      login: 'cespare',
      id: 318501,
      node_id: 'MDQ6VXNlcjMxODUwMQ==',
      avatar_url: 'https://avatars.githubusercontent.com/u/318501?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/cespare',
      html_url: 'https://github.com/cespare',
      followers_url: 'https://api.github.com/users/cespare/followers',
      following_url:
        'https://api.github.com/users/cespare/following{/other_user}',
      gists_url: 'https://api.github.com/users/cespare/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/cespare/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/cespare/subscriptions',
      organizations_url: 'https://api.github.com/users/cespare/orgs',
      repos_url: 'https://api.github.com/users/cespare/repos',
      events_url: 'https://api.github.com/users/cespare/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/cespare/received_events',
      type: 'User',
      site_admin: false,
      score: 1,
    },
    {
      login: 'cesarferreira',
      id: 277426,
      node_id: 'MDQ6VXNlcjI3NzQyNg==',
      avatar_url: 'https://avatars.githubusercontent.com/u/277426?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/cesarferreira',
      html_url: 'https://github.com/cesarferreira',
      followers_url: 'https://api.github.com/users/cesarferreira/followers',
      following_url:
        'https://api.github.com/users/cesarferreira/following{/other_user}',
      gists_url: 'https://api.github.com/users/cesarferreira/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/cesarferreira/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/cesarferreira/subscriptions',
      organizations_url: 'https://api.github.com/users/cesarferreira/orgs',
      repos_url: 'https://api.github.com/users/cesarferreira/repos',
      events_url: 'https://api.github.com/users/cesarferreira/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/cesarferreira/received_events',
      type: 'User',
      site_admin: false,
      score: 1,
    },
    {
      login: 'Cesar-Hack-Gray',
      id: 46208706,
      node_id: 'MDQ6VXNlcjQ2MjA4NzA2',
      avatar_url: 'https://avatars.githubusercontent.com/u/46208706?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Cesar-Hack-Gray',
      html_url: 'https://github.com/Cesar-Hack-Gray',
      followers_url: 'https://api.github.com/users/Cesar-Hack-Gray/followers',
      following_url:
        'https://api.github.com/users/Cesar-Hack-Gray/following{/other_user}',
      gists_url: 'https://api.github.com/users/Cesar-Hack-Gray/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Cesar-Hack-Gray/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Cesar-Hack-Gray/subscriptions',
      organizations_url: 'https://api.github.com/users/Cesar-Hack-Gray/orgs',
      repos_url: 'https://api.github.com/users/Cesar-Hack-Gray/repos',
      events_url:
        'https://api.github.com/users/Cesar-Hack-Gray/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Cesar-Hack-Gray/received_events',
      type: 'User',
      site_admin: false,
      score: 1,
    },
    {
      login: 'cesine',
      id: 196199,
      node_id: 'MDQ6VXNlcjE5NjE5OQ==',
      avatar_url: 'https://avatars.githubusercontent.com/u/196199?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/cesine',
      html_url: 'https://github.com/cesine',
      followers_url: 'https://api.github.com/users/cesine/followers',
      following_url:
        'https://api.github.com/users/cesine/following{/other_user}',
      gists_url: 'https://api.github.com/users/cesine/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/cesine/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/cesine/subscriptions',
      organizations_url: 'https://api.github.com/users/cesine/orgs',
      repos_url: 'https://api.github.com/users/cesine/repos',
      events_url: 'https://api.github.com/users/cesine/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/cesine/received_events',
      type: 'User',
      site_admin: false,
      score: 1,
    },
    {
      login: 'CESARDELATORRE',
      id: 1712635,
      node_id: 'MDQ6VXNlcjE3MTI2MzU=',
      avatar_url: 'https://avatars.githubusercontent.com/u/1712635?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/CESARDELATORRE',
      html_url: 'https://github.com/CESARDELATORRE',
      followers_url: 'https://api.github.com/users/CESARDELATORRE/followers',
      following_url:
        'https://api.github.com/users/CESARDELATORRE/following{/other_user}',
      gists_url: 'https://api.github.com/users/CESARDELATORRE/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/CESARDELATORRE/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/CESARDELATORRE/subscriptions',
      organizations_url: 'https://api.github.com/users/CESARDELATORRE/orgs',
      repos_url: 'https://api.github.com/users/CESARDELATORRE/repos',
      events_url:
        'https://api.github.com/users/CESARDELATORRE/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/CESARDELATORRE/received_events',
      type: 'User',
      site_admin: false,
      score: 1,
    },
    {
      login: 'ceshine',
      id: 674501,
      node_id: 'MDQ6VXNlcjY3NDUwMQ==',
      avatar_url: 'https://avatars.githubusercontent.com/u/674501?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/ceshine',
      html_url: 'https://github.com/ceshine',
      followers_url: 'https://api.github.com/users/ceshine/followers',
      following_url:
        'https://api.github.com/users/ceshine/following{/other_user}',
      gists_url: 'https://api.github.com/users/ceshine/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/ceshine/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/ceshine/subscriptions',
      organizations_url: 'https://api.github.com/users/ceshine/orgs',
      repos_url: 'https://api.github.com/users/ceshine/repos',
      events_url: 'https://api.github.com/users/ceshine/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/ceshine/received_events',
      type: 'User',
      site_admin: false,
      score: 1,
    },
    {
      login: 'byterider',
      id: 3521182,
      node_id: 'MDQ6VXNlcjM1MjExODI=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3521182?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/byterider',
      html_url: 'https://github.com/byterider',
      followers_url: 'https://api.github.com/users/byterider/followers',
      following_url:
        'https://api.github.com/users/byterider/following{/other_user}',
      gists_url: 'https://api.github.com/users/byterider/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/byterider/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/byterider/subscriptions',
      organizations_url: 'https://api.github.com/users/byterider/orgs',
      repos_url: 'https://api.github.com/users/byterider/repos',
      events_url: 'https://api.github.com/users/byterider/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/byterider/received_events',
      type: 'User',
      site_admin: false,
      score: 1,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onPrev() {
    if (this.page > 1) {
      this.page--;
    }
  }

  onNext() {
    if (this.page < 9) {
      this.page++;
    }
  }

}
