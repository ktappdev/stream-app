import SongComponentRow from './SongComponentRow';
import { songs, Song } from '@/app/lib/database';
import { Table, TableBody, TableHeader } from "@/components/ui/table"

const ListOfSongsComponent = () => {
  const getRandomPictureUrl = (baseUrl: string) => {
    const randomNumber = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
    return `${baseUrl}?random=${randomNumber}`;
  };

  return (
    <Table>
      {/* <TableHeader> */}
      {/* <tr> */}
      {/*   <th className="px-4 py-2">Image</th> */}
      {/*   <th className="px-4 py-2">Name</th> */}
      {/*   <th className="px-4 py-2">Plays</th> */}
      {/*   <th className="px-4 py-2">Length</th> */}
      {/*   <th className="px-4 py-2">Liked</th> */}
      {/* </tr> */}
      {/* </TableHeader> */}
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
  );
};

export default ListOfSongsComponent;
