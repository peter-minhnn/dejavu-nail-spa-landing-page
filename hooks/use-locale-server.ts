'use server';

import { CookieEnums } from '../shared/enums/common.enum';
import { cookies } from 'next/headers';

export const useLocaleCookieServer = async () => {
  return (await cookies()).get(CookieEnums.NEXT_LOCALE)?.value;
};
