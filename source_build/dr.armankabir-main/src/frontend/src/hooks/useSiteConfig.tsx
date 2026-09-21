/**
 * Site Config Hook — PHP/MySQL Backend
 *
 * Site configuration is stored server-side via the PHP API.
 * No localStorage used — config is fetched via React Query hooks.
 * Managed via landingService on the server.
 */

import { useCallback } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { landingService } from "../services/landing";
import type { SiteConfig, HeroSection, AboutSection, FooterSection, EmergencyContact } from "../services/landing";
export const DEFAULT_SITE_CONFIG: SiteConfig = {
  heroSection: {
    taglineEn: "Dr. Arman Kabir's Care",
    taglineBn: "ডা. আরমান কবিরের চেম্বার",
    subheadingEn: "Advanced Healthcare With a Human Touch",
    subheadingBn: "মানবিক স্পর্শে উন্নত স্বাস্থ্যসেবা",
    heroTaglineEn: "Healing with Trust and Compassion",
    heroTaglineBn: "বিশ্বাস ও সহানুভূতির সাথে নিরাময়",
    heroDescriptionEn:
      "Expert diagnosis, compassionate treatment, and trusted care for every stage of life.",
    heroDescriptionBn:
      "জীবনের প্রতিটি পর্যায়ে বিশেষজ্ঞ রোগ নির্ণয়, সহানুভূতিশীল চিকিৎসা ও বিশ্বস্ত সেবা।",
    cta1Label: "Book Appointment",
    cta2Label: "Emergency",
  },
  aboutSection: {
    visible: true,
    clinicNameEn: "Dr. Arman Kabir's Care",
    clinicNameBn: "ডা. আরমান কবিরের চেম্বার",
    descriptionEn:
      "Comprehensive patient management and medical education serving patients and students across Bangladesh.",
    descriptionBn:
      "বাংলাদেশ জুড়ে রোগী ও শিক্ষার্থীদের জন্য পূর্ণাঙ্গ রোগী ব্যবস্থাপনা ও চিকিৎসা শিক্ষা।",
    yearsExperience: 10,
    patientCount: "500+",
    doctorCount: 2,
    specialties: [
      "Internal Medicine",
      "Respiratory Medicine",
      "Diabetes & Endocrinology",
      "General Practice",
    ],
    affiliations: [
      "BSMMU",
      "DMCH",
      "Dhaka Medical College",
      "National Institute of Diseases of Chest & Hospital",
    ],
  },
  footerSection: {
    addressEn: "Dhaka, Bangladesh",
    addressBn: "ঢাকা, বাংলাদেশ",
    phone: "+880-1751-959262",
    email: "dr.armankabir011@gmail.com",
    openingHours: "Sat–Thu: 9 AM – 8 PM",
    copyrightText: "Dr. Arman Kabir's Care. All rights reserved.",
    socialLinks: [],
  },
  emergencyContacts: [
    {
      doctorName: "Dr. Arman Kabir",
      whatsappNumber: "8801751959262",
      prefilledMessage: "Hello Dr. Arman, I need an emergency consultation.",
    },
    {
      doctorName: "Dr. Samia Shikder",
      whatsappNumber: "880195721221",
      prefilledMessage: "Hello Dr. Samia, I need an emergency consultation.",
    },
  ],
};

export function useSiteConfig() {
  const queryClient = useQueryClient();

  const { data: config = DEFAULT_SITE_CONFIG, isLoading } = useQuery({
    queryKey: ["siteConfig"],
    queryFn: async () => {
      try {
        const result = await landingService.getSiteConfig();
        return result ?? DEFAULT_SITE_CONFIG;
      } catch {
        return DEFAULT_SITE_CONFIG;
      }
    },
  });

  const mutation = useMutation({
    mutationFn: async (updated: Partial<SiteConfig>) => {
      await landingService.updateSiteConfig(updated);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["siteConfig"] });
    },
  });

  const updateHero = useCallback(
    (hero: Partial<HeroSection>) => {
      mutation.mutate({ heroSection: { ...config.heroSection, ...hero } });
    },
    [mutation, config.heroSection],
  );

  const updateAbout = useCallback(
    (about: Partial<AboutSection>) => {
      mutation.mutate({ aboutSection: { ...config.aboutSection, ...about } });
    },
    [mutation, config.aboutSection],
  );

  const updateFooter = useCallback(
    (footer: Partial<FooterSection>) => {
      mutation.mutate({ footerSection: { ...config.footerSection, ...footer } });
    },
    [mutation, config.footerSection],
  );

  const updateEmergencyContacts = useCallback(
    (contacts: EmergencyContact[]) => {
      mutation.mutate({ emergencyContacts: contacts } as Partial<SiteConfig>);
    },
    [mutation],
  );

  const resetSection = useCallback(
    (section: keyof SiteConfig) => {
      mutation.mutate({ [section]: DEFAULT_SITE_CONFIG[section] } as Partial<SiteConfig>);
    },
    [mutation],
  );

  return {
    config,
    updateHero,
    updateAbout,
    updateFooter,
    updateEmergencyContacts,
    resetSection,
    isLoading,
  };
}
