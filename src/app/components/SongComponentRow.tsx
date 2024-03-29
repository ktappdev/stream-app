import Image from 'next/image';
import { Song } from '@/app/lib/database';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const SongComponentRow: React.FC<Song> = ({ id, graphic, name, plays, length, liked }) => {
  return (
    <TableRow>
      <TableCell className="px-4 py-2">
        <Image src={graphic} alt={name} width={54} height={54} className="rounded-lg" />
      </TableCell>
      <TableCell className="px-4 py-2 font-medium">{name}</TableCell>
      <TableCell className="px-4 py-2">{plays}</TableCell>
      <TableCell className="px-4 py-2">{length}</TableCell>
      <TableCell className="px-4 py-2">{liked ? 'Yes' : 'No'}</TableCell>
    </TableRow>
  );
};

export default SongComponentRow;
