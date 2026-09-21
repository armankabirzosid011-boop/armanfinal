import { useQuery, useNavigation } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardHeader, Progress, EmptyState, Skeleton, Button } from '@/components/ui';
import { useClassroom } from '@/hooks/useClassroom';
import { CourseDifficulty, CourseStatus } from '@/types';
import { envelope, search, shield, grid } from 'lucide-react';

export default function StudentCoursesPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const difficulty = searchParams.get('difficulty') || '';
  const status = searchParams.get('status') || '';

  const { data: courses, isLoading } = useListCourses({
    category: difficulty || undefined,
    status: status || undefined,
    search: query || undefined,
    page: 1,
    limit: 20,
  });

  if (isLoading) {
    return (
      <Card>
        <CardContent className="h-96 flex items-center justify-center">
          <Skeleton className="h-6 w-48 mr-3" />
          <Skeleton className="h-6 w-60" />
          <Skeleton className="h-6 w-24" />
        </CardContent>
      </Card>
    );
  }

  const filteredCourses = courses?.data?.items || [];

  return (
    <Card className="max-w-7xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between">
        <h2 className="text-2xl font-bold">{t('course_library')}</h2>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/student/classroom/courses')}
          >
            {t('all_courses')}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Filters */}
        <div className="mb-4">
          <div className="flex gap-2 flex-wrap">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate(`/${window.location.pathname}?q=${encodeURIComponent('')}`)}
            >
              {t('all_courses')}
            </Button>
            {['beginner', 'intermediate', 'advanced'].map((diff) => (
              <Button
                key={diff}
                variant={
                  difficulty === diff ? 'default' : 'outline'
                }
                size="sm"
                onClick={() =>
                  navigate(
                    `/${window.location.pathname}?q=${encodeURIComponent(
                      query
                    )}&difficulty=${diff}`
                  )
                }
              >
                {diff === 'beginner'
                  ? t('beginner')
                  : diff === 'intermediate'
                  ? t('intermediate')
                  : t('advanced')}
              </Button>
            ))}
            {status === 'published' ? (
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  navigate(
                    `/${window.location.pathname}?q=${encodeURIComponent(
                      query
                    )}&status=draft`
                  )
                }
              >
                {t('draft_only')}
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  navigate(
                    `/${window.location.pathname}?q=${encodeURIComponent(
                      query
                    )}&status=published`
                  )
                }
              >
                {t('published_only')}
              </Button>
            )}
          </div>
        </div>

        {/* Course Cards */}
        {filteredCourses.length === 0 ? (
          <EmptyState>
            <EmptyState.Icon />
            <EmptyState.Title>{t('no_courses_found')}</EmptyState.Title>
            <EmptyState.Description>
              {t('try_adjusting_filters')}
            </EmptyState.Description>
            <Button onClick={() => navigate('/student/classroom/courses')}>
              {t('browse_courses')}
            </Button>
          </EmptyState>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="h-full flex flex-col">
                {/* Course Header with Thumbnail */}
                {course.thumbnail_url ? (
                  <img
                    src={course.thumbnail_url}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                ) : (
                  <div
                    className="w-full h-48 rounded-t-lg bg-gradient-to-b from-muted/30 to-muted/50 flex items-center justify-center"
                  >
                    <span className="text-muted-foreground/60">
                      {t('no_thumbnail')}
                    </span>
                  </div>
                )}

                <CardContent className="flex-1 p-4 flex flex-col">
                  <h3 className="font-medium text-foreground line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground/80 line-clamp-2">
                    {course.description}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">
                      {t(difficulty === 'beginner' ? 'beginner' : difficulty === 'intermediate' ? 'intermediate' : 'advanced')}
                    </span>
                    {course.category && (
                      <span className="text-xs px-2 py-1 rounded bg-secondary/10 text-secondary">
                        {course.category}
                      </span>
                    )}
                  </div>
                  <Progress
                    value={course.progress_percentage || 0}
                    className="mt-2"
                    size="sm"
                  />
                  <div className="mt-2 text-xs text-muted-foreground">
                    {t('progress')} {course.progress_percentage?.toFixed(0) || '0'}%
                  </div>
                </CardContent>

                <CardFooter className="p-3 pt-0">
                  <div className="flex justify-between align-center">
                    <div className="flex items-center gap-2">
                      <span className="text-xs">
                        {t('lessons')} {course.total_lessons}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        / {course.total_lessons}
                      </span>
                    </div>
                    <Button
                      size="sm"
                      onClick={() =>
                        navigate(`/student/classroom/course/${course.id}`)
                      }
                    >
                      {t('view_course')}
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {/* Pagination */}
        {courses?.data?.has_more && (
          <div className="mt-4 text-center">
            <Button size="sm" onClick={() => navigate(window.location.href)}>
              {t('load_more')}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}