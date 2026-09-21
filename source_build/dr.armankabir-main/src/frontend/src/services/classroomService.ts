import { apiClient, ApiResponse, PaginatedData } from './lib/apiClient';

// Base paths
const CLASSROOM_API = '/api/classroom';

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data: T;
  errors?: Record<string, string[]>;
  timestamp?: string;
}

// Student Services

export interface StudentSignupData {
  name: string;
  email: string;
  password: string;
  student_id: string;
}

export interface StudentLoginData {
  email: string;
  password: string;
}

export interface StudentSignupResponse {
  user_id: number;
  email: string;
  full_name: string;
  student_id: string;
  role: string;
  status: 'pending';
}

export interface StudentLoginResponse {
  token: string;
  user: {
    id: number;
    email: string;
    full_name: string;
    name_bn?: string;
    role: string;
    student_id: string;
    photo_url?: string;
  };
  student_status: 'pending' | 'approved' | 'rejected' | 'suspended';
  dashboard: {
    recent_progress: any[];
    enrolled_courses: any[];
  };
}

// Course Services

export interface CourseFilters {
  category?: string;
  difficulty?: string;
  status?: string;
  search?: string;
  page?: number;
  limit?: number;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  description_bn?: string;
  category?: string;
  difficulty: CourseDifficulty;
  thumbnail_url?: string;
  instructor_id: number;
  status: CourseStatus;
  estimated_duration?: string;
  total_lessons: number;
  enrolled_count: number;
  view_count: number;
  meta_title?: string;
  meta_description?: string;
  created_at: string;
  updated_at: string;
}

export interface CourseWithLessons extends Course {
  lessons: Lesson[];
}

export enum CourseDifficulty {
  Beginner = 'beginner',
  Intermediate = 'intermediate',
  Advanced = 'advanced',
}

export enum CourseStatus {
  Draft = 'draft',
  Published = 'published',
  Archived = 'archived',
}

export function listCourses(filters?: CourseFilters): Promise<ApiResponse<PaginatedData<Course>>> {
  const params: Record<string, string | number | undefined> = {};

  if (filters) {
    if (filters.category) params.category = filters.category;
    if (filters.difficulty) params.difficulty = filters.difficulty;
    if (filters.status) params.status = filters.status;
    if (filters.search) params.search = filters.search;
    if (filters.page) params.page = filters.page;
    if (filters.limit) params.limit = filters.limit;
  }

  return apiClient.get<PaginatedData<Course>>(`${CLASSROOM_API}/courses`, params);
}

export function getCourse(id: number): Promise<ApiResponse<CourseWithLessons>> {
  return apiClient.get<CourseWithLessons>(`${CLASSROOM_API}/courses/${id}`, { id: id.toString() });
}

export function createCourse(courseData: {
  title: string;
  description: string;
  description_bn?: string;
  category?: string;
  difficulty?: CourseDifficulty;
  thumbnail?: File;
  instructor_id: number;
  status?: CourseStatus;
  estimated_duration?: string;
}): Promise<ApiResponse<Course>> {
  const formData = new FormData();
  formData.append('title', courseData.title);
  formData.append('description', courseData.description);
  if (courseData.description_bn) {
    formData.append('description_bn', courseData.description_bn);
  }
  if (courseData.category) {
    formData.append('category', courseData.category);
  }
  if (courseData.difficulty) {
    formData.append('difficulty', courseData.difficulty);
  }
  if (courseData.thumbnail) {
    formData.append('thumbnail', courseData.thumbnail);
  }
  formData.append('instructor_id', courseData.instructor_id.toString());
  if (courseData.status) {
    formData.append('status', courseData.status);
  }
  if (courseData.estimated_duration) {
    formData.append('estimated_duration', courseData.estimated_duration);
  }

  return apiClient.upload<Course>(`${CLASSROOM_API}/courses`, formData);
}

export function updateCourse(id: number, courseData: Partial<Course>): Promise<ApiResponse<Course>> {
  return apiClient.put<Course>(`${CLASSROOM_API}/courses/${id}`, courseData);
}

export function deleteCourse(id: number): Promise<ApiResponse<void>> {
  return apiClient.del<void>(`${CLASSROOM_API}/courses/${id}`);
}

// Lesson Services

export function listLessons(courseId: number): Promise<ApiResponse<Lesson[]>> {
  return apiClient.get<Lesson[]>(`${CLASSROOM_API}/lessons`, { course_id: courseId.toString() });
}

export function getLesson(id: number): Promise<ApiResponse<Lesson>> {
  return apiClient.get<Lesson>(`${CLASSROOM_API}/lessons/${id}`, { id: id.toString() });
}

export function createLesson(lessonData: {
  course_id: number;
  module_id?: number;
  title: string;
  content?: string;
  content_bn?: string;
  video_url?: string;
  order_index: number;
  is_published: LessonStatus;
  is_free_preview?: boolean;
}): Promise<ApiResponse<Lesson>> {
  return apiClient.post<Lesson>(`${CLASSROOM_API}/lessons`, lessonData);
}

export function updateLesson(id: number, lessonData: Partial<Lesson>): Promise<ApiResponse<Lesson>> {
  return apiClient.put<Lesson>(`${CLASSROOM_API}/lessons/${id}`, lessonData);
}

