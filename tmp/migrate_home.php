<?php
$mysqli = new mysqli("127.0.0.1", "drarmank_drarmank_care_user", "zosid01197247219", "drarmank_drarmank_care");

$now = date("Y-m-d H:i:s");

// Hero section settings
$heroKeys = [
    "heroTaglineEn" => "Healing with Trust and Compassion",
    "heroTaglineBn" => "বিশ্বাস ও সহানুভূতির সাথে নিরাময়",
    "heroDescriptionEn" => "Expert diagnosis, compassionate treatment, and trusted care for every stage of life.",
    "heroDescriptionBn" => "জীবনের প্রতিটি পর্যায়ে বিশেষজ্ঞ রোগ নির্ণয়, সহানুভূতিশীল চিকিৎসা ও বিশ্বস্ত সেবা।",
    "heroCta1Label" => "Book Appointment",
    "heroCta2Label" => "Emergency",
];

// About section settings
$aboutKeys = [
    "aboutClinicNameEn" => "Dr. Arman Kabir Care",
    "aboutClinicNameBn" => "ডা. আরমান কবিরের চেম্বার",
    "aboutDescriptionEn" => "Comprehensive patient management and medical education serving patients and students across Bangladesh.",
    "aboutDescriptionBn" => "বাংলাদেশ জুড়ে রোগী ও শিক্ষার্থীদের জন্য পূর্ণাঙ্গ রোগী ব্যবস্থাপনা ও চিকিৎসা শিক্ষা।",
    "aboutYearsExperience" => 10,
    "aboutPatientCount" => "500+",
    "aboutDoctorCount" => 2,
    "aboutSpecialties" => json_encode(["Internal Medicine", "Respiratory Medicine", "Diabetes & Endocrinology", "General Practice"]),
    "aboutAffiliations" => json_encode(["BSMMU", "DMCH", "Dhaka Medical College", "National Institute of Diseases of Chest & Hospital"]),
];

// Footer section settings
$footerKeys = [
    "footerAddressEn" => "Dhaka, Bangladesh",
    "footerAddressBn" => "ঢাকা, Bangladesh",
    "footerPhone" => "+880-1751-959262",
    "footerEmail" => "dr.armankabir011@gmail.com",
    "footerOpeningHours" => "Sat--Thu: 9 AM - 8 PM",
    "footerCopyrightText" => "Dr. Arman Kabir Care. All rights reserved",
];

// Insert hero section
foreach ($heroKeys as $key => $value) {
    $jsonValue = is_numeric($value) ? $value : json_encode($value, JSON_UNESCAPED_UNICODE);
    $mysqli->query("INSERT INTO site_settings (setting_key, setting_value, setting_group, description, updated_at) 
        VALUES ('$key', '$jsonValue', 'home', 'Hero section content for landing page', '$now')
        ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value), updated_at = VALUES(updated_at)");
}

// Insert about section
foreach ($aboutKeys as $key => $value) {
    $jsonValue = is_numeric($value) ? $value : json_encode($value, JSON_UNESCAPED_UNICODE);
    $mysqli->query("INSERT INTO site_settings (setting_key, setting_value, setting_group, description, updated_at) 
        VALUES ('$key', '$jsonValue', 'home', 'About section content for landing page', '$now')
        ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value), updated_at = VALUES(updated_at)");
}

// Insert footer section
foreach ($footerKeys as $key => $value) {
    $jsonValue = is_numeric($value) ? $value : json_encode($value, JSON_UNESCAPED_UNICODE);
    $mysqli->query("INSERT INTO site_settings (setting_key, setting_value, setting_group, description, updated_at) 
        VALUES ('$key', '$jsonValue', 'home', 'Footer section content for landing page', '$now')
        ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value), updated_at = VALUES(updated_at)");
}

// Also add the 'visible' flag for about section
$mysqli->query("INSERT INTO site_settings (setting_key, setting_value, setting_group, description, updated_at) 
    VALUES ('aboutVisible', '1', 'home', 'About section visibility', '$now')
    ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value), updated_at = VALUES(updated_at)");

echo "Home settings migrated successfully!\n";

$mysqli->close();