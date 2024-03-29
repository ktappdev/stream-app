
export interface Song {
  id: number;
  graphic: string;
  name: string;
  plays: number;
  length: string;
  liked: boolean;
}

export const songs: Song[] = [
  {
    id: 1,
    graphic: "https://picsum.photos/100",
    name: "Urban Legends",
    plays: 16720,
    length: "3:30",
    liked: true,
  },
  {
    id: 2,
    graphic: "https://picsum.photos/100",
    name: "Big Gun Man",
    plays: 5060,
    length: "4:15",
    liked: false,
  },
  {
    id: 3,
    graphic: "https://picsum.photos/100",
    name: "Neon Nights",
    plays: 820,
    length: "2:50",
    liked: true,
  },
  {
    id: 3,
    graphic: "https://picsum.photos/100",
    name: "What These Girls Say",
    plays: 800,
    length: "2:50",
    liked: true,
  },
  {
    id: 3,
    graphic: "https://picsum.photos/100",
    name: "Dem Dead",
    plays: 450,
    length: "2:50",
    liked: true,
  },
  {
    id: 3,
    graphic: "https://picsum.photos/100",
    name: "Tint",
    plays: 300,
    length: "2:50",
    liked: true,
  },
  {
    id: 3,
    graphic: "https://picsum.photos/100",
    name: "Cars",
    plays: 100,
    length: "2:50",
    liked: true,
  },
  // Add more songs here
];

