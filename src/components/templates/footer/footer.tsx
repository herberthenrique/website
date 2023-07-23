import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { Container } from '@src/components/shared/container';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t-color mt-10 border-t border-gray200">
      <Container className="py-8">
        <h2 className="h4 mb-4">{t('footer.aboutUs')}</h2>
        <div className="mt-8 flex justify-between">
          <div className="text-colorPrimary underline">
            <Link
              className="mr-3"
              href="https://linkedin.com/in/herberthenrique"
              rel="noopener noreferrer"
              target="_blank"
            >
              linkedin
            </Link>
            <Link
              href="https://github.com/herberthenrique"
              rel="noopener noreferrer"
              target="_blank"
            >
              github
            </Link>{' '}
          </div>
          <div className="">{t('footer.powerBy')} </div>
        </div>
      </Container>
    </footer>
  );
};
