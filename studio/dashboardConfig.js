export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e3819aed1494486971f0e0d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-pjx3ptdb',
                  apiId: '2a7e2d41-6a43-4250-b2f9-339b7dd60861'
                },
                {
                  buildHookId: '5e3819ae49a8d828d8010375',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-q8dpv7bj',
                  apiId: '29c15b1a-e94d-453c-a356-52d0025e2fad'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/augustolimads/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-q8dpv7bj.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
