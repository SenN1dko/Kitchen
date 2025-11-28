'use client';
import { Button } from '@heroui/react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="text-8xl font-bold text-gray-300">404</div>
        <h1>Страница не найдена</h1>
        <div className="pt-6">
          <Button as={Link} color="primary" href="/" variant="shadow">
            Вернуться на главную
          </Button>
        </div>
      </div>
    </>
  );
};
export default NotFoundPage;
