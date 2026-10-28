import { Hero } from '@/components/sections/Hero';
import { ImageCards } from '@/components/sections/ImageCards';
import { MediaCopyPanel } from '@/components/sections/MediaCopyPanel';
import { PhotoGallery } from '@/components/sections/PhotoGallery';

export default function HomePage() {
  return (
    <>
      <Hero />
      <MediaCopyPanel />
      <ImageCards />
      <PhotoGallery />
    </>
  );
}
