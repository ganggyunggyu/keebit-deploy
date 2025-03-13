import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// ✅ 타입 적용: `inputs`는 다양한 타입을 받을 수 있도록 설정
export const cn = (...inputs: (string | boolean | undefined | null)[]): string => {
  return twMerge(clsx(inputs));
};
