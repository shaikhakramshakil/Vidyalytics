import { Wrench } from 'lucide-react';

type PlaceholderPageProps = {
  title: string;
  description: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="flex h-[calc(100vh-10rem)] w-full flex-col items-center justify-center rounded-lg border border-dashed text-center p-4 sm:p-6">
      <div className="flex flex-col items-center gap-3 sm:gap-4">
        <Wrench className="h-10 w-10 sm:h-12 sm:w-12 text-muted-foreground" />
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight font-headline">{title}</h1>
        <p className="text-sm sm:text-base text-muted-foreground max-w-xs sm:max-w-md">{description}</p>
      </div>
    </div>
  );
}
