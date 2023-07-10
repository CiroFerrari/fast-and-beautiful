import getData from "@/utils/firebase/firestore/getData";
import { notFound } from 'next/navigation';
import { DynamicSection } from '@/components/sections/DynamicSection';

export default async function Page({ params }: { params: { pageSlug: string } }) {
  // const { content } = await useFetchPage(currentSlug);

  const currentSlug = params.pageSlug[params.pageSlug.length - 1];

  const content = await getData('pages', currentSlug);

  if (!content?.slug) {
    notFound();
  }

  return (
    <>
      {content.sections?.map((section: string) => {
        return <DynamicSection key={section} section={section} />;
      })}
    </>
  );

}
