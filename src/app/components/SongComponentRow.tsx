import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Song } from '@/app/lib/database';
import { ImHeadphones } from "react-icons/im";
import { FaCirclePlay } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { LuHeart } from "react-icons/lu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TfiLayoutMenuSeparated } from 'react-icons/tfi';

const SongComponentRow: React.FC<Song> = ({ id, graphic, name, plays, length, liked }) => {

  const heartIcon = liked ? <FaHeart className="text-green-500" /> : <LuHeart />;

  return (
    <TableRow>
      <TableCell className="px-4 py-2"><FaCirclePlay /></TableCell> {/* New column for circle play icon */}
      <TableCell className="px-4 py-2 flex items-center">
        <Image src={graphic} alt={name} width={54} height={54} className="rounded-lg mr-2" />
        <span>{name}</span>
      </TableCell>
      <TableCell className="px-4 py-2">
        <div className="flex items-center">
          <ImHeadphones />
          <span className="ml-1">{plays}</span>
        </div>
      </TableCell>
      <TableCell className="px-4 py-2">
        <div className="flex items-center">
          <FaClock />
          <span className="ml-1">{length}</span>
        </div>
      </TableCell>
      <TableCell className="px-4 py-2">{heartIcon}</TableCell>
      <TableCell className="px-4 py-2"><TfiLayoutMenuSeparated /></TableCell>
    </TableRow>
  );
};

export default SongComponentRow;
