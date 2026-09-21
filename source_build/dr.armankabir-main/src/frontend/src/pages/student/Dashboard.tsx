import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardHeader, Progress, Button, EmptyState, StatsGrid, StatCard } from '@/components/ui';
import { useClassroom } from '@/hooks/useClassroom';
import { StudentDashboardData, CourseSummary, LessonSummary } from '@/types';

export default function StudentDashboard() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  // Get student ID from the auth state (set during login)
  const studentId = Number(location.state?.userId) || 
                    (typeof window !== 'undefined' ? parseInt(localStorage.getItem('user_id') || '0') : 0);

  const { data: dashboard, isLoading } = useStudentDashboard(studentId);

  const [activeCourseId, setActiveCourseId] = useState<number | null>(null);
  const [activeLessonId, setActiveLessonId] = useState<number | null>(null);

  if (isLoading) {
    return (
      <Card>
        <CardContent className="h-96 flex items-center justify-center">
          <p>{t('loading')}</p>
        </CardContent>
      </Card>
    );
  }

  if (!dashboard) {
    return (
      <Card>
        <CardContent>
          <EmptyState>
            <EmptyState.Icon />
            <EmptyState.Title>{t('no_dashboard_data')}</EmptyState.Title>
            <EmptyState.Description>{t('please_login_first')}</EmptyState.Description>
            <Button onClick={() => navigate('/student/login')}>{t('login')}</Button>
          </EmptyState>
        </CardContent>
      </Card>
    );
  }

  const { welcome_name, my_courses, courses_completed, lessons_completed, quiz_average, current_streak, overall_progress, continuing_course, continuing_lesson } = dashboard;

  // Find the course/lesson where the student last stopped
  const lastAccessedLesson = my_courses.find(c => c.progress_percentage > 0 && c.progress_percentage < 100);

  return (
    <Card className="max-w-7xl mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-bold">{t('welcome_back', { name: welcome_name })}</h2>
      </CardHeader>
      <CardContent>
        {/* Stats Grid */}
        <StatsGrid>
          <StatCard>
            <StatCard.Title>{t('my_courses')}</StatCard.Title>
            <StatCard.Value>{my_courses.length}</StatCard.Value>
            <StatCard.Change positive>{true}>{t('courses_enrolled')}</StatCard.Change>
          </StatCard>
          <StatCard>
            <StatCard.Title>{t('courses_completed')}</StatCard.Title>
            <StatCard.Value>{courses_completed}</StatCard.Value>
          </StatCard>
          <StatCard>
            <StatCard.Title>{t('lessons_completed')}</StatCard.Title>
            <StatCard.Value>{lessons_completed}</StatCard.Value>
          </StatCard>
          <StatCard>
            <StatCard.Title>{t('quiz_average')}</StatCard.Title>
            <StatCard.Value>{quiz_average.toFixed(0)}%</StatCard.Value>
          </StatCard>
          <StatCard>
            <StatCard.Title>{t('current_streak')}</StatCard.Title>
            <StatCard.Value>{current_streak}d</StatCard.Value>
          </StatCard>
          <StatCard>
            <StatCard.Title>{t('overall_progress')}</StatCard.Title>
            <StatCard.Value>{overall_progress.toFixed(0)}%</StatCard.Value>
          </StatCard>
        </StatsGrid>

        {/* Continue Learning Section */}
        <div className="mt-6 space-y-4">
          {continuing_course.id > 0 && (
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-medium text-foreground mb-3">
                {t('continue_learning')}
              </h3>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  {continuing_course.thumbnail_url ? (
                    <img src={continuing_course.thumbnail_url} alt={continuing_course.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-muted/50 text-muted-foreground">
                      {t('no_thumbnail')}
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground truncate">
                    {continuing_course.title}
                  </p>
                  <p className="text-sm text-muted-foreground/80">
                    {t('progress')} {continuing_course.progress_percentage.toFixed(0)}%
                  </p>
                </div>
              </div>
              <Button
                size="sm"
                onClick={() => {
                  setActiveCourseId(continuing_course.id);
                  navigate(`/student/classroom/course/${continuing_course.id}`);
                }}
              >
                {t('continue_learning')}
              </Button>
            </div>
          )}

          {continuing_lesson.course_title && (
            <div className="bg-card border border-border rounded-xl p-4">
              <p className="text-sm text-muted-foreground/80 mb-2">
                {t('lesson')}:
                <span className="font-medium text-foreground">
                  {continuing_lesson.lesson_title}
                </span>
              </p>
              <p className="text-xs text-muted-foreground">
                {t('from_course')} {continuing_lesson.course_title}
              </p>
            </div>
          )}
        </div>

        {/* My Courses Section */}
        {my_courses.length > 0 && (
          <div>
            <h3 className="text-lg font-medium text-foreground mb-4">
              {t('my_courses')}
            </h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {my_courses.map((course) => (
                <Card key={course.id} className="h-full">
                  <CardHeader className="p-0">
                    <img
                      src={course.thumbnail_url || '/assets/default-course.jpg'}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3">
                      <h4 className="font-medium text-foreground line-clamp-2">{course.title}</h4>
                      <p className="text-xs text-muted-foreground/80">
                        {t('progress')} {course.progress_percentage.toFixed(0)}%
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button
                      size="sm"
                      onClick={() => navigate(`/student/classroom/course/${course.id}`)}
                      className="w-full"
                    >
                      {t('view_course')}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )} else {
          <EmptyState>
            <EmptyState.Icon className="h-12 w-12" />
            <EmptyState.Title>{t('no_courses_enrolled')}</EmptyState.Title>
            <EmptyState.Description>{t('enroll_courses_first')}</EmptyState.Description>
            <Button onClick={() => navigate('/student/classroom/courses')} className="mt-2">
              {t('browse_courses')}
            </Button>
          </EmptyState>
        }
      </CardContent>
    </Card>
  );
}