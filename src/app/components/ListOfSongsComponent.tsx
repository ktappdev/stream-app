import SongComponentRow from './SongComponentRow';
import { songs, Song } from '@/app/lib/database';
import { Table, TableBody, TableHeader } from "@/components/ui/table";

const ListOfSongsComponent = () => {
  const getRandomPictureUrl = (baseUrl: string) => {
    const randomNumber = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
    return `${baseUrl}?random=${randomNumber}`;
  };

  // Show only a fixed number of songs initially
  const initialSongs = songs.slice(0, 4);

  const scrollableTableStyles: React.CSSProperties = {
    maxHeight: '300px', // Adjust the height as per your requirement
    overflowY: 'scroll', // Ensure scrolling even when not necessary
  };

  return (
    <div style={scrollableTableStyles}>
      <Table>
        <TableBody>
          {songs.map((song: Song) => (
            <SongComponentRow
              key={song.id}
              id={song.id}
              graphic={getRandomPictureUrl(song.graphic)}
              name={song.name}
              plays={song.plays}
              length={song.length}
              liked={song.liked}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ListOfSongsComponent;
