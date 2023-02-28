export interface ISlide {
    id: string;
    slug: string;
    name: string;
    subName: string;
    description: string;
    shortDescription: string;
    trailer: string;
    age: string;
    duration?: any;
    views: number;
    status: number;
    startdate: Date;
    enddate: Date;
    previewId: string;
    reviewId?: any;
    seoId: string;
    imageLandscape: string;
    imagePortrait: string;
    imageLandscapeMobile: string;
    point: number;
    totalVotes: number;
}