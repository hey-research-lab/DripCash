import { ArticleView, articleMetadata, articleParams } from "@/components/site/ArticleView";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => articleParams("news");
export const generateMetadata = ({ params }: Props) => articleMetadata("news", params);

export default function Page({ params }: Props) {
  return <ArticleView category="news" params={params} />;
}
