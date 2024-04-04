import SongComponentRow from './SongComponentRow';
import { songs, Song } from '@/app/lib/database';
import { Table, TableBody, TableHeader } from "@/components/ui/table";

const ListOfSongsComponent = () => {
  const getRandomPictureUrl = (baseUrl: string) => {
    const randomNumber = Math.floor(Math.random() * 1000);
    return `${baseUrl}?random=${randomNumber}`;
  };

  // Show only a fixed number of songs initially
  const initialSongs = songs.slice(0, 4);

  const scrollableTableStyles: React.CSSProperties = {
    maxHeight: '400px',
    overflowY: 'scroll',
  };

  // NOTE: So table-fixed made a vexy big difference to the width of the app, not sure if it's a breaking one but it kinda looks ok.
  // it takse up all the scren i originally didn't plan to do this.
  // removed table-fixed
  return (
    <div style={scrollableTableStyles} className="scrollable-table">
      <Table className="w-full ">
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
