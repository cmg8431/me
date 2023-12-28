import { useAtom } from 'jotai';

import { ToastProps } from '@/components';
import { toastsAtom } from '@/store';

const sleep = (ms: number) => {
  return new Promise((r) => setTimeout(r, ms));
};

export const useToast = () => {
  const [toastAtom, setToastAtom] = useAtom(toastsAtom);

  const show = async ({ template, type, position }: ToastProps) => {
    if (toastAtom.visible) return;
    setToastAtom({ visible: true, template, type, position });
    await sleep(1200);
    setToastAtom({
      visible: false,
      template: undefined,
      type: undefined,
      position,
    });
  };

  const toast = Object.assign(show, {
    success: ({ template, position }: ToastProps) =>
      show({ template, type: 'success', position }),
    error: ({ template, position }: ToastProps) =>
      show({ template, type: 'error', position }),
  });

  return { toast };
};
