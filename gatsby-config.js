module.exports = {
    siteMetadata: {
        title: 'Gatsby Starter - Strata by HTML5 UP',
        author: 'Hunter Chang',
        description: 'A Gatsby.js Starter based on Strata by HTML5 UP',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'KlasseNzimmer',
                short_name: 'KlasseNzimmer',
                background_color: '#202f39',
                theme_color: '#202f39',
                icon: 'static/images/custom/Monte_Roza.svg', // This path is relative to the root of the site.
            },
        },
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/src/_cms`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/_cms/blog/images`,
            },
        },
        'gatsby-plugin-sass',
        'gatsby-plugin-offline',
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: 'UA-98654586-1',
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: ['/preview/**', '/do-not-track/me/too/'],
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,
                // Defers execution of google analytics script after page load
                defer: false,
                // Any additional optional fields
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                // defaults to false
                enableWebVitalsTracking: true,
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /customsvg/
                }
            }
        }
        // {
        //     resolve: 'gatsby-plugin-load-script',
        //     options: {
        //         src: '/js/core.min.js'
        //     },
        // },
        // {
        //     resolve: 'gatsby-plugin-load-script',
        //     options: {
        //         src: '/js/script.js'
        //     },
        // },
    ],
};
