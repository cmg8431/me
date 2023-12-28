'use client';

import { useToast } from '@/hooks';

export default function Home() {
  const { toast } = useToast();
  return (
    <main>
      <button
        onClick={() => {
          toast({
            type: 'error',
            template: '잠시 후 다시 시도해주세요 😢',
            position: 'topCenter',
          });
        }}
      >
        test
      </button>
      <p>hello, world</p>
    </main>
  );
}
