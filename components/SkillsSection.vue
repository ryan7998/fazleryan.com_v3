<script setup>
const skills = [
  { name: 'HTML5', iconClass: 'fa-brands fa-html5', color: '#E34F26' },
  { name: 'CSS3', iconClass: 'fa-brands fa-css3-alt', color: '#1572B6' },
  { name: 'React', iconClass: 'fa-brands fa-react', color: '#61DAFB' },
]
</script>

<template>
  <section id="portfolio" class="skills-card" aria-labelledby="skills-heading">
    <div class="flex flex-col h-full rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.35)]">
      <h2 id="skills-heading" class="font-heading mb-6 text-2xl font-semibold text-[var(--text-primary)]">
        My Skills
      </h2>
      <div class="mb-8 flex flex-wrap justify-center gap-8 sm:justify-start">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="flex flex-col items-center gap-3"
        >
          <div
            class="flex h-14 w-14 items-center justify-center rounded-xl text-2xl transition transform hover:scale-110"
            :style="{ background: skill.color + '22', color: skill.color }"
          >
            <i :class="['fa-fw', skill.iconClass]" aria-hidden="true"></i>
          </div>
          <span class="text-sm font-medium text-[var(--text-secondary)]">{{ skill.name }}</span>
        </div>
      </div>
      <NuxtLink
        to="/#portfolio"
        class="inline-flex w-fit items-center gap-1.5 rounded-lg border border-[var(--border)] bg-white/5 px-5 py-2.5 text-[15px] font-medium text-[var(--text-secondary)] no-underline transition hover:bg-white/10 hover:text-[var(--text-primary)]"
      >
        View More
        <span aria-hidden="true">&rsaquo;</span>
      </NuxtLink>
    </div>
  </section>
</template>
