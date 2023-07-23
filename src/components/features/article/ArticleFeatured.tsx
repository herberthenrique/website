import { useContentfulInspectorMode } from '@contentful/live-preview/react';

import { ArticleAuthor } from '@src/components/features/article/ArticleAuthor';
import { CtfImage, CtfRichText } from '@src/components/features/contentful';
import { PageBlogPostFieldsFragment } from '@src/lib/__generated/sdk';

interface ArticleFeaturedProps {
  article: PageBlogPostFieldsFragment;
}
export const ArticleFeatured = ({ article }: ArticleFeaturedProps) => {
  const inspectorProps = useContentfulInspectorMode({ entryId: article.sys.id });

  const { title, featuredContentHomepage } = article;

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-gray300 shadow-lg lg:flex-row">
      <div className="flex-1 basis-1/2" {...inspectorProps({ fieldId: 'featuredImage' })}>
        {article.featuredImage && (
          <CtfImage
            nextImageProps={{ className: 'w-full', priority: true, sizes: undefined }}
            {...article.featuredImage}
          />
        )}
      </div>

      <div className="relative flex flex-1 basis-1/2 flex-col justify-center py-6 px-4 lg:px-16 lg:py-12 xl:px-24">
        <div className="mb-2 flex flex-wrap items-center">
          <ArticleAuthor article={article} />
        </div>
        <h1 {...inspectorProps({ fieldId: 'title' })}>{title}</h1>
        {featuredContentHomepage && (
          <div {...inspectorProps({ fieldId: 'featuredContentHomepage' })}>
            <CtfRichText json={featuredContentHomepage?.json} />
          </div>
        )}
      </div>
    </div>
  );
};
