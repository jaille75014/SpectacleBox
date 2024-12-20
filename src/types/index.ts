export interface Event {
  id: string;
  title: string;
  artist: string;
  date: string;
  time: string;
  venue: string;
  price: number;
  imageUrl: string;
  availableSeats: number;
  category: 'Spectacle' | 'theatre' | 'festival';
}