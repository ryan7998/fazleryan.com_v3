<script setup>
const skills = [
  { name: 'HTML5', icon: 'html5' },
  { name: 'Vue.js', icon: 'vue' },
  { name: 'React', icon: 'react' },
]
</script>

<template>
  <section id="portfolio" class="px-6" aria-labelledby="skills-heading">
    <div class="mx-auto max-w-[1200px]">
      <h2
        id="skills-heading"
        class="font-heading mb-10 text-[36px] font-semibold leading-tight text-[var(--text-primary)]"
      >
        My Skills
      </h2>
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-3">
        <article
          v-for="skill in skills"
          :key="skill.name"
          class="skill-card rounded-2xl border p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.4),0_0_0_1px_var(--accent)]"
          style="background: var(--bg-secondary); border-color: var(--border); box-shadow: 0 10px 40px rgba(0,0,0,0.4);"
        >
          <div class="mb-4 flex justify-center text-4xl">
            <span v-if="skill.icon === 'html5'" class="text-[var(--soft-blue)]" aria-hidden="true">&lt;/&gt;</span>
            <span v-else-if="skill.icon === 'vue'" class="text-[#42b883]" aria-hidden="true">V</span>
            <span v-else-if="skill.icon === 'react'" class="text-[#61dafb]" aria-hidden="true">&#x269B;</span>
          </div>
          <h3 class="font-heading text-xl font-semibold leading-snug text-[var(--text-primary)]">
            {{ skill.name }}
          </h3>
        </article>
      </div>
    </div>
  </section>
</template>
