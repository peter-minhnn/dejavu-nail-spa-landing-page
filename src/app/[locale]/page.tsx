import Hero from '@/features/home/hero';
import { Container } from '@/shared/components/layouts/container';
import { useTranslations } from 'next-intl';

export default function Home() {
  const tMetaData = useTranslations('metaDataMessages');
  return (
    <Container pageTitle={tMetaData('homeTitle')}>
      <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
        <Hero />
      </div>
    </Container>
  );
}
