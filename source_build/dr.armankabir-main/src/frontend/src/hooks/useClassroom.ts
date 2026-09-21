import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { classroomService, Course, CourseDifficulty, CourseStatus, Lesson, LessonStatus, Quiz, QuizAttempt, Announcement, StudentDashboardData, CourseSummary, LessonSummary, StudentStatus } from '../services/classroomService';
import type { ClassroomStudent } from '../types';

// ─── Courses ───────────────────────────────────────────────────────────────

export function useListCourses(filters?: { category?: string; difficulty?: string; status?: string; search?: string; page?: number; limit?: number }) {
  return useQuery<{ courses: Course[]; pagination: { page: number; limit: number; total: number; total_pages: number; has_more: boolean } }>({
    queryKey: ['courses', filters],
    queryFn: () => classroomService.listCourses(filters).then(r => r.data),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function useGetCourse(id: number) {
  return useQuery<{ course: CourseWithLessons }>({
    queryKey: ['course', id],
    queryFn: () => classroomService.getCourse(id).then(r => r.data),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCreateCourse() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (courseData: {
      title: string;
      description: string;
      description_bn?: string;
      category?: string;
      difficulty?: CourseDifficulty;
      thumbnail?: File;
      instructor_id: number;
      status?: CourseStatus;
      estimated_duration?: string;
    }) => classroomService.createCourse(courseData),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['courses'] }),
    onError: (error) => {
      console.error('Course creation error:', error);
    },
  });
}

export function useUpdateCourse() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<Course> }) => classroomService.updateCourse(id, data),
    onSuccess: (_, variables) => qc.invalidateQueries({ queryKey: ['course', variables.id] }),
    onError: (error) => {
      console.error('Course update error:', error);
    },
  });
}

export function useDeleteCourse() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => classroomService.deleteCourse(id),
    onSuccess: (_, variables) => qc.invalidateQueries({ queryKey: ['courses'] }),
    onError: (error) => {
      console.error('Course deletion error:', error);
    },
  });
}

// ─── Lessons ───────────────────────────────────────────────────────────────

export function useListLessons(courseId: number) {
  return useQuery<{ lessons: Lesson[] }>({
    queryKey: ['lessons', courseId],
    queryFn: () => classroomService.listLessons(courseId).then(r => r.data),
    enabled: !!courseId,
    staleTime: 1000 * 60 * 5,
  });
}

export function useGetLesson(id: number) {
  return useQuery<{ lesson: Lesson }>({
    queryKey: ['lesson', id],
    queryFn: () => classroomService.getLesson(id).then(r => r.data),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCreateLesson() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (lessonData: {
      course_id: number;
      module_id?: number;
      title: string;
      content?: string;
      content_bn?: string;
      video_url?: string;
      order_index: number;
      is_published: LessonStatus;
      is_free_preview?: boolean;
    }) => classroomService.createLesson(lessonData),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['lessons'] }),
    onError: (error) => {
      console.error('Lesson creation error:', error);
    },
  });
}

export function useUpdateLesson() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<Lesson> }) => classroomService.updateLesson(id, data),
    onSuccess: (_, variables) => qc.invalidateQueries({ queryKey: ['lesson', variables.id] }),
    onError: (error) => {
      console.error('Lesson update error:', error);
    },
  });
}

export function useDeleteLesson() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => classroomService.deleteLesson(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['lessons'] }),
    onError: (error) => {
      console.error('Lesson deletion error:', error);
    },
  });
}

// ─── Progress ──────────────────────────────────────────────────────────────

export function useGetStudentProgress(studentId: number) {
  return useQuery<{ progress: LessonProgress[] }>({
    queryKey: ['progress', studentId],
    queryFn: () => classroomService.getStudentProgress(studentId).then(r => r.data),
    enabled: !!studentId,
    staleTime: 1000 * 60 * 5,
  });
}

export function useUpdateLessonProgress() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (progress: { enrollment_id: number; lesson_id: number; completed: boolean; progress_percentage: number }) => 
      classroomService.updateLessonProgress(progress),
    onSuccess: (_, variables) => {
      qc.invalidateQueries({ queryKey: ['progress', variables.enrollment_id] });
    },
    onError: (error) => {
      console.error('Progress update error:', error);
    },
  });
}

// ─── Quizzes ───────────────────────────────────────────────────────────────

export function useGetQuiz(id: number) {
  return useQuery<{ quiz: QuizWithOptions }>({
    queryKey: ['quiz', id],
    queryFn: () => classroomService.getQuiz(id).then(r => r.data),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
}

export interface QuizWithOptions {
  quiz: Quiz;
  questions: { id: number; question_text: string; question_text_bn?: string; points: number }[];
  options: { id: number; option_text: string; is_correct: boolean; order_index: number }[];
}

export function useSubmitQuiz() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (attemptData: {
      quiz_id: number;
      answers: Record<number, number>; // question_id => selected_option_id
      time_taken_seconds: number;
    }) => classroomService.submitQuizAttempt(attemptData),
    onSuccess: (result) => {
      qc.invalidateQueries({ queryKey: ['quiz', result.data.attempt_id] });
    },
    onError: (error) => {
      console.error('Quiz submission error:', error);
    },
  });
}

// ─── Announcements ─────────────────────────────────────────────────────────

export function useListAnnouncements(courseId?: number) {
  return useQuery<{ announcements: Announcement[] }>({
    queryKey: ['announcements', courseId],
    queryFn: () => classroomService.listAnnouncements(courseId).then(r => r.data),
    enabled: !!courseId,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCreateAnnouncement() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (announcementData: {
      course_id?: number;
      title: string;
      content: string;
      content_bn?: string;
      is_pinned?: boolean;
    }) => classroomService.createAnnouncement(announcementData),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['announcements'] }),
    onError: (error) => {
      console.error('Announcement creation error:', error);
    },
  });
}

export function useUpdateAnnouncement() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<Announcement> }) => classroomService.updateAnnouncement(id, data),
    onSuccess: (_, variables) => qc.invalidateQueries({ queryKey: ['announcements', variables.id] }),
    onError: (error) => {
      console.error('Announcement update error:', error);
    },
  });
}

export function useDeleteAnnouncement() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => classroomService.deleteAnnouncement(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['announcements'] }),
    onError: (error) => {
      console.error('Announcement deletion error:', error);
    },
  });
}

// ─── Student Dashboard ─────────────────────────────────────────────────────

export function useStudentDashboard(studentId: number) {
  return useQuery<{ dashboard: StudentDashboardData }>({
    queryKey: ['student-dashboard', studentId],
    queryFn: () => classroomService.getStudentDashboard(studentId).then(r => r.data),
    enabled: !!studentId,
    staleTime: 1000 * 60 * 5,
  });
}

// ─── Enrollments ───────────────────────────────────────────────────────────

export function useEnrollCourse(studentId: number, courseId: number) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: () => classroomService.enrollCourse(studentId, courseId),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['progress', studentId] });
      qc.invalidateQueries({ queryKey: ['courses'] });
    },
    onError: (error) => {
      console.error('Course enrollment error:', error);
    },
  });
}

export function useGetEnrollment(studentId: number, courseId: number) {
  return useQuery<{ enrollment: Enrollment }>({
    queryKey: ['enrollment', studentId, courseId],
    queryFn: () => classroomService.getEnrollment(studentId, courseId).then(r => r.data),
    enabled: !!studentId && !!courseId,
    staleTime: 1000 * 60 * 5,
  });
}

// Types for quiz options from API
interface QuizOptionApi {
  id: number;
  option_text: string;
  is_correct: boolean;
  order_index: number;
}