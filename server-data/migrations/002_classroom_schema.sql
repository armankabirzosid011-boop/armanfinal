-- ============================================================================
-- 22. CLASSROOM / LMS MIGRATION
-- ============================================================================
-- Version: 2.1.0
-- ============================================================================

-- ============================================================================
-- students / users table (classroom-specific, extends existing users table
-- or creates separate classroom users)
-- ============================================================================

-- Classroom students table - linked to users table via id
CREATE TABLE classroom_students (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT UNSIGNED NOT NULL UNIQUE,
    student_id VARCHAR(50) NOT NULL UNIQUE,
    full_name VARCHAR(255) NOT NULL,
    name_bn VARCHAR(255) DEFAULT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(50) DEFAULT NULL,
    date_of_birth DATE DEFAULT NULL,
    gender ENUM('male', 'female', 'other') NOT NULL DEFAULT 'male',
    address TEXT DEFAULT NULL,
    photo_url VARCHAR(500) DEFAULT NULL,
    emergency_contact_name VARCHAR(255) DEFAULT NULL,
    emergency_contact_phone VARCHAR(50) DEFAULT NULL,
    blood_group VARCHAR(10) DEFAULT NULL,
    status ENUM('pending', 'approved', 'rejected', 'suspended') NOT NULL DEFAULT 'pending',
    approval_date TIMESTAMP NULL DEFAULT NULL,
    rejected_at TIMESTAMP NULL DEFAULT NULL,
    suspended_at TIMESTAMP NULL DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_student_user (user_id),
    INDEX idx_student_email (email),
    INDEX idx_student_id (student_id),
    INDEX idx_student_status (status),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ============================================================================
-- courses table
-- ============================================================================

CREATE TABLE classroom_courses (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT DEFAULT NULL,
    description_bn TEXT DEFAULT NULL,
    category VARCHAR(100) DEFAULT NULL,
    difficulty ENUM('beginner', 'intermediate', 'advanced') DEFAULT 'beginner',
    thumbnail_url VARCHAR(500) DEFAULT NULL,
    instructor_id BIGINT UNSIGNED NOT NULL,
    status ENUM('draft', 'published', 'archived') NOT NULL DEFAULT 'draft',
    estimated_duration VARCHAR(100) DEFAULT NULL,
    total_lessons INT UNSIGNED NOT NULL DEFAULT 0,
    enrolled_count INT UNSIGNED NOT NULL DEFAULT 0,
    view_count INT UNSIGNED NOT NULL DEFAULT 0,
    meta_title VARCHAR(255) DEFAULT NULL,
    meta_description TEXT DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_courses_instructor (instructor_id),
    INDEX idx_courses_category (category),
    INDEX idx_courses_status (status),
    INDEX idx_courses_difficulty (difficulty),
    FULLTEXT idx_courses_search (title, description)
) ENGINE=InnoDB;

-- ============================================================================
-- course_modules table (organizing lessons into modules/sections)
-- ============================================================================

CREATE TABLE classroom_modules (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    course_id BIGINT UNSIGNED NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT DEFAULT NULL,
    order_index INT UNSIGNED NOT NULL DEFAULT 0,
    is_published TINYINT(1) NOT NULL DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_modules_course (course_id),
    INDEX idx_modules_order (course_id, order_index),
    FOREIGN KEY (course_id) REFERENCES classroom_courses(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ============================================================================
-- lessons table
-- ============================================================================

CREATE TABLE classroom_lessons (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    course_id BIGINT UNSIGNED NOT NULL,
    module_id BIGINT UNSIGNED DEFAULT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT DEFAULT NULL,
    content_bn TEXT DEFAULT NULL,
    video_url VARCHAR(500) DEFAULT NULL,
    video_thumbnail_url VARCHAR(500) DEFAULT NULL,
    order_index INT UNSIGNED NOT NULL DEFAULT 0,
    is_published TINYINT(1) NOT NULL DEFAULT 1,
    is_free_preview TINYINT(1) NOT NULL DEFAULT 0,
    estimated_duration VARCHAR(50) DEFAULT NULL,
    resources_json JSON DEFAULT NULL COMMENT 'JSON array of resource IDs',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_lessons_course (course_id),
    INDEX idx_lessons_module (module_id),
    INDEX idx_lessons_order (course_id, order_index),
    FOREIGN KEY (course_id) REFERENCES classroom_courses(id) ON DELETE CASCADE,
    FOREIGN KEY (module_id) REFERENCES classroom_modules(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ============================================================================
-- lesson_resources table
-- ============================================================================

CREATE TABLE classroom_resources (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    lesson_id BIGINT UNSIGNED DEFAULT NULL,
    course_id BIGINT UNSIGNED DEFAULT NULL,
    filename VARCHAR(500) NOT NULL,
    original_name VARCHAR(500) NOT NULL,
    path VARCHAR(500) NOT NULL,
    mime_type VARCHAR(100) NOT NULL,
    size_bytes BIGINT UNSIGNED NOT NULL,
    uploaded_by BIGINT UNSIGNED NOT NULL,
    upload_type ENUM('pdf', 'image', 'document', 'video', 'link') NOT NULL DEFAULT 'pdf',
    title VARCHAR(255) DEFAULT NULL,
    description TEXT DEFAULT NULL,
    download_count INT UNSIGNED NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_resources_lesson (lesson_id),
    INDEX idx_resources_course (course_id),
    INDEX idx_resources_uploaded_by (uploaded_by),
    FOREIGN KEY (lesson_id) REFERENCES classroom_lessons(id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES classroom_courses(id) ON DELETE SET NULL,
    FOREIGN KEY (uploaded_by) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ============================================================================
-- enrollments table
-- ============================================================================

CREATE TABLE classroom_enrollments (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    student_id BIGINT UNSIGNED NOT NULL,
    course_id BIGINT UNSIGNED NOT NULL,
    enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP NULL DEFAULT NULL,
    progress_percentage DECIMAL(5,2) NOT NULL DEFAULT 0.00,
    status ENUM('enrolled', 'completed', 'dropped') NOT NULL DEFAULT 'enrolled',
    last_accessed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uk_enrollment_student_course (student_id, course_id),
    INDEX idx_enrollments_student (student_id),
    INDEX idx_enrollments_course (course_id),
    FOREIGN KEY (student_id) REFERENCES classroom_students(id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES classroom_courses(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ============================================================================
-- lesson_progress table
-- ============================================================================

CREATE TABLE classroom_lesson_progress (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    enrollment_id BIGINT UNSIGNED NOT NULL,
    lesson_id BIGINT UNSIGNED NOT NULL,
    completed TINYINT(1) NOT NULL DEFAULT 0,
    progress_percentage DECIMAL(5,2) NOT NULL DEFAULT 0.00,
    last_accessed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    completed_at TIMESTAMP NULL DEFAULT NULL,
    UNIQUE KEY uk_progress_enrollment_lesson (enrollment_id, lesson_id),
    INDEX idx_progress_enrollment (enrollment_id),
    INDEX idx_progress_lesson (lesson_id),
    FOREIGN KEY (enrollment_id) REFERENCES classroom_enrollments(id) ON DELETE CASCADE,
    FOREIGN KEY (lesson_id) REFERENCES classroom_lessons(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ============================================================================
-- quizzes table
-- ============================================================================

CREATE TABLE classroom_quizzes (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    course_id BIGINT UNSIGNED NOT NULL,
    lesson_id BIGINT UNSIGNED DEFAULT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT DEFAULT NULL,
    passing_score DECIMAL(5,2) NOT NULL DEFAULT 80.00,
    time_limit INT UNSIGNED DEFAULT NULL COMMENT 'minutes,
 NULL = unlimited',
    attempts_allowed TINYINT UNSIGNED NOT NULL DEFAULT 1,
    shuffle_questions TINYINT(1) NOT NULL DEFAULT 1,
    show_explanations TINYINT(1) NOT NULL DEFAULT 1,
    is_published TINYINT(1) NOT NULL DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_quizzes_course (course_id),
    INDEX idx_quizzes_lesson (lesson_id),
    INDEX idx_quizzes_published (is_published)
) ENGINE=InnoDB;

-- ============================================================================
-- quiz_questions table
-- ============================================================================

CREATE TABLE classroom_quiz_questions (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    quiz_id BIGINT UNSIGNED NOT NULL,
    question_text TEXT NOT NULL,
    question_text_bn TEXT DEFAULT NULL,
    order_index INT UNSIGNED NOT NULL DEFAULT 0,
    points INT UNSIGNED NOT NULL DEFAULT 1,
    explanation TEXT DEFAULT NULL,
    explanation_bn TEXT DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_questions_quiz (quiz_id),
    INDEX idx_questions_order (quiz_id, order_index),
    FOREIGN KEY (quiz_id) REFERENCES classroom_quizzes(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ============================================================================
-- quiz_options table
-- ============================================================================

CREATE TABLE classroom_quiz_options (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    question_id BIGINT UNSIGNED NOT NULL,
    option_text TEXT NOT NULL,
    option_text_bn TEXT DEFAULT NULL,
    is_correct TINYINT(1) NOT NULL DEFAULT 0,
    order_index INT UNSIGNED NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_options_question (question_id),
    INDEX idx_options_order (question_id, order_index),
    FOREIGN KEY (question_id) REFERENCES classroom_quiz_questions(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ============================================================================
-- quiz_attempts table
-- ============================================================================

CREATE TABLE classroom_quiz_attempts (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    student_id BIGINT UNSIGNED NOT NULL,
    quiz_id BIGINT UNSIGNED NOT NULL,
    score DECIMAL(5,2) NOT NULL DEFAULT 0.00,
    percentage DECIMAL(5,2) NOT NULL DEFAULT 0.00,
    passed TINYINT(1) NOT NULL DEFAULT 0,
    started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    submitted_at TIMESTAMP NULL DEFAULT NULL,
    time_taken_seconds INT UNSIGNED DEFAULT NULL,
    ip_address VARCHAR(45) DEFAULT NULL,
    user_agent TEXT DEFAULT NULL,
    INDEX idx_attempts_student (student_id),
    INDEX idx_attempts_quiz (quiz_id),
    INDEX idx_attempts_submitted (submitted_at),
    FOREIGN KEY (student_id) REFERENCES classroom_students(id) ON DELETE CASCADE,
    FOREIGN KEY (quiz_id) REFERENCES classroom_quizzes(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ============================================================================
-- quiz_student_answers table
-- ============================================================================

CREATE TABLE classroom_quiz_student_answers (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    attempt_id BIGINT UNSIGNED NOT NULL,
    question_id BIGINT UNSIGNED NOT NULL,
    selected_option_id BIGINT UNSIGNED DEFAULT NULL,
    is_correct TINYINT(1) NOT NULL DEFAULT 0,
    answered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uk_answer_attempt_question (attempt_id, question_id),
    INDEX idx_answers_attempt (attempt_id),
    INDEX idx_answers_question (question_id),
    FOREIGN KEY (attempt_id) REFERENCES classroom_quiz_attempts(id) ON DELETE CASCADE,
    FOREIGN KEY (question_id) REFERENCES classroom_quiz_questions(id) ON DELETE CASCADE,
    FOREIGN KEY (selected_option_id) REFERENCES classroom_quiz_options(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ============================================================================
-- announcements table
-- ============================================================================

CREATE TABLE classroom_announcements (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    course_id BIGINT UNSIGNED DEFAULT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    content_bn TEXT DEFAULT NULL,
    is_pinned TINYINT(1) NOT NULL DEFAULT 0,
    is_active TINYINT(1) NOT NULL DEFAULT 1,
    created_by BIGINT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_announcements_course (course_id),
    INDEX idx_announcements_created_by (created_by),
    INDEX idx_announcements_pinned_active (is_pinned, is_active),
    FOREIGN KEY (course_id) REFERENCES classroom_courses(id) ON DELETE SET NULL,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ============================================================================
-- Index summary
-- ============================================================================

-- Tables: 31 new tables (classroom_students, classroom_courses, classroom_modules,
--          classroom_lessons, classroom_resources, classroom_enrollments,
--          classroom_lesson_progress, classroom_quizzes, classroom_quiz_questions,
--          classroom_quiz_options, classroom_quiz_attempts,
--          classroom_quiz_student_answers, classroom_announcements)
-- Foreign Keys: 20+
-- Indexes: 50+
-- ============================================================================