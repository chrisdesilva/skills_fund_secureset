[[redirects]]
  from = "/go"
  to = "/?utm_source=school&utm_medium=printedskfbrochure&utm_campaign=studentbrochure"

[[redirects]]
  from = "/accepted"
  to = "/"


[[redirects]]
  from = "https://securesetacademy.skills.fund"
  to = "/"

  exports.createPages = ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions
 
    createRedirect({ fromPath: 'https://securesetacademy.skills.fund/*', toPath: 'https://secureset.skills.fund/:splat', isPermanent: true, force: true })
    createRedirect({ fromPath: '/go', toPath: '/?utm_source=school&utm_medium=printedskfbrochure&utm_campaign=studentbrochure'})
    createRedirect({ fromPath: '/accepted', toPath: '/'})
   
}
