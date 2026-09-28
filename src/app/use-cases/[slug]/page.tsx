import { ArticleView, articleMetadata, articleParams } from "@/components/site/ArticleView";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => articleParams("use-cases");
export const generateMetadata = ({ params }: Props) => articleMetadata("use-cases", params);

export default function Page({ params }: Props) {
  return <ArticleView category="use-cases" params={params} />;
}
