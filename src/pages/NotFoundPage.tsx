import { Link } from 'react-router-dom';
import { AppShell } from '@/components/shared/AppShell';
import { ROUTES } from '@/constants';

export function NotFoundPage() {
  return (
    <AppShell>
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <div className="mb-6 text-6xl font-bold text-gray-300 dark:text-gray-700">404</div>
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Page not found</h1>
        <p className="mb-8 max-w-md text-lg text-gray-600 dark:text-gray-300">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link
          to={ROUTES.home}
          className="inline-flex items-center rounded-xl bg-gray-900 px-6 py-3 text-base font-semibold text-white shadow-soft transition-all hover:bg-gray-800 hover:shadow-medium dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
        >
          Go back home
        </Link>
      </div>
    </AppShell>
  );
}

export default NotFoundPage;
