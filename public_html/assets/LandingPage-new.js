// Auto-generated - Home content now from PHP/MySQL API

// Config loading from PHP API instead of localStorage
async function loadConfigFromAPI() {
  try {
    const response = await fetch('/api/home/get.php');
    if (!response.ok) throw new Error('Network response was not ok');
    const result = await response.json();
    if (result.success && result.data) {
      return result.data;
    }
    return null;
  } catch (error) {
    console.warn('[config] Failed to load from API:', error);
    return null;
  }
}

// Save config to PHP API instead of localStorage
async function saveConfigToAPI(cfg, actor) {
  try {
    const response = await fetch('/api/home/save.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': getCSRFToken()
      },
      body: JSON.stringify(cfg)
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Network error');
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('[config] Failed to save to API:', error);
    throw error;
  }
}

// Get CSRF token
function getCSRFToken() {
  // Try to get from meta tag
  const meta = document.querySelector('meta[name="csrf-token"]');
  if (meta && meta.getAttribute('content')) {
    return meta.getAttribute('content');
  }
  // Try from cookie
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith('csrf_token=')) {
      return cookie.substring('csrf_token='.length, cookie.length);
    }
  }
  return '';
}

// Load config with fallback to defaults
async function loadConfig() {
  const data = await loadConfigFromAPI();
  if (data) {
    return data;
  }
  // Fallback to defaults if API fails
  return {
    heroSection: {
      taglineEn: 'Dr. Arman Kabir\'s Care',
      taglineBn: 'ডা. আরমান কবিরের চেম্বার',
      subheadingEn: 'Advanced Healthcare With a Human Touch',
      subheadingBn: 'মানবিক স্পর্শে উন্নত স্বাস্থ্যসেবা',
      heroTaglineEn: 'Healing with Trust and Compassion',
      heroTaglineBn: 'বিশ্বাস ও সহানুভূতির সাথে নিরাময়',
      heroDescriptionEn: 'Expert diagnosis, compassionate treatment, and trusted care for every stage of life.',
      heroDescriptionBn: 'জীবনের প্রতিটি পর্যায়ে বিশেষজ্ঞ রোগ নির্ণয়, সহানুভূতিশীল চিকিৎসা ও বিশ্বস্ত সেবা।',
      cta1Label: 'Book Appointment',
      cta2Label: 'Emergency'
    },
    aboutSection: {
      visible: true,
      clinicNameEn: 'Dr. Arman Kabir\'s Care',
      clinicNameBn: 'ডা. আরমান কবিরের চেম্বার',
      descriptionEn: 'Comprehensive patient management and medical education serving patients and students across Bangladesh.',
      descriptionBn: 'বাংলাদেশ জুড়ে রোগী ও শিক্ষার্থীদের জন্য পূর্ণাঙ্গ রোগী ব্যবস্থাপনা ও চিকিৎসা শিক্ষা।',
      yearsExperience: 10,
      patientCount: '500+',
      doctorCount: 2,
      specialties: ['Internal Medicine', 'Respiratory Medicine', 'Diabetes & Endocrinology', 'General Practice'],
      affiliations: ['BSMMU', 'DMCH', 'Dhaka Medical College', 'National Institute of Diseases of Chest & Hospital']
    },
    footerSection: {
      addressEn: 'Dhaka, Bangladesh',
      addressBn: 'ঢাকা, Bangladesh',
      phone: '+880-1751-959262',
      email: 'dr.armankabir011@gmail.com',
      openingHours: 'Sat--Thu: 9 AM – 8 PM',
      copyrightText: 'Dr. Arman Kabir\'s Care. All rights reserved.',
      socialLinks: []
    },
    emergencyContacts: [
      {
        doctorName: 'Dr. Arman Kabir',
        whatsappNumber: '8801751959262',
        prefilledMessage: 'Hello Dr. Arman, I need an emergency consultation.'
      },
      {
        doctorName: 'Dr. Samia Shikder',
        whatsappNumber: '8801751959262',
        prefilledMessage: 'Hello Dr. Samia, I need an emergency consultation.'
      }
    ]
  };
}

// Save config - now uses PHP API
async function saveConfig(cfg, actor) {
  try {
    const result = await saveConfigToAPI(cfg, actor);
    // Optionally show success message
    if (result && result.success) {
      // Could show a toast/success notification
      console.log('[config] Home content saved successfully via API');
    }
    return result;
  } catch (error) {
    console.error('[config] Save failed:', error);
    throw error;
  }
}

function deepMerge(base, overrides) {
  const result = { ...base };
  for (const key of Object.keys(overrides)) {
    const val = overrides[key];
    if (Array.isArray(val)) {
      result[key] = val;
    } else if (val !== null && val !== void 0 && typeof val === "object" && typeof result[key] === "object" && result[key] !== null && !Array.isArray(result[key])) {
      result[key] = deepMerge(
        result[key],
        val
      );
    } else if (val !== void 0) {
      result[key] = val;
    }
  }
  return result;
}

// ... rest of the file remains the same
