import Banner from '@/shared/components/layouts/banner';
import { Container } from '@/shared/components/layouts/container';
import { useTranslations } from 'next-intl';
import { Yeseva_One, Allura } from 'next/font/google';

const yeservaSans = Yeseva_One({
  weight: '400',
  variable: '--font-yeseva-one',
  subsets: ['latin'],
});

const alluraSans = Allura({
  weight: '400',
  variable: '--font-allura',
  subsets: ['latin'],
});

export default function Home() {
  const tMetaData = useTranslations('metaDataMessages');

  return (
    <Banner path="/images/bg-home.png">
      <div className="absolute left-8 top-1/3 h-full w-full">
        <p
          className={`text-8xl font-normal text-white ${yeservaSans.className}`}
        >
          NAIL CARE
        </p>
      </div>
      <div className="absolute left-[34%] top-96 h-full w-full xl:top-80">
        <p
          className={`text-9xl font-normal text-[#FEDE59] ${alluraSans.className}`}
        >
          is
        </p>
      </div>
      <div className="absolute left-8 top-[60%] h-full w-full md:left-60 xl:top-1/2">
        <p
          className={`text-8xl font-normal text-white ${yeservaSans.className}`}
        >
          SELF CARE
        </p>
      </div>
      <Container pageTitle={tMetaData('homeTitle')}>
        <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
          {/*  CONTENT HERE  */}
        </div>
      </Container>
    </Banner>
  );
}
