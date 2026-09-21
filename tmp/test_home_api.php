<?php
require "/home/drarmank/public_html/api/config.php";
require "/home/drarmank/public_html/api/database.php";
require "/home/drarmank/public_html/api/helpers.php";
require "/home/drarmank/public_html/api/response.php";

handleCors();
requireMethod("GET");

$db = Database::getInstance();

$stmt = $db->query("SELECT setting_key, setting_value, setting_group, updated_at FROM site_settings 
    WHERE setting_key IN (
        'heroTaglineEn', 'heroTaglineBn', 'heroDescriptionEn', 'heroDescriptionBn',
        'heroCta1Label', 'heroCta2Label',
        'aboutClinicNameEn', 'aboutClinicNameBn', 'aboutDescriptionEn', 'aboutDescriptionBn',
        'aboutYearsExperience', 'aboutPatientCount', 'aboutDoctorCount',
        'footerAddressEn', 'footerAddressBn', 'footerPhone', 'footerEmail', 'footerOpeningHours',
        'footerCopyrightText'
    ) ORDER BY setting_key");
$settings = $stmt->fetchAll();

$data = [];
foreach ($settings as $s) {
    $key = $s['setting_key'];
    $value = $s['setting_value'];
    
    // Decode JSON if it's stored as JSON string
    if (is_string($value)) {
        $decoded = json_decode($value, true);
        if (json_last_error() !== JSON_ERROR_NONE) {
            $value = $decoded;
        }
    }
    
    // Store by category
    if (str_starts_with($key, 'hero')) {
        if (!isset($data['heroSection'])) $data['heroSection'] = [];
        $data['heroSection'][$key] = $value;
    } elseif (str_starts_with($key, 'about')) {
        if (!isset($data['aboutSection'])) $data['aboutSection'] = [];
        $data['aboutSection'][$key] = $value;
    } elseif (str_starts_with($key, 'footer')) {
        if (!isset($data['footerSection'])) $data['footerSection'] = [];
        $data['footerSection'][$key] = $value;
    }
}

$data['heroSection'] = $data['heroSection'] ?? [];
$data['aboutSection'] = $data['aboutSection'] ?? [];
$data['footerSection'] = $data['footerSection'] ?? [];

$data['heroSection'] = array_merge([
    'taglineEn' => 'Dr. Arman Kabirs Care',
    'taglineBn' => 'ডা. আরমান কবিরের চেম্বার',
    'subheadingEn' => 'Advanced Healthcare With a Human Touch',
    'subheadingBn' => 'মানবিক স্পর্শে উন্নত স্বাস্থ্যসেবা',
    'heroTaglineEn' => 'Healing with Trust and Compassion',
    'heroTaglineBn' => 'বিশ্বাস ও সহানুভূতির সাথে নিরাময়',
    'heroDescriptionEn' => 'Expert diagnosis, compassionate treatment, and trusted care for every stage of life.',
    'heroDescriptionBn' => 'জীবনের প্রতিটি পর্যায়ে বিশেষজ্ঞ রোগ নির্ণয়, সহানুভূতিশীল চিকিৎসা ও বিশ্বস্ত সেবা।',
    'cta1Label' => 'Book Appointment',
    'cta2Label' => 'Emergency',
], $data['heroSection']);

$data['aboutSection'] = array_merge([
    'visible' => true,
    'clinicNameEn' => 'Dr. Arman Kabirs Care',
    'clinicNameBn' => 'ডা. আরমান কবিরের চেম্বার',
    'descriptionEn' => 'Comprehensive patient management and medical education serving patients and students across Bangladesh.',
    'descriptionBn' => 'বাংলাদেশ জুড়ে রোগী ও শিক্ষার্থীদের জন্য পূর্ণাঙ্গ রোগী ব্যবস্থাপনা ও চিকিৎসা শিক্ষা।',
    'yearsExperience' => 10,
    'patientCount' => '500+',
    'doctorCount' => 2,
    'specialties' => ['Internal Medicine', 'Respiratory Medicine', 'Diabetes & Endocrinology', 'General Practice'],
    'affiliations' => ['BSMMU', 'DMCH', 'Dhaka Medical College', 'National Institute of Diseases of Chest & Hospital']
], $data['aboutSection']);

$data['footerSection'] = array_merge([
    'addressEn' => 'Dhaka, Bangladesh',
    'addressBn' => 'ঢাকা, Bangladesh',
    'phone' => '+880-1751-959262',
    'email' => 'dr.armankabir011@gmail.com',
    'openingHours' => 'Sat--Thu: 9 AM - 8 PM',
    'copyrightText' => 'Dr. Arman Kabir Care. All rights reserved.',
    'socialLinks' => []
], $data['footerSection']);

successResponse($data);