import { ArticleView, articleMetadata, articleParams } from "@/components/site/ArticleView";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => articleParams("perspectives");
export const generateMetadata = ({ params }: Props) => articleMetadata("perspectives", params);

export default function Page({ params }: Props) {
  return <ArticleView category="perspectives" params={params} />;
}
