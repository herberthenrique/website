import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { LanguageSelector } from '@src/components/features/language-selector';
import { Container } from '@src/components/shared/container';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="pt-5 pb-8">
      <nav>
        <Container className="flex items-center justify-between">
          <h1 className="text-5xl">
            <Link href="/" title={t('common.homepage')}>
              Herbert Henrique
            </Link>
          </h1>
          <LanguageSelector />
        </Container>
      </nav>
    </header>
  );
};
