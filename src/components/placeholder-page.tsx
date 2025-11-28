import { Wrench } from 'lucide-react';

type PlaceholderPageProps = {
  title: string;
  description: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="flex h-[calc(100vh-10rem)] w-full flex-col items-center justify-center rounded-lg border border-dashed text-center">
      <div className="flex flex-col items-center gap-4">
        <Wrench className="h-12 w-12 text-muted-foreground" />
        <h1 className="text-2xl font-bold tracking-tight font-headline">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
