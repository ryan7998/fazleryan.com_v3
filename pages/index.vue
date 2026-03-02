<template>
  <div>
    <TheHero />
    <!-- Content section: wave flows into this; cards float in grid -->
    <section class="relative px-6 pb-24 pt-12 md:pt-16" style="background: var(--bg-primary);">
      <div class="mx-auto w-full min-w-0 max-w-[1200px] grid grid-cols-1 gap-8 md:grid-cols-2">
        <AboutSection />
        <SkillsSection />
      </div>
    </section>
  </div>
</template>
