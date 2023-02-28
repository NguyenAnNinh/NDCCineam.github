export interface iMovies {
    id: string;
    slug: string;
    name: string;
    subName?: string | null;
    description: string;
    trailer: string;
    age: string;
    duration: string;
    views: number;
    status: number;
    startdate: string;
    enddate: string;
    previewId?: string | null;
    reviewId?: string | null;
    seoId: string;
    imageLandscape: string;
    imagePortrait: string;
    imageLandscapeMobile: string;
    point: number;
    totalVotes: number;
  }