export function deleteLesson(id: number): Promise<ApiResponse<void>> {
  return apiClient.del<void>(`${CLASSROOM_API}/lessons/${id}`);
}

// Progress Services

export interface LessonProgress {
  enrollment_id: number;
  lesson_id: number;
  completed: boolean;
  progress_percentage: number;
}

export function getStudentProgress(studentId: number): Promise<ApiResponse<LessonProgress[]>> {
  return apiClient.get<LessonProgress[]>(`${CLASSROOM_API}/progress`, { student_id: studentId.toString() });
}

export function updateLessonProgress(progress: LessonProgress): Promise<ApiResponse<LessonProgress>> {
  return apiClient.post<LessonProgress>(`${CLASSROOM_API}/progress`, progress);
}

// Quiz Services

export interface Quiz {
  id: number;
  course_id: number;
  lesson_id?: number;
  title: string;
  description?: string;
  passing_score: number;
  time_limit?: number;
  attempts_allowed: number;
  shuffle_questions: boolean;
  show_explanations: boolean;
  is_published: QuizStatus;
}

export interface QuizQuestionApi {
  id: number;
  question_text: string;
  question_text_bn?: string;
  points: number;
  explanation?: string;
  explanation_bn?: string;
}

export interface QuizOptionApi {
  id: number;
  option_text: string;
  option_text_bn?: string;
  is_correct: boolean;
  order_index: number;
}

export function getQuiz(id: number): Promise<ApiResponse<{ quiz: Quiz; questions: QuizQuestionApi[]; options: QuizOptionApi[] }>> {
  return apiClient.get<{ quiz: Quiz; questions: QuizQuestionApi[]; options: QuizOptionApi[] }>(
    `${CLASSROOM_API}/quizzes/${id}`,
    { id: id.toString() }
  );
}

export function submitQuizAttempt(attemptData: {
  quiz_id: number;
  answers: Record<number, number>; // question_id => selected_option_id
  time_taken_seconds: number;
}): Promise<ApiResponse<{
  attempt_id: number;
  score: number;
  percentage: number;
  passed: boolean;
  total_possible: number;
}>> {
  return apiClient.post<{ attempt_id: number; score: number; percentage: number; passed: boolean; total_possible: number }>(
    `${CLASSROOM_API}/quizzes/${attemptData.quiz_id}/submit`,
    {
      answers: attemptData.answers,
      time_taken_seconds: attemptData.time_taken_seconds,
    }
  );
}

// Announcement Services

export interface Announcement {
  id: number;
  course_id?: number;
  title: string;
  content: string;
  content_bn?: string;
  is_pinned: boolean;
  is_active: AnnouncementStatus;
  created_by: number;
  created_at: string;
}

export function listAnnouncements(courseId?: number): Promise<ApiResponse<Announcement[]>> {
  const params: Record<string, string | number | undefined> = {};
  if (courseId) {
    params.course_id = courseId.toString();
  }
  return apiClient.get<Announcement[]>(`${CLASSROOM_API}/announcements`, params);
}

export function createAnnouncement(announcementData: {
  course_id?: number;
  title: string;
  content: string;
  content_bn?: string;
  is_pinned?: boolean;
}): Promise<ApiResponse<Announcement>> {
  return apiClient.post<Announcement>(`${CLASSROOM_API}/announcements`, announcementData);
}

export function updateAnnouncement(id: number, announcementData: Partial<Announcement>): Promise<ApiResponse<Announcement>> {
  return apiClient.put<Announcement>(`${CLASSROOM_API}/announcements/${id}`, announcementData);
}

export function deleteAnnouncement(id: number): Promise<ApiResponse<void>> {
  return apiClient.del<void>(`${CLASSROOM_API}/announcements/${id}`);
}

// Student Dashboard

export interface StudentDashboardData {
  welcome_name: string;
  my_courses: CourseSummary[];
  courses_completed: number;
  lessons_completed: number;
  quiz_average: number;
  current_streak: number;
  overall_progress: number;
  continuing_course: CourseSummary;
  continuing_lesson: LessonSummary;
}

export interface CourseSummary {
  id: number;
  title: string;
  category?: string;
  difficulty: CourseDifficulty;
  thumbnail_url?: string;
  progress_percentage: number;
  enrolled_at: string;
  status: 'enrolled' | 'completed';
  lesson_count: number;
  completed_lesson_count: number;
}

export interface LessonSummary {
  course_title: string;
  lesson_title: string;
  order_index: number;
  is_completed: boolean;
}

export function getStudentDashboard(studentId: number): Promise<ApiResponse<StudentDashboardData>> {
  return apiClient.get<StudentDashboardData>(`${CLASSROOM_API}/dashboard`, { student_id: studentId.toString() });
}

// Enrollment Services

export function enrollCourse(studentId: number, courseId: number): Promise<ApiResponse<Enrollment>> {
  return apiClient.post<Enrollment>(`${CLASSROOM_API}/enrollments`, {
    student_id: studentId,
    course_id: courseId,
  });
}

export function getEnrollment(studentId: number, courseId: number): Promise<ApiResponse<Enrollment>> {
  return apiClient.get<Enrollment>(`${CLASSROOM_API}/enrollments`, {
    student_id: studentId,
    course_id: courseId,
  });
}