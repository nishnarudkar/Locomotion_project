"use client"; 
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveRight, Check } from "lucide-react";
import { ContentLayout } from "@/components/panel/content-layout";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

interface ListingItem {
  title: string;
  dest1: string;
  dest2: string;
  dest3: string;
  time: string;
  platform: string;
  spstatus: string;
  link: string; // Add this to the interface
}

const listing: ListingItem[] = [
  {
    title: "Airoli",
    dest1: "Nerul",
    dest2: "Panvel",
    dest3: "Thane",
    time: "7:10 AM",
    platform: "→",
    spstatus: "S",
    link: "/specific", // Subpage link
  },
  {
    title: "Aman Lodge",
    dest1: "Nerul",
    dest2: "Panvel",
    dest3: "Thane",
    time: "7:35 AM",
    platform: "→",
    spstatus: "F",
    link: "/specific", // Subpage link
  },
  {
    title: "Ambarnath",
    dest1: "Nerul",
    dest2: "Panvel",
    dest3: "Thane",
    time: "8:19 AM",
    platform: "→",
    spstatus: "X",
    link: "/timeline", // Subpage link
  },
];

export default function Station() {
  const handleRowClick = (link: string) => {
    window.location.href = link; // Navigate to the link when row is clicked
  };

  return (
    <ContentLayout title="Home">
      <div className="flex">
        {/* Accordion for Notifications */}
        <Accordion type="single" collapsible className="w-full">
          {listing.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="h-12 flex items-center cursor-pointer hover:bg-gray-100">
                <div className="flex-1 text-left pl-2">
                  <p className="text-sm font-medium leading-none mb-1">
                    {item.title}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Table className="border-collapse w-full">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50px]">To</TableHead>
                      <TableHead>Destination</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[item.dest1, item.dest2, item.dest3].map((destination, idx) => (
                      <TableRow
                        key={idx}
                        className="cursor-pointer hover:bg-gray-100"
                        onClick={() => handleRowClick(item.link)} // Click handler for row navigation
                      >
                        <TableCell>{item.platform}</TableCell>
                        <TableCell>{destination}</TableCell>

                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </ContentLayout>
  );
}
