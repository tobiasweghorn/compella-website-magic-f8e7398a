
import { sharedTranslations } from './shared';
import { homeTranslations } from './home';
import { contactTranslations } from './contact';
import { leadershipTranslations } from './leadership';
import { faqTranslations } from './faq';
import { testimonialTranslations } from './testimonials';

export const translations = {
  en: {
    ...sharedTranslations.en,
    ...homeTranslations.en,
    ...contactTranslations.en,
    ...leadershipTranslations.en,
    ...faqTranslations.en,
  },
  de: {
    ...sharedTranslations.de,
    ...homeTranslations.de,
    ...contactTranslations.de,
    ...leadershipTranslations.de,
    ...faqTranslations.de,
  }
};

export { testimonialTranslations };
