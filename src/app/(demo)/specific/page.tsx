"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveRight, Check } from "lucide-react";
import { ContentLayout } from "@/components/panel/content-layout";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";

const listing = [
  {
    title: "Thane",
    description: "Panvel — Thane",
    time: "7:10 AM",
    platform: "2",
    spstatus: "S",
    link: "/timeline"
  },
  {
    title: "Digha Gaon",
    description: "Panvel — Thane",
    time: "7:35 AM",
    platform: "2",
    spstatus: "F",
    link: "/timeline"
  },
  {
    title: "Thane",
    description: "Panvel — Thane",
    time: "8:19 AM",
    platform: "2 | 3",
    spstatus: "X",
    link: "/timeline"
  },
];

export default function Station() {
  const router = useRouter();

  const handleRowClick = (link: string) => {
    router.push(link); // Navigate to the link when row is clicked
  };

  return (
    <ContentLayout title="Home">
      <div className="flex">
        {/* Table of Notifications */}
        <Table className="border-collapse relative">
          <TableCaption>And the list continues</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left w-[100px]">Time</TableHead>
              <TableHead className="pl-0">Station</TableHead>
              <TableHead className="text-left"></TableHead>
              <TableHead className="text-right">PF</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {listing.map((item, index) => (
              <TableRow
                key={index}
                className="h-12 relative cursor-pointer hover:bg-gray-100"
                onClick={() => handleRowClick(item.link)} // Click handler for row navigation
              >
                <TableCell className="pr-0 relative">
                  {/* Badge column spacing here */}
                  <Badge>
                    <p className="text-sm font-medium m-0">
                      {item.time}
                    </p>
                  </Badge>
                </TableCell>
                <TableCell className="pl-0 text-left">
                  <div className="mt-2 mb-2">
                    <p className="text-sm font-medium leading-none mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm text-muted-foreground mt-0">
                      {item.description}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="pl-2 mt-2 mb-2">
                    <p className="text-sm font-medium leading-none mb-1">
                      {item.spstatus}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end space-x-1">
                    {/* Fixed-width container for separator */}
                    <div className="flex-shrink-0 w-[0.5px] h-10 bg-gray-300">
                      <Separator orientation="vertical" className="h-full w-1px bg-gray-300" />
                    </div>
                    {/* Container for PF text centered */}
                    <div className="flex-1 flex justify-center">
                      <p className="text-sm font-medium leading-none">
                        {item.platform}
                      </p>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </ContentLayout>
  );
}
