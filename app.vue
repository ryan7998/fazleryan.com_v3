<script setup>
const SITE_URL = 'https://fazleryan.com'
const FULL_NAME = 'Fazle Ryan Chowdhury'
const TITLE = 'Fazle Ryan — Full-Stack Developer | Laravel · Node.js · Vue · React'
const DESCRIPTION =
  'Fazle Ryan is a full-stack developer in Kitchener, ON, Canada. He builds production-grade web apps, APIs, real-time dashboards, and crawlers with Laravel, Node.js, Vue.js, and React.'

// Primary meta + Open Graph + Twitter Card
useSeoMeta({
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'Fazle Ryan, full-stack developer, Laravel developer, Node.js developer, Vue.js, React, PHP, TypeScript, web developer Canada, Kitchener developer, portfolio',
  author: FULL_NAME,
  robots: 'index, follow',
  // Open Graph
  ogType: 'website',
  ogSiteName: 'Fazle Ryan — Portfolio',
  ogTitle: TITLE,
  ogDescription: DESCRIPTION,
  ogUrl: SITE_URL,
  ogImage: `${SITE_URL}/og-image.png`,
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogImageAlt: 'Fazle Ryan — Full-Stack Developer',
  ogLocale: 'en_CA',
  // Twitter / X
  twitterCard: 'summary_large_image',
  twitterSite: '@fazleryan',
  twitterTitle: TITLE,
  twitterDescription: DESCRIPTION,
  twitterImage: `${SITE_URL}/og-image.png`,
})

// Canonical + fonts + structured data
useHead({
  htmlAttrs: { lang: 'en' },
  link: [
    { rel: 'canonical', href: SITE_URL },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000&family=Inter:wght@400;500;600;700&display=swap',
    },
  ],
  script: [
    // Person schema — tells Google who this site is about
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: FULL_NAME,
        alternateName: 'Fazle Ryan',
        url: SITE_URL,
        email: 'mail@fazleryan.com',
        telephone: '+14372346677',
        jobTitle: 'Full-Stack Developer',
        description: DESCRIPTION,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kitchener',
          addressRegion: 'ON',
          addressCountry: 'CA',
        },
        sameAs: [
          'https://github.com/ryan7998',
          'https://www.linkedin.com/in/fazle-ryan',
          'https://www.upwork.com/freelancers/fazleryan',
        ],
        knowsAbout: [
          'Laravel', 'PHP', 'Node.js', 'Express', 'Vue.js', 'React',
          'TypeScript', 'JavaScript', 'MongoDB', 'MySQL', 'PostgreSQL',
          'Redis', 'Bull queues', 'Playwright', 'Elasticsearch',
          'REST APIs', 'Socket.IO', 'Docker', 'Full-Stack Development',
        ],
        image: `${SITE_URL}/favicon.png`,
      }),
    },
    // WebSite schema — helps Google understand the site structure
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Fazle Ryan — Portfolio',
        url: SITE_URL,
        description: DESCRIPTION,
        author: {
          '@type': 'Person',
          name: FULL_NAME,
        },
      }),
    },
    // ProfilePage schema — newer type specifically for portfolio pages
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        name: TITLE,
        url: SITE_URL,
        mainEntity: {
          '@type': 'Person',
          name: FULL_NAME,
          jobTitle: 'Full-Stack Developer',
          email: 'mail@fazleryan.com',
          url: SITE_URL,
        },
      }),
    },
  ],
})
</script>

<template>
  <div class="min-h-screen w-full overflow-x-hidden">
    <TheNav />
    <main>
      <NuxtPage />
    </main>
    <TheFooter />
  </div>
</template>
