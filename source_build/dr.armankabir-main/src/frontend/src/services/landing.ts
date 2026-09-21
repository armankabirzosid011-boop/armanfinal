/**
 * Landing Page Service
 *
 * Operations for the public-facing landing page content.
 * All data is persisted in MySQL via the PHP API.
 */

import { get, post } from '../lib/apiClient';

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface EmergencyContact {
  doctorName: string;
  whatsappNumber: string;
  prefilledMessage: string;
}

export interface HeroSection {
  taglineEn: string;
  taglineBn: string;
  subheadingEn: string;
  subheadingBn: string;
  heroTaglineEn?: string;
  heroTaglineBn?: string;
  heroDescriptionEn?: string;
  heroDescriptionBn?: string;
  cta1Label: string;
  cta2Label: string;
}

export interface AboutSection {
  visible: boolean;
  clinicNameEn: string;
  clinicNameBn: string;
  descriptionEn: string;
  descriptionBn: string;
  yearsExperience: number;
  patientCount: string;
  doctorCount: number;
  specialties: string[];
  affiliations: string[];
}

export interface FooterSection {
  addressEn: string;
  addressBn: string;
  phone: string;
  email: string;
  openingHours: string;
  copyrightText: string;
  socialLinks: SocialLink[];
}

export interface SiteConfig {
  heroSection: HeroSection;
  aboutSection: AboutSection;
  footerSection: FooterSection;
  emergencyContacts: EmergencyContact[];
}

export const landingService = {
  /** Load front page content from server */
  async loadContent(): Promise<Record<string, unknown> | null> {
    try {
      return await get<Record<string, unknown>>('/frontpage/get.php');
    } catch {
      return null;
    }
  },

  /** Save front page content to server */
  async saveContent(data: Record<string, unknown>): Promise<boolean> {
    try {
      await post('/frontpage/save.php', data);
      return true;
    } catch {
      return false;
    }
  },

  /** Get site configuration from frontpage content */
  async getSiteConfig(): Promise<SiteConfig | null> {
    try {
      const result = await get<{ siteConfig?: SiteConfig }>('/frontpage/get.php', { key: 'siteConfig' });
      return result?.siteConfig ?? null;
    } catch {
      return null;
    }
  },

  /** Update site configuration via frontpage save */
  async updateSiteConfig(config: Partial<SiteConfig>): Promise<void> {
    await post('/frontpage/save.php', { siteConfig: config });
  },
};
